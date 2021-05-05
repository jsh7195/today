import axios from 'axios';
import { Dispatch } from 'redux';
import {
  WaterTempDispatchType,
  WATER_TEMP_SUCCESS,
  WATER_TEMP_FAIL,
} from './WaterTempActionTypes';

export const fetchWaterTempData = () => async (
  dispatch: Dispatch<WaterTempDispatchType>
) => {
  try {
    const res = await axios.get('/WATER/TEMP');
    const { data } = res;
    dispatch({
      type: WATER_TEMP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WATER_TEMP_FAIL,
    });
  }
};
