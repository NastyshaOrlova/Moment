import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [message, setMessage] = useState("");

  const handlePress = () => {
    console.log("Button pressed!");
    setMessage("Кнопка была нажата!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Привет</Text>
      <Button title="Нажми на меня" onPress={handlePress} />
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
    color: "#2c3e50",
  },
});
