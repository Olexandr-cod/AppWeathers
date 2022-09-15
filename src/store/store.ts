import {configureStore} from '@reduxjs/toolkit';
// import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

// import rootReducer from '../redux/reducers/rootReducer';
import {rootSaga} from '../redux/sagas/rootSaga';

import weatherReducer from '../redux/WeatherRedux/WeatherSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    weather: weatherReducer.reducer,
  },
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);

export default store;
