import axios from 'axios';

const keyWeather = 'fc731a1596851bf216c2914bf0a2f0ef';
const lat = 50.431;
const lon = 30.517023;

const baseURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${keyWeather}`;

export const getWeather = async () => {
  try {
    const result = await axios.get(`${baseURL}`);
    return result.data;
  } catch (err) {
    console.error(err);
  }
};
