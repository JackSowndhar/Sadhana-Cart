import { createSlice } from "@reduxjs/toolkit";


const productsDataLocal = localStorage.getItem("productsSliceData");

const initialState = productsDataLocal
  ? JSON.parse(productsDataLocal)
  : {
      saveBillingInfoToLocal: false,
      favoritesProducts: [],
      searchProducts: [],
      orderProducts: [],
      cartProducts: [],
      wishList: [],
      productQuantity: 1,     
      selectedProduct: null,
      removeOrderProduct: "",
    };

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    updateProductsState: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
    addToArray: (state, { payload: { key, value } }) => {
      state[key].push(value);
    },
    removeById: (state, { payload: { key, id } }) => {
      state[key] = state[key].filter((item) => item.id !== id);
    },
    removeByKeyName: (state, { payload: { dataKey, itemKey, keyValue } }) => {
      state[dataKey] = state[dataKey].filter((item) => item[itemKey] !== keyValue);
    },
    setEmptyArrays: (state, { payload: { keys } }) => {
      keys.forEach((key) => {
        state[key] = [];
      });
    },
    transferProducts: (state, { payload: { from, to } }) => {
      state[to] = [...state[to], ...state[from]];
      state[from] = [];
    },
  },
});

// Export actions and reducer
export const {
  updateProductsState,
  addToArray,
  removeById,
  removeByKeyName,
  setEmptyArrays,
  transferProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
