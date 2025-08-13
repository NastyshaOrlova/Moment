import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./Button.styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant: "primary" | "secondary";
}

export const Button = ({
  title,
  onPress,
  variant = "primary",
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.base, styles[variant]]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.baseText, styles[`${variant}Text`]]}>{title}</Text>
    </TouchableOpacity>
  );
};
