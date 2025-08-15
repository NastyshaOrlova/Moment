import { RootState } from "@/store";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { MomentItem } from "../MomentItem";
import { styles } from "./MomentsList.style";

interface MomentsListProps {
  dayName: string;
}

export function MomentsList({ dayName }: MomentsListProps) {
  const moments = useSelector(
    (state: RootState) => state.diary.days[dayName]?.moments || []
  );

  return (
    <View style={[styles.container]}>
      {moments.length === 0 ? (
        <Text>Пока нет моментов</Text>
      ) : (
        moments
          .slice()
          .reverse()
          .map((moment) => (
            <MomentItem key={moment.id} description={moment.description} />
          ))
      )}
    </View>
  );
}
