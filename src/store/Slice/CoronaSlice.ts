import { createSlice, PayloadAction, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "axios";
import { RootReducerType } from '@store/store'
import xmlConv from 'xml-js';

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
    stateDt:number
    stateTime:string
    updateDt:string
}
export interface CoronaInfo {
    corona : [corona]
    Coronaloading :  boolean
}

//api get fear and greed
export const fetchCorona = createAsyncThunk<
    CoronaInfo
>('corona/fetchCorona', async(thunkAPI) => {
    try {
        const {data} = await axios.get(`DATAKR/Covid19/getCovid19InfStateJson?serviceKey=${process.env.DATA_KOR_API_KEY}&numOfRows=10&startCreateDt=20210510&endCreateDt=20210511`, {
          headers : {
            'Access-Control-Allow-Origin': '*'
          }
        })
        return data.response.body.items.item;
    } catch (e) {
        console.log(e)
    }
})

//get fear and greed index
export const corona = createSlice({
  name: 'corona',
  initialState: {
    corona : [],
    loading: false,
  }, 
  reducers: {
 
  },
  extraReducers: {
    [fetchCorona.pending.type]: (state, action) => {
      // 호출 전
      state.loading = true;
    },
    [fetchCorona.fulfilled.type]: (state, action) => {
      // 성공
      state.loading = false;
      state.corona = action.payload;
      // let json = xmlConv.xml2json(action.payload, { compact: true })
      // state.corona = JSON.parse(json)
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
