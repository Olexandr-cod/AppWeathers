import moment from 'moment';
import React, {useEffect, useCallback} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Loader} from '../../components/UI';
import {WeatherHeader} from '../../components/Weather';
import {useNavigation} from '@react-navigation/native';
// import {WeatherRequestAction} from '../../redux/action/WeatherAction';
import {RootState} from '../../store/store';
import styles from './styles';
import {weatherRequest} from '../../redux/WeatherRedux/WeatherSlice';
import {StackNavigationProp} from '@react-navigation/stack';

type WeatherData = {
  item: {
    dt: number;
    dt_txt: number;

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
};

type RootStackParamList = {
  Weather: undefined;
  WeatherInfo: WeatherData;
};

type NavigationParams = StackNavigationProp<RootStackParamList, 'WeatherInfo'>;

const WeatherScreen: React.FC = () => {
  const navigation = useNavigation<NavigationParams>();
  const dispatch = useDispatch();
  const weather = useSelector((state: RootState) => state.weather.weather);
  const loading = useSelector((state: RootState) => state.weather?.loading);
  const error = useSelector((state: RootState) => state.weather?.error);

  useEffect(() => {
    dispatch(weatherRequest());
  }, [dispatch]);

  const MemoizedWeather = useCallback(
    (item: WeatherData) => {
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
      <WeatherHeader city={weather?.city?.name} />

      {loading && <Loader />}
      {error && (
        <View>
          <Text>Error</Text>
        </View>
      )}

      {weather && weather?.list && (
        <FlatList
          data={weather?.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.key}
          renderItem={({item}) => <MemoizedWeather item={item} />}
        />
      )}
    </View>
  );
};

export default WeatherScreen;
