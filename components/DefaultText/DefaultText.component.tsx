import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

interface DefaultTextProps {}

export const DefaultText: FC<DefaultTextProps> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};
const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});
