import { getCurrentDayName } from "@/utils";
import { router } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function App() {
  useEffect(() => {
    const currentDay = getCurrentDayName();
    const timer = setTimeout(() => {
      router.replace(`/day/${currentDay}`);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return <View />;
}
