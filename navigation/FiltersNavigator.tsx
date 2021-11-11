import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FiltersScreen } from "../screens/FiltersScreen/FiltersScreen";
import { COLORS } from "../helpers/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type TFiltersNavigator = {
  Filters: undefined;
};

const Stack = createNativeStackNavigator<TFiltersNavigator>();

function FiltersNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Filters"
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
        name="Filters"
        component={FiltersScreen}
        options={{ title: "Filters Screen" }}
      />
    </Stack.Navigator>
  );
}

export default FiltersNavigator;
