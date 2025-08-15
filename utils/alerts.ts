import { Alert } from "react-native";

export const confirmAction = (
  title: string,
  message: string,
  onConfirm: () => void
) => {
  Alert.alert(title, message, [
    { text: "Отмена", style: "cancel" },
    { text: "Очистить", style: "destructive", onPress: onConfirm },
  ]);
};
