import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

import axios from 'axios';

const keyWeather = 'fc731a1596851bf216c2914bf0a2f0ef';
const lat = 50.431;
const lon = 30.517023;

const baseURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${keyWeather}`;
const WeatherScreen: React.FC = () => {
  // const navigation = useNavigation<any>();

  useEffect(() => {
    getWeather();
  }, []);

  // console.log('posts----', posts);
  const getWeather = async () => {
    try {
      const result = await axios.get(`${baseURL}`);
      console.log(result);
      // return result;
    } catch (err) {
      console.error('err', err);
    }
  };
  return (
    <View>
      <Text>Weather List</Text>
    </View>
  );
};

export default WeatherScreen;
