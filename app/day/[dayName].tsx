import { DayHeader } from "@/components/widgets";
import { DayContent } from "@/components/widgets/DayContent";
import { DayFooter } from "@/components/widgets/DayFooter";
import { Colors, dayTitles } from "@/constants";
import { RootState } from "@/store";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

export default function DayScreen() {
  const { dayName } = useLocalSearchParams();

  const dayTitle = dayTitles[dayName as keyof typeof dayTitles] || dayName;

  const completedDays = useSelector(
    (state: RootState) => state.diary.completedDays
  );

  return (
    <View style={styles.container}>
      <DayHeader
        title={dayTitle}
        isCompleted={completedDays.includes(dayName as string)}
      />
      <ScrollView keyboardShouldPersistTaps="handled" style={styles.scrollView}>
        <DayContent dayName={dayName as string} />
      </ScrollView>
      <DayFooter dayName={dayName as string} />
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
  scrollView: {
    flex: 1,
    width: "100%",
  },
});
