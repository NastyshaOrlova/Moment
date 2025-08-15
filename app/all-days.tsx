import { Button } from "@/components/ui";
import { DaysList } from "@/components/widgets";
import { RootState } from "@/store";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../constants";

export default function AllDaysScreen() {
  const completedDays = useSelector(
    (state: RootState) => state.diary.completedDays
  );

  return (
    <View style={styles.container}>
      <DaysList completedDays={completedDays} onDayComplete={() => {}} />
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
    paddingTop: 28,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    marginTop: 20,
  },
});
