import { DayHeader } from "@/components/widgets";
import { DayContent } from "@/components/widgets/DayContent";
import { DayFooter } from "@/components/widgets/DayFooter";
import { Colors, dayTitles } from "@/constants";
import { useLocalSearchParams } from "expo-router";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const completedDays = ["monday", "tuesday"];

export default function DayScreen() {
  const { dayName } = useLocalSearchParams();

  const dayTitle = dayTitles[dayName as keyof typeof dayTitles] || dayName;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <DayHeader
          title={dayTitle}
          isCompleted={completedDays.includes(dayName as string)}
        />
        <DayContent />
        <DayFooter />
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
