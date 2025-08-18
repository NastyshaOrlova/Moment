import { Button, Icon } from "@/components/ui";
import { RootState } from "@/store";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { completeDay, uncompleteDay } from "../../../store/slices/diarySlice";
import { styles } from "./DayFooter.style";

export function DayFooter({ dayName }: { dayName: string }) {
  const dispatch = useDispatch();
  const completedDays = useSelector(
    (state: RootState) => state.diary.completedDays
  );

  const isCompleted = completedDays.includes(dayName);

  const handleComplete = () => {
    dispatch(completeDay(dayName));
  };

  const handleUncomplete = () => {
    dispatch(uncompleteDay(dayName));
  };

  return (
    <View style={[styles.container]}>
      {isCompleted ? (
        <View style={styles.completedContainer}>
          <Text style={styles.completedText}>День завершен!</Text>
          <Button
            title="Возобновить"
            onPress={handleUncomplete}
            variant="ghost"
          />
        </View>
      ) : (
        <View style={styles.completedContainer}>
          <Button
            title="Завершить день"
            onPress={handleComplete}
            variant="secondary"
          />
          <Icon name={"heart"} />
        </View>
      )}
    </View>
  );
}
