import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  base: {
    width: 23,
    height: 23,
    tintColor: Colors.primary,
    resizeMode: "contain",
  },
});

export const iconStyles = {
  doubleDone: {
    tintColor: Colors.success,
  },
  done: {
    tintColor: Colors.success,
  },
  arrowBottom: {
    width: 20,
    height: 20,
  },
  delete: {
    width: 20,
    height: 20,
    tintColor: Colors.grey,
    marginLeft: 5,
  },
  heart: {
    width: 32,
    height: 32,
    opacity: 0.9,
  },
};
