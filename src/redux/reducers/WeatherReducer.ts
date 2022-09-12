import {
  WeatherActions,
  WeatherType,
  WEATHER_FAIL,
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
} from '../action/WeatherActionType';

interface DefaultStateI {
  loading: boolean;
  weather?: WeatherType;
  error: string | undefined | unknown | null;
}

const initialState: DefaultStateI = {
  loading: false,
  error: null,
};

const weatherReducer = (
  state: DefaultStateI = initialState,
  action: WeatherActions,
): DefaultStateI => {
  switch (action.type) {
    case WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.payload,
        error: '',
      };
    case WEATHER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default weatherReducer;
