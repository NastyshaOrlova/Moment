import { Button, Icon } from "@/components/ui";
import { DaysList } from "@/components/widgets";
import { RootState } from "@/store";
import { clearAll } from "@/store/slices/diarySlice";
import { downloadWeeklyReport } from "@/utils/";
import { confirmAction } from "@/utils/alerts";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../constants";

export default function AllDaysScreen() {
  const dispatch = useDispatch();

  const completedDays = useSelector(
    (state: RootState) => state.diary.completedDays
  );

  const daysData = useSelector((state: RootState) => state.diary.days);

  const handleClearAll = () => {
    confirmAction(
      "Очистить неделю?",
      "Все моменты и завершенные дни будут удалены безвозвратно.",
      "Очистить",
      () => dispatch(clearAll())
    );
  };

  const handleDownload = () => {
    downloadWeeklyReport(daysData);
  };

  return (
    <View style={styles.container}>
      <DaysList completedDays={completedDays} onDayComplete={() => {}} />
      <View style={styles.buttonContainer}>
        <Button title="Скачать" onPress={handleDownload} variant="primary" />
        <Button title="Очистить" onPress={handleClearAll} variant="primary" />
      </View>
      <Text style={styles.helpText}>
        В воскресенье утром, когда проснешься сначала: скачай файл, очисти
        неделю, добавь время подъема.
      </Text>
      <View style={styles.heart}>
        <Icon name={"heart"} />
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
  heart: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 35,
    height: 35,
  },
  helpText: {
    fontSize: 14,
    color: Colors.text,
    textAlign: "center",
    marginTop: 13,
    width: 370,
    opacity: 0.5,
  },
});
