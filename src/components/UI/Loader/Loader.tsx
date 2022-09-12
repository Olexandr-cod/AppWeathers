import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

const Loader: React.FC = () => {
  return (
    <View style={styles.noDataStyle}>
      <ActivityIndicator size={'small'} color={'#000'} />
    </View>
  );
};

export default Loader;
