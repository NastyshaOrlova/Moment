import { Button, TextArea } from "@/components/ui";
import { useState } from "react";
import { View } from "react-native";

export function AddMomentSection() {
  const [inputText, setInputText] = useState("");

  return (
    <View>
      <TextArea value={inputText} onChangeText={setInputText} />
      <Button title="Добавить момент" variant="secondary" onPress={() => {}} />
    </View>
  );
}
