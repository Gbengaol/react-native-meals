import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsFavTabNavigator from "./MealsFavTabNavigator";
import { HeaderButton } from "../components/HeaderButton/HeaderButton.component";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import FiltersNavigator from "./FiltersNavigator";

const Drawer = createDrawerNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MealsFavoritesTab"
        screenOptions={{
          header: () => (
            <HeaderButton
              name="ios-star"
              IconType={Ionicons}
              onPress={() => {}}
            />
          ),
        }}
      >
        <Drawer.Screen
          name="MealsFavoritesTab"
          component={MealsFavTabNavigator}
          options={{ drawerLabel: "Favorites" }}
        />
        <Drawer.Screen
          name="FiltersScreen"
          component={FiltersNavigator}
          options={{ drawerLabel: "Filters" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
