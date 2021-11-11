import React, { FC, Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { MealList } from "../../components/MealList/MealList.component";
import { useTypedSelector } from "../../redux-hooks/useTypedSelector";
import { DefaultText } from "../../components/DefaultText/DefaultText.component";

interface FavoritesScreenProps {}

export const FavoritesScreen: FC<FavoritesScreenProps> = ({}) => {
  const meals = useTypedSelector((state) => state.meals.favoriteMeals);

  return (
    <Fragment>
      {meals?.length ? (
        <MealList data={meals} />
      ) : (
        <View style={styles.content}>
          <DefaultText>No favs found. Kindly add some</DefaultText>
        </View>
      )}
    </Fragment>
  );
};
const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
