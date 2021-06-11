import { createSlice, PayloadAction, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import moment from 'moment';
import axios from "axios";
import { RootReducerType } from '@store/store'
export interface corona {
    accDefRate:number
    accExamCnt:number
    accExamCompCnt:number
    careCnt:number
    clearCnt:number
    createDt:string
    deathCnt:number
    decideCnt:number
    examCnt:number
    resutlNegCnt:number
    seq:number
    stateDt:string
    stateTime:string
    updateDt:string
}
export interface CoronaInfo {
    corona?: corona[]
    diff: number
    agoDiffCnt: number
    decideData: number[]
    clearData: number[]
    deathData: number[]
    currentData: number[]
    date: string[]
    loading:  boolean
}

const coronaInitialState = {
    accDefRate:0,
    accExamCnt:0,
    accExamCompCnt:0,
    careCnt:0,
    clearCnt:0,
    createDt:'',
    deathCnt:0,
    decideCnt:0,
    examCnt:0,
    resutlNegCnt:0,
    seq:0,
    stateDt:'',
    stateTime:'',
    updateDt:''
} as corona

//api get fear and greed
export const fetchCorona = createAsyncThunk<
    CoronaInfo
>('corona/fetchCorona', async(thunkAPI) => {
    try {
        const {data} = await axios.get(`DATAKR/Covid19/getCovid19InfStateJson?serviceKey=${process.env.DATA_KOR_API_KEY}&numOfRows=10&startCreateDt=${moment().add(-15,'day').format('YYYYMMDD')}&endCreateDt=${moment().format('YYYYMMDD')}`, {
          headers : {
            'Access-Control-Allow-Origin': '*'
          }
        })
        return data;
    } catch (e) {
    }
})

//get fear and greed index
export const corona = createSlice({
  name: 'corona',
  initialState : {
    corona: [coronaInitialState],
    chartOpt: {options:{},series:[{}]},
    diff: 0,
    agoDiffCnt: 0,
    decideData: [0],
    clearData: [0],
    deathData: [0],
    currentData: [0],
    date: [''],
    loading: false
  }, 
  reducers: {
    testttt: (state, action) => {
      state.loading = false // mutate the state all you want with immer
    },
  },
  extraReducers: {
    [fetchCorona.pending.type]: (state, action) => {
      // 호출 전
      state.loading = true;
    },
    [fetchCorona.fulfilled.type]: (state, action) => {
      // 성공
      state.loading = false;
      state.corona = action.payload.response.body?.items?.item;

      let ago2day = state.corona[2].decideCnt || 0;
      let ago = state.corona[1].decideCnt || 0;
      let today = state.corona[0].decideCnt || 0;
      let diffCnt = today - ago;
      let agoDiffCnt = ago - ago2day;
      state.diff = diffCnt;
      state.agoDiffCnt = agoDiffCnt;

      //let seriesData: number[] = [];
      let decideData = [] as number[];
      let clearData = [] as number[];
      let deathData = [] as number[];
      let currentData = [] as number[];
      let date = [] as string[];
      action.payload.response.body?.items?.item.reverse().forEach((item:corona) => {
        currentData.push(item.decideCnt - item.clearCnt);
        decideData.push(item.decideCnt);
        clearData.push(item.clearCnt);
        deathData.push(item.deathCnt);
        date.push(moment(item.stateDt.toString()).format('YYYY.MM.DD'));
      });

      state.decideData = decideData
      state.clearData = clearData
      state.deathData = deathData
      state.currentData = currentData
      state.date = date
      // chart data parsing
      
    },
    [fetchCorona.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      // 실패
      state.loading = false;
    },
  }
});

export const coronaState = (state: RootReducerType) => state.corona.corona;
export const coronaLoading = (state: RootReducerType) => state.corona.loading;
export const coronaDiffCnt = (state: RootReducerType) => state.corona.diff;
export const coronaAgoDiffCnt = (state: RootReducerType) => state.corona.agoDiffCnt;
export const coronaFullState = (state: RootReducerType) => state.corona;
export const {testttt} = corona.actions