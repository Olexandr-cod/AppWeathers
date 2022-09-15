import React from 'react';
import {View, FlatList} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {WeatherInfoItem} from '../../components/Weather';
import styles from './styles';

type Weather = {
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
    },
  ];
  wind: {
    speed: number;
  };
};

type RootStackParamList = {
  WeatherInfo: {item: Weather};
};

type ScreenRouteProp = RouteProp<RootStackParamList, 'WeatherInfo'>;

const WeatherInfoScreen: React.FC = () => {
  const route = useRoute<ScreenRouteProp>();
  const params = route?.params?.item;

  return (
    <View style={styles.container}>
      <FlatList
        data={params.weather}
        keyExtractor={key => key.id.toString()}
        renderItem={item => (
          <WeatherInfoItem
            temp={params.main.temp}
            feelsLike={params.main.feels_like}
            pressure={params.main.pressure}
            humidity={params.main.humidity}
            main={item.item.main}
            description={item.item.description}
            speed={params.wind.speed}
          />
        )}
      />
    </View>
  );
};

export default WeatherInfoScreen;
