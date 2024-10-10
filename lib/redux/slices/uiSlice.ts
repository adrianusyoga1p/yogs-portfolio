import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  toggle: boolean;
}

const initialState: UIState = {
  toggle: true,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setToggle: (state, action: PayloadAction<boolean>) => {
      state.toggle = !action.payload;
    },
  },
});

export const { setToggle } = uiSlice.actions;
export default uiSlice.reducer;