import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./Button.styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant: "primary" | "secondary";
  disabled?: boolean;
}

export const Button = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.base, styles[variant], disabled && styles.disabled]}
      onPress={disabled ? undefined : onPress}
      activeOpacity={disabled ? 1 : 0.7}
      disabled={disabled}
    >
      <Text style={[styles.baseText, styles[`${variant}Text`]]}>{title}</Text>
    </TouchableOpacity>
  );
};
