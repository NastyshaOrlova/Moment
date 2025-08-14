import React from "react";
import { TextInput } from "react-native";
import { styles } from "./TextArea.style";

interface TextAreaProps {
  value: string;
  onChangeText: (text: string) => void;
}

export function TextArea({ value, onChangeText }: TextAreaProps) {
  return (
    <TextInput
      style={styles.textArea}
      value={value}
      onChangeText={onChangeText}
      placeholder="Что делала?"
      multiline={true}
      textAlignVertical="top"
    />
  );
}
