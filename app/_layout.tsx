import { Loading } from "@/components/widgets";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="day/[dayName]" options={{ headerShown: false }} />
          <Stack.Screen name="all-days" options={{ headerShown: false }} />
        </Stack>
      </PersistGate>
    </Provider>
  );
}
