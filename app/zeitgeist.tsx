import { ZeitContent } from "@/components/widgets";
import { ZeitHeader } from "@/components/widgets/ZeitHeader/ZeitHeader";
import { Colors } from "@/constants";
import { ScrollView, StyleSheet, View } from "react-native";

export default function DayScreen() {
  return (
    <View style={styles.container}>
      <ZeitHeader />
      <ScrollView keyboardShouldPersistTaps="handled" style={styles.scrollView}>
        <ZeitContent />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.background,
    paddingTop: 28,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
});
