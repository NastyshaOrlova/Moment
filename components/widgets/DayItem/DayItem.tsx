import { Icon } from "@/components/ui";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./DayItem.style";

interface DayItemProps {
  dayName: string;
  title: string;
  isCompleted: boolean;
  onComplete: (dayName: string) => void;
}

export function DayItem({
  dayName,
  title,
  isCompleted,
  onComplete,
}: DayItemProps) {
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() =>
        router.push({
          pathname: "/day/[dayName]",
          params: { dayName },
        })
      }
    >
      <View style={styles.titleContainer}>
        <Text style={styles.baseText}>{title}</Text>
        {isCompleted && <Icon name="doubleDone" />}
      </View>
      <Icon name="arrow" />
    </TouchableOpacity>
  );
}
