import React, { FC } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { DUMMMY_CATEGORIES } from "../../data/dummy-data";
import { CategoryGridTile } from "../../components/CategoryGridTile/CategoryGridTile.component";

interface CategoriesScreenProps {}

export const CategoriesScreen: FC<CategoriesScreenProps> = ({}) => {
  return (
    <View>
      <FlatList
        numColumns={2}
        data={DUMMMY_CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CategoryGridTile item={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
