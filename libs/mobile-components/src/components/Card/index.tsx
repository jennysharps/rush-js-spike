import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Title from '../Title';

interface IProps {
  title?: string;
}

interface IStyles {
  baseText: ViewStyle;
}

const styles: StyleSheet.NamedStyles<IStyles> = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    color: 'red'
  }
});

export const Card: React.FC<IProps> = ({ title, children, ...restProps }) => {
  return (
    <View {...restProps}>
      {title && <Title style={[styles.baseText]}>{title}</Title>}
      {children}
    </View>
  );
};

export default Card;
