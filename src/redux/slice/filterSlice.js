import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: 0,
  currentPage: 1,
  sort: { name: "популярности", sortProperty: "rating" },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setcCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const selectSort = (state) => state.filterSlice.sort;

export const { setCategories, setSort, setcCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
