import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.todo,
    padding: 12,
    borderBottomWidth: 1,
    borderColor: Colors.background,
    maxWidth: 700,
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  baseText: {
    fontSize: 18,
    color: Colors.text,
    fontWeight: "500",
  },
  backText: {
    fontSize: 14,
    color: Colors.primary,
    textDecorationLine: "underline",
  },
});
