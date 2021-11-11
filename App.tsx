import React, { Fragment, useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MealsFavTabNavigator from "./navigation/MealsFavTabNavigator";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealsReducer from "./store/reducers/mealReducer";

const rootReducer = combineReducers({
  meals: mealsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

const fetchFont = async () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        onError={() => console.log("an error occured")}
        startAsync={fetchFont}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Fragment>
      <Provider store={store}>
        <MealsFavTabNavigator />
      </Provider>
    </Fragment>
  );
}

const styles = StyleSheet.create({});
