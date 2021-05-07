import { createSlice, PayloadAction, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "axios";
import { RootReducerType } from '@store/store'

export interface fgi {
    now : {},
    previousClose : {}
}
export interface stock {
    fgi : fgi
    loading :  boolean
    exchangeRate : string
    exchangeRateLoading : boolean
}

//api get fear and greed
export const fetchExchangeRate = createAsyncThunk<
    stock
>('stock/fetchExchangeRate', async(thunkAPI) => {
    try {
        const {data} = await axios.get('https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD')
        return data;
    } catch (e) {
        console.log(e)
    }
})

//api get fear and greed
export const fetchFgi = createAsyncThunk<
    stock
>('stock/fetchFgi', async(thunkAPI) => {
    try {
        const {data} = await axios.get('https://fear-and-greed-index.p.rapidapi.com/v1/fgi',{
            headers : {
                'x-rapidapi-key': process.env.REACT_APP_FGI_API_KEY,
                'x-rapidapi-host': 'fear-and-greed-index.p.rapidapi.com'
            }
        })
        return data;
    } catch (e) {
        console.log(e)
    }
})

//get fear and greed index
export const stock = createSlice({
  name: 'stock',
  initialState: {
    fgi : {
        now : { value : 0, valueText : "Neutral" },
        previousClose : { value : 0, valueText : "Neutral" }
    },
    loading: false,
    exchangeRate: 0,
    exchangeRateLoading: false
  }, 
  reducers: {
    // getFgi: (state, action: PayloadAction<string>) => {
    //     return state;
    // }    
  },
  extraReducers: {
    [fetchFgi.pending.type]: (state, action) => {
      // 호출 전
      state.loading = true;
    },
    [fetchFgi.fulfilled.type]: (state, action) => {
      // 성공
      state.loading = false;
      state.fgi = action.payload.fgi;
    },
    [fetchFgi.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      // 실패
      state.loading = false;
    },

    [fetchExchangeRate.pending.type]: (state, action) => {
      // 호출 전
      state.loading = true;
    },
    [fetchExchangeRate.fulfilled.type]: (state, action) => {
      // 성공
      state.exchangeRateLoading = false;
      state.exchangeRate = action.payload[0]?.basePrice;
    },
    [fetchExchangeRate.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      // 실패
      state.exchangeRateLoading = false;
    }
  }
});

// const fgiState = (state: RootReducerType) => state.stock.fgi;

// export const getFgi = createSelector(fgiState, state => {
//     console.log('state11111111111111111111',state);
//     return state;
// });

export const fgiState = (state: RootReducerType) => state.stock.fgi;
export const fgiLoading = (state: RootReducerType) => state.stock.loading;

export const exchangeRateState = (state: RootReducerType) => state.stock.exchangeRate;
export const exchangeRateLoading = (state: RootReducerType) => state.stock.exchangeRateLoading;