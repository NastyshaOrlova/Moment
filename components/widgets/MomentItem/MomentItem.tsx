import { Icon } from "@/components/ui";
import { RootState } from "@/store";
import { deleteMoment } from "@/store/slices/diarySlice";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./MomentItem.style";

interface MomentItemProps {
  dayName: string;
  momentId: string;
  description: string;
}

export function MomentItem({
  dayName,
  momentId,
  description,
}: MomentItemProps) {
  const dispatch = useDispatch();

  const completedDays = useSelector(
    (state: RootState) => state.diary.completedDays
  );
  const isDayCompleted = completedDays.includes(dayName);

  const handleDeleteMoment = () => {
    dispatch(deleteMoment({ dayName, momentId }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bullet}>-</Text>
      <Text style={styles.description}>{description}</Text>
      <Icon
        name="delete"
        onPress={handleDeleteMoment}
        hidden={isDayCompleted}
      />
    </View>
  );
}
