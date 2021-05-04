
import {
  WaterTempDispatchType,
  WATER_TEMP_SUCCESS,
  WATER_TEMP_FAIL,
} from '@actions/Investment/WaterTempActionTypes';

interface InitialState {
  success: boolean;
  station?: string;
  temp?: string;
  time?: string;
}

const initialState: InitialState = {
  success: false,
};

const WaterTempReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case WATER_TEMP_FAIL:
      return {
        ...state,
        success: false,
      };
    case WATER_TEMP_SUCCESS:
      return {
        ...state,
        success: true,
        ...action.payload,
      };
    default:
      break;
  }
  return state;
};

export default WaterTempReducer;
