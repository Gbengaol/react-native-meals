import React, { FC } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { IMeal } from "../../interfaces/meal";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TMealsNavigator } from "../../navigation/MealsNavigator";
import { DefaultText } from "../DefaultText/DefaultText.component";

interface MealItemProps {
  item: IMeal;
}

type MealsNavigatorProps = NativeStackNavigationProp<
  TMealsNavigator,
  "MealDetail"
>;

export const MealItem: FC<MealItemProps> = ({ item }) => {
  const navigation = useNavigation<MealsNavigatorProps>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("MealDetail", {
          mealId: item.id,
        });
      }}
      style={styles.mealItem}
    >
      <View>
        <View style={[styles.mealRow, styles.mealHeader]}>
          <ImageBackground
            source={{ uri: item.imageUrl }}
            style={styles.bgImage}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {item.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={[styles.mealRow, styles.mealDetail]}>
          <DefaultText>{item.duration}m</DefaultText>
          <DefaultText>{item.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{item.affordability.toUpperCase()}</DefaultText>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "#fff",

    textAlign: "center",
  },
  bgImage: { width: "100%", height: "100%", justifyContent: "flex-end" },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    color: "#f5f5f5",
    height: "15%",
  },
});
