import { Button } from "@/components/ui";
import { View } from "react-native";
import { styles } from "./DayFooter.style";

export function DayFooter() {
  return (
    <View style={[styles.container]}>
      <Button title="Завершить день" onPress={() => {}} variant="secondary" />
    </View>
  );
}
