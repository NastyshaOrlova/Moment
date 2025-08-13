import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function DayScreen() {
  const { dayName } = useLocalSearchParams();

  return (
    <View>
      <ScrollView>
        <Text>День: {dayName}</Text>
      </ScrollView>
    </View>
  );
}
