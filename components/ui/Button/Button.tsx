import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./Button.styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant: "primary" | "secondary" | "ghost";
}

export const Button = ({
  title,
  onPress,
  variant = "primary",
}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.base, styles[variant]]} onPress={onPress}>
      <Text style={[styles.baseText, styles[`${variant}Text`]]}>{title}</Text>
    </TouchableOpacity>
  );
};
