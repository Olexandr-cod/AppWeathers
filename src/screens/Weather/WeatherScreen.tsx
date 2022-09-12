import moment from 'moment';
import React, {useEffect, useCallback} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../components/UI/Loader/Loader';
import WeatherHeader from '../../components/Weather/WeatherHeader';
import {useNavigation} from '@react-navigation/native';
import {WeatherRequestAction} from '../../redux/action/WeatherAction';
import {RootState} from '../../redux/reducers/rootReducer';
import styles from './styles';

const WeatherScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const city = useSelector(
    (state: RootState) => state.weather.weather?.weather.city.name,
  );
  const weather = useSelector(
    (state: RootState) => state.weather.weather?.weather,
  );
  const loading = useSelector((state: RootState) => state.weather?.loading);
  const error = useSelector((state: RootState) => state.weather?.error);

  useEffect(() => {
    dispatch(WeatherRequestAction());
  }, [dispatch]);

  const MemoizedWeather = useCallback(
    (item: any) => {
      return (
        <TouchableOpacity
          style={styles.containerCallendar}
          onPress={() => navigation.navigate('WeatherInfo', item)}>
          <Text>
            {moment.unix(item.item.dt).format('dddd')},{' '}
            {moment(item.item.dt_txt).format('LLL')}
          </Text>
        </TouchableOpacity>
      );
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <WeatherHeader city={city} />

      {loading && <Loader />}
      {error && (
        <View>
          <Text>Error</Text>
        </View>
      )}

      {weather && weather.list && (
        <FlatList
          data={weather.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.key}
          renderItem={({item}) => <MemoizedWeather item={item} />}
        />
      )}
    </View>
  );
};

export default WeatherScreen;
