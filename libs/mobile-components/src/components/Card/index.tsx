import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "../Title";

interface Props {
    title?: string
}

export const Card: React.FC<Props> = ({ title, children, ...restProps }) => {
  return (
    <View {...restProps}>
      {title && <Title style={[styles.baseText]}>{title}</Title>}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    color: 'red'
  }
});


export default Card;
