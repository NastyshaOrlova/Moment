import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.card,
    padding: 12,
    borderBottomWidth: 1,
    borderColor: Colors.background,
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
    fontSize: 17,
    color: Colors.text,
  },
});
