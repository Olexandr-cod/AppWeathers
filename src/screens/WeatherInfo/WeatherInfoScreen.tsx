import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

const WeatherInfoScreen: React.FC = () => {
  const route = useRoute<any>();
  const params = route?.params?.item;
  return <View style={{backgroundColor: '#fff', flex: 1}} />;
};

export default WeatherInfoScreen;
