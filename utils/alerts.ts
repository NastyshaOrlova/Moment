import { Alert } from "react-native";

export const confirmAction = (
  title: string,
  message: string,
  buttonText: string,
  onConfirm: () => void
) => {
  Alert.alert(title, message, [
    { text: "Отмена", style: "cancel" },
    { text: buttonText, style: "destructive", onPress: onConfirm },
  ]);
};
