import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

const store = configureStore({ reducer: { todo: todoSlice.reducer } });

export const todoActions = todoSlice.actions;

export default store;
