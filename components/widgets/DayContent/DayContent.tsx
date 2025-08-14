import { View } from "react-native";
import { AddMomentSection } from "../AddMomentSection/AddMomentSection";
import { MomentsList } from "../MomentsList";
import { styles } from "./DayContent.style";

export function DayContent() {
  return (
    <View style={[styles.container]}>
      <AddMomentSection />
      <MomentsList />
    </View>
  );
}
