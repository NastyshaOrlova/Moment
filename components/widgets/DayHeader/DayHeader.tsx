import { Icon } from "@/components/ui";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./DayHeader.style";

interface DayHeaderProps {
  title: string;
  isCompleted: boolean;
}

export function DayHeader({ title, isCompleted }: DayHeaderProps) {
  return (
    <TouchableOpacity style={[styles.container]} onPress={() => router.back()}>
      <View style={styles.titleContainer}>
        <Text style={styles.baseText}>{title}</Text>
        {isCompleted && <Icon name="doubleDone" />}
      </View>
      <Icon name="arrowBottom" />
    </TouchableOpacity>
  );
}
