import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterAction = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    onIncrease(state) {
      state.count += 1; 
    },
    onDecrease(state) {
      state.count -= 1; 
    },
  },
});

const store = configureStore({
  reducer: { counter: counterAction.reducer },
});

export const { onIncrease, onDecrease } = counterAction.actions; 

export default store;
