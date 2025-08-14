import { DayHeader } from "@/components/widgets";
import { DayContent } from "@/components/widgets/DayContent";
import { DayFooter } from "@/components/widgets/DayFooter";
import { Colors, dayTitles } from "@/constants";
import { RootState } from "@/store";
import { useLocalSearchParams } from "expo-router";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSelector } from "react-redux";

export default function DayScreen() {
  const { dayName } = useLocalSearchParams();

  const dayTitle = dayTitles[dayName as keyof typeof dayTitles] || dayName;

  const completedDays = useSelector(
    (state: RootState) => state.diary.completedDays
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <DayHeader
          title={dayTitle}
          isCompleted={completedDays.includes(dayName as string)}
        />
        <DayContent />
        <DayFooter dayName={dayName as string} />
      </View>
    </TouchableWithoutFeedback>
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
