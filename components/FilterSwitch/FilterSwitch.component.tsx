import React, { FC } from "react";
import { StyleSheet, View, Text, Platform, Switch } from "react-native";
import { COLORS } from "../../helpers/colors";

interface FilterSwitchProps {
  label: string;
  value: boolean;
  onChange: () => void;
}

export const FilterSwitch: FC<FilterSwitchProps> = ({
  value,
  onChange,
  label,
}) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        value={value}
        onValueChange={onChange}
        thumbColor={Platform.OS === "android" ? COLORS.primary : COLORS.white}
        trackColor={{
          true: COLORS.primary,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
});
