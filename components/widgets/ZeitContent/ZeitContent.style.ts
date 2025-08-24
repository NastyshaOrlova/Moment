import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.card,
    maxWidth: 700,
    width: "100%",
    padding: 12,
    paddingBlockEnd: 20,
    alignSelf: "center",
    gap: 30,
  },
});
