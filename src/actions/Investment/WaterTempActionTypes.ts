export const WATER_TEMP_SUCCESS = 'WATER_TEMP_SUCCESS';
export const WATER_TEMP_FAIL = 'WATER_TEMP_FAIL';

export interface WaterTempFailDispatch {
  type: typeof WATER_TEMP_FAIL;
}

export interface WaterTempSuccessDispatch {
  type: typeof WATER_TEMP_SUCCESS;
  payload: {
    result: boolean;
    temp: string;
    time: string;
  };
}

export type WaterTempDispatchType =
  | WaterTempFailDispatch
  | WaterTempSuccessDispatch;
