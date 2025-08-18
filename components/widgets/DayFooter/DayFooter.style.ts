import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.todo,
    maxWidth: 700,
    width: "100%",
    height: 80,
    alignSelf: "center",
    justifyContent: "center",
    padding: 12,
  },
  completedContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  completedText: {
    color: "#827676ff",
  },
});
