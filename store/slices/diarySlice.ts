import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface DiaryState {
  completedDays: string[];
  days: {
    [dayName: string]: {
      moments: {
        id: string;
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
    addMoment: (
      state,
      action: PayloadAction<{ dayName: string; description: string }>
    ) => {
      const { dayName, description } = action.payload;
      const newMoment = { id: nanoid(), description };
      if (state.days[dayName]) {
        state.days[dayName].moments.push(newMoment);
      } else {
        state.days[dayName] = { moments: [newMoment] };
      }
    },
    deleteMoment: (
      state,
      action: PayloadAction<{ dayName: string; momentId: string }>
    ) => {
      const { dayName, momentId } = action.payload;
      if (state.days[dayName]) {
        state.days[dayName].moments = state.days[dayName].moments.filter(
          (moment) => moment.id !== momentId
        );
      }
    },
  },
});

export const { completeDay, addMoment, deleteMoment } = diarySlice.actions;
export default diarySlice.reducer;
