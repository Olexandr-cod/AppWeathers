import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface ButtonDefaultProps {
  title: string;
  onPress: () => void;
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonDefault;
