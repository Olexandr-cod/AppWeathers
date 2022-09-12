import {all, fork} from 'redux-saga/effects';
import weatherSaga from './WeatherSaga';

export function* rootSaga() {
  yield all([fork(weatherSaga)]);
}
