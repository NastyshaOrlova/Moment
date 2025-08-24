import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./ZeitHeader.style";

export function ZeitHeader() {
  return (
    <TouchableOpacity style={[styles.container]} onPress={() => router.back()}>
      <View style={styles.titleContainer}>
        <Text style={styles.baseText}>Zeitgeist</Text>
      </View>
      <Text style={styles.backText}>Назад</Text>
    </TouchableOpacity>
  );
}
