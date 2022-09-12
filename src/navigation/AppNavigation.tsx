import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WeatherScreen from '../screens/Weather/WeatherScreen';
import WeatherInfoScreen from '../screens/WeatherInfo/WeatherInfoScreen';

const Stack = createStackNavigator();
const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Weather"
        screenOptions={{
          headerTitle: '',
        }}>
        <Stack.Screen
          name="Weather"
          component={WeatherScreen}
          options={{headerTitle: 'Weather'}}
        />
        <Stack.Screen
          name="WeatherInfo"
          component={WeatherInfoScreen}
          options={{headerTitle: 'Weather Info', headerBackTitle: 'Back'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
