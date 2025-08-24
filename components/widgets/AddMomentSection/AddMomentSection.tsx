import { Button, TextArea } from "@/components/ui";
import { RootState } from "@/store";
import { addMoment } from "@/store/slices/diarySlice";
import { useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

interface AddMomentSectionProps {
  dayName: string;
}

export function AddMomentSection({ dayName }: AddMomentSectionProps) {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const completedDays = useSelector(
    (state: RootState) => state.diary.completedDays
  );
  const isDayCompleted = completedDays.includes(dayName);
  if (isDayCompleted) {
    return null;
  }

  const handleAddMoment = () => {
    if (inputText.trim()) {
      dispatch(addMoment({ dayName, description: inputText }));
      setInputText("");
    }
  };

  return (
    <View>
      <TextArea
        value={inputText}
        placeholder="Что делала?"
        onChangeText={setInputText}
      />
      <Button
        title="Добавить момент"
        variant="secondary"
        onPress={handleAddMoment}
      />
    </View>
  );
}
