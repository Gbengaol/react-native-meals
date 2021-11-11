import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreen } from "../screens/CategoriesScreen/CategoriesScreen";
import { CategoryMealsScreen } from "../screens/CategoryMealsScreen/CategoryMealsScreen";
import { MealDetailScreen } from "../screens/MealDetailScreen/MealDetailScreen";
import { ICategory } from "../interfaces/category";
import { COLORS } from "../helpers/colors";

export type TMealsNavigator = {
  Categories: undefined;
  CategoryMeals: ICategory;
  MealDetail: {
    mealId: string;
  };
};

const Stack = createNativeStackNavigator<TMealsNavigator>();

function MealsNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: "Categories" }}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={{ title: "Categories Meals" }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={{ title: "Meal Details" }}
      />
    </Stack.Navigator>
  );
}

export default MealsNavigator;
