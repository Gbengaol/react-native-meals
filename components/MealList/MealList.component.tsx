import React, { FC } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { MealItem } from "../MealItem/MealItem.component";

interface MealListProps {
  data: Array<any>;
}

export const MealList: FC<MealListProps> = ({ data }) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem item={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    padding: 15,
  },
});
