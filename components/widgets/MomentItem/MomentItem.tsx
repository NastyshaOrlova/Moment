import { Text, View } from "react-native";
import { styles } from "./MomentItem.style";

interface MomentItemProps {
  description: string;
}

export function MomentItem({ description }: MomentItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.bullet}>-</Text>
      <Text>{description}</Text>
    </View>
  );
}
