import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import { COLORS } from "../../helpers/colors";

interface HeaderButtonProps {
  IconType: any;
  name: string;
  onPress: () => void;
}

export const HeaderButton: FC<HeaderButtonProps> = ({
  IconType,
  name,
  onPress,
}) => {
  return (
    <View>
      <IconType name={name} size={24} color={COLORS.white} onPress={onPress} />
    </View>
  );
};
const styles = StyleSheet.create({});
