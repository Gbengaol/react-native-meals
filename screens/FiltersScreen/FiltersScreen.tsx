import React, { FC, useLayoutEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FilterSwitch } from "../../components/FilterSwitch/FilterSwitch.component";
import { HeaderButton } from "../../components/HeaderButton/HeaderButton.component";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TFiltersNavigator } from "../../navigation/FiltersNavigator";
import { useActions } from "../../redux-hooks/useActions";

interface FiltersScreenProps {}

type FilterNavigatorProps = NativeStackNavigationProp<
  TFiltersNavigator,
  "Filters"
>;

export const FiltersScreen: FC<FiltersScreenProps> = ({}) => {
  const [isGluttenFree, setIsGluttenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsvegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const navigation = useNavigation<FilterNavigatorProps>();

  const { setFilters } = useActions();

  const saveFilters = () => {
    setFilters({
      isGluttenFree,
      isLactoseFree,
      isVegan,
      isVegetarian,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          IconType={Ionicons}
          name="ios-save"
          onPress={saveFilters}
        />
      ),
    });
  }, [navigation, saveFilters]);

  return (
    <View>
      <Text style={styles.title}>Available Filters / Restriction</Text>
      <FilterSwitch
        label="Glutten-free"
        value={isGluttenFree}
        onChange={() => setIsGluttenFree(!isGluttenFree)}
      />
      <FilterSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onChange={() => setIsLactoseFree(!isLactoseFree)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChange={() => setIsvegan(!isVegan)}
      />
      <FilterSwitch
        label="Vegatarian"
        value={isVegetarian}
        onChange={() => setIsVegetarian(!isVegetarian)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    margin: 20,
    fontSize: 22,
    textAlign: "center",
  },
});
