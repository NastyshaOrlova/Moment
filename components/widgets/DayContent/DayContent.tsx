import { View } from "react-native";
import { AddMomentSection } from "../AddMomentSection/AddMomentSection";
import { MomentsList } from "../MomentsList";
import { styles } from "./DayContent.style";

export interface DayContentProps {
  dayName: string;
}

export function DayContent({ dayName }: DayContentProps) {
  return (
    <View style={[styles.container]}>
      <AddMomentSection dayName={dayName} />
      <MomentsList dayName={dayName} />
    </View>
  );
}
