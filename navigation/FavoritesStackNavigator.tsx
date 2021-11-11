import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../helpers/colors";
import { FavoritesScreen } from "../screens/FavoritesScreen/FavoritesScreen";
import { MealDetailScreen } from "../screens/MealDetailScreen/MealDetailScreen";

export type TFavouritesStackNavigator = {
  Favorites: undefined;
  MealDetail: undefined;
};

const Stack = createNativeStackNavigator<TFavouritesStackNavigator>();

function FavoritesStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
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
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: "Favorites" }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={{ title: "Meal Detail" }}
      />
    </Stack.Navigator>
  );
}

export default FavoritesStackNavigator;
