import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import moment from 'moment';
import axios from 'axios';
import { RootReducerType } from '@store/store';

interface Weather {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    clouds: any;
    rain: any;
  };
  loading: boolean;
}

interface Air {
  items: AirItem[];
  AirLoading: boolean;
}

interface AirItem {
  actionKnack: string;
  informOverall: string;
  informGrade: string;
  imageUrl3: string;
  imageUrl2: string;
  imageUrl1: string;
  informCode: string;
  imageUrl4: string;
  imageUrl5: string;
  informCause: string;
  imageUrl6: string;
  imageUrl7: string;
  imageUrl8: string;
  imageUrl9: string;
  informData: string;
  dataTime: string;
}

const initAir: Air = {
  items: [],
  AirLoading: false,
};

//api get seoul weather
export const fetchSeoulWeather = createAsyncThunk<Weather>(
  'weather/fetchWeather',
  async (thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=SEOUL&appid=${process.env.WEATHER_API_KEY}`
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

//api get AIR INFO
export const fetchKoreaAir = createAsyncThunk<Air, string, {}>(
  'weather/fetchKoreaAir',
  async (informCode, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/SUB-DATAKR/ArpltnInforInqireSvc/getMinuDustFrcstDspth?searchDate=${moment().format('YYYY-MM-DD')}&returnType=json&serviceKey=${process.env.KOREA_AIR_API_KEY}&numOfRows=100&pageNo=1&informCode=${informCode}&ver=1.1`
      );

      //const { items } = resData.data.response?.body

      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const weather = createSlice({
  name: 'weather',
  initialState: {
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
      clouds: { all : 0 },
      rain: {'1h': 0, '3h': 0},
    },
    loading: false,
  },
  reducers: {},
  extraReducers: {
    // --------- seoul weather -------
    [fetchSeoulWeather.pending.type]: (state, action) => {
      // 호출 전
      state.loading = true;
    },
    [fetchSeoulWeather.fulfilled.type]: (state, action) => {
      // 성공
      state.loading = false;
      const getMain = action.payload;
      getMain.temp = (getMain.main.temp - 273.15).toFixed(1);
      getMain.feels_like = (getMain.main.feels_like - 273.15).toFixed(1);
      state.main = getMain;
    },
    [fetchSeoulWeather.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      // 실패
      state.loading = false;
    },
  },
});

export const air = createSlice({
  name: 'weather/air',
  initialState: initAir,
  reducers: {},
  extraReducers: {
    // ------- Air ---------
    [fetchKoreaAir.pending.type]: (state, action) => {
      // 호출 전
      state.AirLoading = true;
    },
    [fetchKoreaAir.fulfilled.type]: (state, action) => {
      // 성공
      state.AirLoading = false;
      const { items } = action.payload?.response?.body;
      state.items = items;
    },
    [fetchKoreaAir.rejected.type]: (state, action: PayloadAction<string>) => {
      // 실패
      state.AirLoading = false;
    },
  },
});

export const weatherState = (state: RootReducerType) => state.weather;
export const weatherLoading = (state: RootReducerType) => state.weather.loading;

export const AirState = (state: RootReducerType) => state.air.items;
export const AirLoading = (state: RootReducerType) => state.air.AirLoading;
