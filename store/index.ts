import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import diaryReducer from "./slices/diarySlice";

const persistConfig = {
  key: "diary",
  storage: AsyncStorage,
};

const persistedDiaryReducer = persistReducer(persistConfig, diaryReducer);

export const store = configureStore({
  reducer: {
    diary: persistedDiaryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
