import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DiaryState {
  completedDays: string[];
  days: {
    [dayName: string]: {
      moments: {
        id: number;
        description: string;
      }[];
    };
  };
}

const initialState: DiaryState = {
  completedDays: [],
  days: {},
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    completeDay: (state, action: PayloadAction<string>) => {
      const dayName = action.payload;
      if (!state.completedDays.includes(dayName)) {
        state.completedDays.push(dayName);
      }
    },
  },
});

export const { completeDay } = diarySlice.actions;
export default diarySlice.reducer;
