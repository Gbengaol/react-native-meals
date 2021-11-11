import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { DefaultText } from "../DefaultText/DefaultText.component";

interface ListItemProps {}

export const ListItem: FC<ListItemProps> = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
