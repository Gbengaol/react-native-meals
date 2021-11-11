import React, { FC, useLayoutEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { TMealsNavigator } from "../../navigation/MealsNavigator";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { MealList } from "../../components/MealList/MealList.component";
import { IMeal } from "../../interfaces/meal";
import { useTypedSelector } from "../../redux-hooks/useTypedSelector";
import { DefaultText } from "../../components/DefaultText/DefaultText.component";

interface CategoryMealsScreenProps {}

type MealsNavigatorProps = NativeStackNavigationProp<
  TMealsNavigator,
  "CategoryMeals"
>;

type MealsRouteProps = RouteProp<TMealsNavigator, "CategoryMeals">;

export const CategoryMealsScreen: FC<CategoryMealsScreenProps> = ({}) => {
  const navigation = useNavigation<MealsNavigatorProps>();
  const { params } = useRoute<MealsRouteProps>();

  const meals = useTypedSelector((state) => state.meals.filteredMeals);

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: params.title });
  }, [navigation, params]);

  const categoryMeals = meals.filter((meal: IMeal) =>
    meal.categoryIds.includes(params.id)
  );

  return (
    <View style={styles.screen}>
      {categoryMeals?.length ? (
        <MealList data={categoryMeals} />
      ) : (
        <View style={styles.content}>
          <DefaultText>No meals found. Check your filters</DefaultText>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
