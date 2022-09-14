// import {AxiosResponse} from 'axios';
// import {call, put, takeEvery} from 'redux-saga/effects';
// import {getWeather} from '../../services/weather.api';
// import {WeatherFailAction, WeatherSuccessAction} from '../action/WeatherAction';
// import {WeatherTypeInfo, WEATHER_REQUEST} from '../action/WeatherActionType';

// function* fetchWeatherSaga() {
//   try {
//     const responce: AxiosResponse<WeatherTypeInfo[]> = yield call(getWeather);
//     yield put(
//       WeatherSuccessAction({
//         weather: responce.data,
//       }),
//     );
//   } catch (e) {
//     yield put(
//       WeatherFailAction({
//         error: e,
//       }),
//     );
//   }
// }

// function* weatherSaga() {
//   yield takeEvery(WEATHER_REQUEST, fetchWeatherSaga);
// }

// export default weatherSaga;
