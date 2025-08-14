import { DayHeader } from "@/components/widgets";
import { Colors, dayTitles } from "@/constants";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

const completedDays = ["monday", "tuesday"];

export default function DayScreen() {
  const { dayName } = useLocalSearchParams();

  console.log("dayName:", dayName);
  console.log("type:", typeof dayName);
  console.log("completedDays:", completedDays);
  console.log("includes:", completedDays.includes(dayName as string));

  const dayTitle = dayTitles[dayName as keyof typeof dayTitles] || dayName;

  return (
    <View style={styles.container}>
      <DayHeader
        title={dayTitle}
        isCompleted={completedDays.includes(dayName as string)}
      />
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
});
