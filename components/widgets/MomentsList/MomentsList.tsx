import { Text, View } from "react-native";
import { MomentItem } from "../MomentItem";
import { styles } from "./MomentsList.style";

export function MomentsList() {
  return (
    <View style={[styles.container]}>
      <Text>todo: Массив моментов</Text>
      <MomentItem />
    </View>
  );
}
