import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  items: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addItems(state, action) {
      state.items.push(action.payload);
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.total = state.items.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
    removeItems(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.total = [];
    },
  },
});

export const selectCard = (state) => state.card;
export const selectCardById = (id) => (state) =>
  state.card.items.find((obj) => obj.id === id);
export const { addItems, removeItems, clearItems, minusItem } =
  cardSlice.actions;

export default cardSlice.reducer;
