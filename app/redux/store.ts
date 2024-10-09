import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../redux/slices/uiSlice";
const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
