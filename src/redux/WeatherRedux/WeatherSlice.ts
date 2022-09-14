import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {WeatherType} from '../action/WeatherActionType';

interface DefaultStateI {
  loading: boolean;
  weather: WeatherType[];
  error: string | undefined | unknown | null;
}

const initialState: DefaultStateI = {
  loading: false,
  weather: [],
  error: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    weatherRequest(state) {
      state.loading = true;
    },
    weatherSuccess(state, action: PayloadAction<WeatherType[]>) {
      state.loading = false;
      state.weather = action.payload;
    },
    weatherFail(state, action: PayloadAction<string | unknown | null>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {weatherRequest, weatherSuccess, weatherFail} =
  weatherSlice.actions;

export default weatherSlice;
