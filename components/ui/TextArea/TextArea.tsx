import React from "react";
import { TextInput } from "react-native";
import { styles } from "./TextArea.style";

interface TextAreaProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

export function TextArea({ value, placeholder, onChangeText }: TextAreaProps) {
  return (
    <TextInput
      style={styles.textArea}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      multiline={true}
      textAlignVertical="top"
    />
  );
}
