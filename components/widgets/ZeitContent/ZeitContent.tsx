import { Button, TextArea } from "@/components/ui";
import { RootState } from "@/store";
import { setContent } from "@/store/slices/zeitgeistSlice";
import { useState } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./ZeitContent.style";

export function ZeitContent() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleSend = () => {
    dispatch(setContent(inputText));
    setInputText("");
  };

  const content = useSelector((state: RootState) => state.zeitgeist.content);

  return (
    <View style={[styles.container]}>
      <Text>{content}</Text>
      <View>
        <TextArea
          value={inputText}
          placeholder="Какой план на неделю?"
          onChangeText={setInputText}
        />
        <Button title="Отправить" onPress={handleSend} variant="secondary" />
      </View>
    </View>
  );
}
