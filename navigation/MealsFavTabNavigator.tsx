import React from "react";
import MealsNavigator from "./MealsNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { COLORS } from "../helpers/colors";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FavoritesStackNavigator from "./FavoritesStackNavigator";
import FiltersNavigator from "./FiltersNavigator";

export type TMealsFavTabNavigator = {
  Meals: undefined;
  FiltersNavigator: undefined;
  "Favorites Stack": undefined;
};

const Tab = createMaterialBottomTabNavigator<TMealsFavTabNavigator>();

const MealsFavTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor={COLORS.secondary}
        inactiveColor={COLORS.primary}
        barStyle={{ backgroundColor: COLORS.white }}
        shifting={true}
        initialRouteName="Meals"
      >
        <Tab.Screen
          name="Meals"
          component={MealsNavigator}
          options={{
            tabBarLabel: "Meals",
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-restaurant" color={color} size={20} />
            ),
            tabBarColor: COLORS.white,
          }}
        />
        <Tab.Screen
          name="Favorites Stack"
          component={FavoritesStackNavigator}
          options={{
            tabBarLabel: "Favorites",
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-star" color={color} size={20} />
            ),
            tabBarColor: COLORS.white,
          }}
        />
        <Tab.Screen
          name="FiltersNavigator"
          component={FiltersNavigator}
          options={{
            tabBarLabel: "Filters",
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-filter" color={color} size={20} />
            ),
            tabBarColor: COLORS.white,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MealsFavTabNavigator;
