import { Button } from "@/components/ui";
import { RootState } from "@/store";
import { router } from "expo-router";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { completeDay } from "../../../store/slices/diarySlice";
import { styles } from "./DayFooter.style";

export function DayFooter({ dayName }: { dayName: string }) {
  const dispatch = useDispatch();
  const completedDays = useSelector(
    (state: RootState) => state.diary.completedDays
  );

  const isCompleted = completedDays.includes(dayName);

  const handleComplete = () => {
    dispatch(completeDay(dayName));
    router.back();
  };

  return (
    <View style={[styles.container]}>
      <Button
        title="Завершить день"
        onPress={handleComplete}
        variant="secondary"
        disabled={isCompleted}
      />
    </View>
  );
}
