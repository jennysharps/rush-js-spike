import React from 'react';
import { Text, TextProps } from 'react-native';

interface IProps extends TextProps {
  children: string;
}

export const Title: React.FC<IProps> = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export default Title;
