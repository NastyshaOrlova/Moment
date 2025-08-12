import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Colors, Layout } from "../constants";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text>Привет Мир!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Layout.spacing.md,
    paddingBlockStart: Layout.spacing.xxl,
  },
});
