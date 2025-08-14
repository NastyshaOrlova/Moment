import { DayHeader } from "@/components/widgets";
import { DayContent } from "@/components/widgets/DayContent";
import { Colors, dayTitles } from "@/constants";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

const completedDays = ["monday", "tuesday"];

export default function DayScreen() {
  const { dayName } = useLocalSearchParams();

  const dayTitle = dayTitles[dayName as keyof typeof dayTitles] || dayName;

  return (
    <View style={styles.container}>
      <DayHeader
        title={dayTitle}
        isCompleted={completedDays.includes(dayName as string)}
      />
      <DayContent />
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
