import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Базовые стили для всех кнопок
  base: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  baseText: {
    fontWeight: "600",
    textAlign: "center",
  },

  // Варианты кнопок
  primary: {
    height: 48,
    width: 140,
    backgroundColor: Colors.primary,
  },
  primaryText: {
    fontSize: 18,
    color: Colors.text,
  },

  secondary: {
    height: 36,
    width: 170,
    backgroundColor: Colors.primary,
  },
  secondaryText: {
    fontSize: 16,
    color: Colors.text,
  },
});
