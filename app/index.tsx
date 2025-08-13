import { Button } from "@/components/ui";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../constants";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Скачать" onPress={() => {}} variant="primary" />
        <Button title="Очистить" onPress={() => {}} variant="primary" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.background,
    padding: 15,
    paddingTop: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
  },
});
