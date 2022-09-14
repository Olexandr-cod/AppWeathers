import {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {getWeather} from '../../services/weather.api';
// import {WeatherFailAction, WeatherSuccessAction} from '../action/WeatherAction';
import {WeatherType} from '../action/WeatherActionType';
import {weatherFail, weatherSuccess} from './WeatherSlice';

function* fetchWeatherSaga() {
  try {
    const responce: AxiosResponse<WeatherType[]> = yield call(getWeather);
    yield put(weatherSuccess(responce.data));
  } catch (e) {
    yield put(weatherFail(e));
  }
}

function* weatherSaga() {
  yield takeEvery('weather/weatherRequest', fetchWeatherSaga);
}

export default weatherSaga;
