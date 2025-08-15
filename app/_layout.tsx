import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="day/[dayName]" options={{ headerShown: false }} />
        <Stack.Screen name="all-days" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
