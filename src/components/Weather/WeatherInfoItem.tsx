import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface WeatherInfoItemProps {
  temp: number;
  feelsLike: number;
  pressure: number;
  humidity: number;
  main: string;
  description: string;
  speed: number;
}
const WeatherInfoItem: React.FC<WeatherInfoItemProps> = ({
  temp,
  feelsLike,
  pressure,
  humidity,
  main,
  description,
  speed,
}) => {
  return (
    <View style={styles.containerInfoWeather}>
      {!!temp && <Text style={styles.text}>Temp: {temp} &#x2103;</Text>}
      {!!feelsLike && <Text style={styles.text}>Feels like: {feelsLike}</Text>}
      {!!pressure && <Text style={styles.text}>Pressure: {pressure}</Text>}
      {!!humidity && <Text style={styles.text}>Humidity: {humidity}</Text>}
      {!!main && <Text style={styles.text}>Weather main: {main}</Text>}
      {!!description && (
        <Text style={styles.text}>Weather description: {description}</Text>
      )}
      {!!speed && <Text style={styles.text}>Speed: {speed}</Text>}
    </View>
  );
};

export default WeatherInfoItem;
