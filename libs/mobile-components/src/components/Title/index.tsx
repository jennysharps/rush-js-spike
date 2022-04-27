import React from "react";
import { Text, TextProps } from "react-native";

interface Props extends TextProps  {
    children: string
}

export const Title: React.FC<Props> = ({ children, ...restProps }) => {
  return (
    <Text {...restProps}>{children}</Text>
  );
}

export default Title;