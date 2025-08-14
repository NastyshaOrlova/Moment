import { Text, View } from "react-native";

interface MomentItemProps {
  description: string;
}

export function MomentItem({ description }: MomentItemProps) {
  return (
    <View>
      <Text>{description}</Text>
    </View>
  );
}
