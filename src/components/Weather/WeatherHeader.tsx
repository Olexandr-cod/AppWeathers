import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface WeatherHeaderProps {
  city: string | undefined;
}

const WeatherHeader: React.FC<WeatherHeaderProps> = ({city}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Weather in {city}</Text>
      <View style={styles.blocTitle}>
        <Text style={styles.titleSelect}>Select a day and time:</Text>
      </View>
    </View>
  );
};

export default WeatherHeader;
