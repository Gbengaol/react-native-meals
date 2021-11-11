import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ICategory } from "../../interfaces/category";
import { useNavigation } from "@react-navigation/native";
import { TMealsNavigator } from "../../navigation/MealsNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface CategoryGridTileProps {
  item: ICategory;
}

type MealsNavigatorProps = NativeStackNavigationProp<
  TMealsNavigator,
  "CategoryMeals"
>;

export const CategoryGridTile: FC<CategoryGridTileProps> = ({ item }) => {
  const navigation = useNavigation<MealsNavigatorProps>();

  return (
    <TouchableOpacity
      style={[styles.gridItem, { backgroundColor: item.color }]}
      onPress={() =>
        navigation.navigate("CategoryMeals", {
          ...item,
        })
      }
    >
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 3,
    shadowOpacity: 0.26,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 21,
    color: "#fff",
    textAlign: "right",
  },
});
