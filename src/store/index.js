import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  menuItem: [],
  isLoading: false,
  error: null,
  filteredData: [],
  resetData: [],
  clickedMenuItem: false,
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.resetData = state.data;
      state.menuItem = state.data;
      state.filteredData = state.data;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSearchText: (state, action) => {
      const searchTitle = action.payload.toLowerCase();
      state.filteredData = state.data.filter((item) =>
        item.title.toLowerCase().includes(searchTitle)
      );
    },
    setItemCategory: (state, action) => {
      const category = action.payload.toLowerCase();
      if (action.payload === "") {
        state.filteredData = state.resetData;
        state.data = state.filteredData;
        state.clickedMenuItem = !state.clickedMenuItem;
      } else {
        state.filteredData = state.menuItem.filter(
          (item) => item.category.toLowerCase() === category
        );
        state.clickedMenuItem = !state.clickedMenuItem;
        state.data = state.filteredData;
      }
    },
  },
});

const store = configureStore({ reducer: { todo: todoSlice.reducer } });

export const todoActions = todoSlice.actions;

export default store;
