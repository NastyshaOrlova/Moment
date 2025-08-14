import { Button, TextArea } from "@/components/ui";
import { addMoment } from "@/store/slices/diarySlice";
import { useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";

interface AddMomentSectionProps {
  dayName: string;
}

export function AddMomentSection({ dayName }: AddMomentSectionProps) {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleAddMoment = () => {
    if (inputText.trim()) {
      dispatch(addMoment({ dayName, description: inputText }));
      setInputText("");
    }
  };

  return (
    <View>
      <TextArea value={inputText} onChangeText={setInputText} />
      <Button
        title="Добавить момент"
        variant="secondary"
        onPress={handleAddMoment}
      />
    </View>
  );
}
