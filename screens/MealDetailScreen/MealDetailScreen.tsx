import React, { FC, useLayoutEffect } from "react";
import { StyleSheet, View, Image, ScrollView, Text } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { TMealsNavigator } from "../../navigation/MealsNavigator";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HeaderButton } from "../../components/HeaderButton/HeaderButton.component";
import { Ionicons } from "@expo/vector-icons";
import { DefaultText } from "../../components/DefaultText/DefaultText.component";
import { ListItem } from "../../components/ListItem/ListItem.component";
import { IMeal } from "../../interfaces/meal";
import { useTypedSelector } from "../../redux-hooks/useTypedSelector";
import { useActions } from "../../redux-hooks/useActions";

interface MealDetailScreenProps {}
type MealsNavigatorProps = NativeStackNavigationProp<
  TMealsNavigator,
  "MealDetail"
>;

type MealsRouteProps = RouteProp<TMealsNavigator, "MealDetail">;

export const MealDetailScreen: FC<MealDetailScreenProps> = ({}) => {
  const { params } = useRoute<MealsRouteProps>();
  const navigation = useNavigation<MealsNavigatorProps>();

  const { meals, favoriteMeals } = useTypedSelector((state) => state.meals);
  const { toggleFavorites } = useActions();

  const selectedMeal = meals.find((meal: IMeal) => meal.id === params.mealId);
  const currentMealIsFavorite = favoriteMeals.some(
    (meal: IMeal) => meal.id === params.mealId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal?.title,
      headerRight: () => (
        <HeaderButton
          IconType={Ionicons}
          name={currentMealIsFavorite ? "ios-star" : "ios-star-outline"}
          onPress={() => {
            if (selectedMeal) toggleFavorites(selectedMeal?.id);
          }}
        />
      ),
    });
  }, [navigation, params, currentMealIsFavorite]);
  return (
    <View style={styles.screen}>
      <ScrollView>
        <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
        <View style={[styles.details]}>
          <DefaultText>{selectedMeal?.duration}m</DefaultText>
          <DefaultText>{selectedMeal?.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{selectedMeal?.affordability.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal?.ingredients?.map((ingredient: any) => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal?.steps?.map((step: any) => (
          <ListItem key={step}>{step}</ListItem>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: { flex: 1 },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  details: {
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
