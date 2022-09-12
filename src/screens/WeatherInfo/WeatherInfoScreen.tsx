import React from 'react';
import {View, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
import WeatherInfoItem from '../../components/Weather/WeatherInfoItem';
import styles from './styles';

const WeatherInfoScreen: React.FC = () => {
  const route = useRoute<any>();
  const params = route?.params?.item;

  return (
    <View style={styles.container}>
      <FlatList
        data={params.weather}
        keyExtractor={key => key.id.toString()}
        renderItem={(item: any) => (
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
