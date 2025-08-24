import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ZeitgeistState {
  content: string;
}

const initialState: ZeitgeistState = {
  content: "",
};

const zeitgeistSlice = createSlice({
  name: "zeitgeist",
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
  },
});

export const { setContent } = zeitgeistSlice.actions;

export default zeitgeistSlice.reducer;
