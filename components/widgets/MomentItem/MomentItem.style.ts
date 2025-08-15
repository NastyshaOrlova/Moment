import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bullet: {
    color: Colors.primary,
    paddingRight: 5,
  },
  description: {
    flex: 1,
  },
});
