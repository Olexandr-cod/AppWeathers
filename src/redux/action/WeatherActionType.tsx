// export const WEATHER_REQUEST = 'WEATHER_REQUEST';
// export const WEATHER_FAIL = 'WEATHER_FAIL';
// export const WEATHER_SUCCESS = 'WEATHER_SUCCESS';

export type WeatherType = {
  weather: WeatherTypeInfo[];
};

type MainInfo = {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
};

type WeatherI = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type WindInfo = {
  speed: number;
};

type CityInfo = {
  id: number;
  name: string;
};

export type WeatherInfo = {
  dt: number;
  main: MainInfo;
  wind: WindInfo;
  wetherI: WeatherI[];
  dt_txt: number;
};

export type WeatherTypeInfo = {
  list: WeatherInfo[];
  city: CityInfo[];
};

// export interface WeatherFailPayload {
//   error: string | undefined | unknown | null;
// }

// export interface WeatherRequest {
//   type: typeof WEATHER_REQUEST;
// }

// export interface WeatherSuccess {
//   type: typeof WEATHER_SUCCESS;
//   payload: WeatherType;
// }

// export interface WeatherFail {
//   type: typeof WEATHER_FAIL;
//   payload: WeatherFailPayload;
// }

// export type WeatherActions = WeatherRequest | WeatherSuccess | WeatherFail;
