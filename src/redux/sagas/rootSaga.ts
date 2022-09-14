import {all, fork} from 'redux-saga/effects';
import weatherSaga from '../WeatherRedux/weatherSaga';

export function* rootSaga() {
  yield all([fork(weatherSaga)]);
}
