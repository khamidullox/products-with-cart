import { createSlice } from "@reduxjs/toolkit";

let dataFromLoclaStore = () => {
  return (
    JSON.parse(localStorage.getItem("cart")) || {
      cart: [],
      cartReporire: null,
    }
  );
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: dataFromLoclaStore,
  reducers: {
    setLocal: (state) => {
      localStorage.setItem("cart", JSON.stringify(state));
    },
    addCart: (state, { payload }) => {
      state.cart.push({ ...payload, amout: 1 });
      cartSlice.caseReducers.setLocal(state);
    },
    filterReporire: (state, { payload }) => {
      let result = state.cart
        .map(JSON.stringify)
        .filter((e, i, a) => i === a.indexOf(e))
        .map(JSON.parse);
      state.cartReporire = result;
      cartSlice.caseReducers.setLocal(state);
    },
  },
});

// Action creators are generated for each case reducer function

export const { addCart, filterReporire } = cartSlice.actions;

export default cartSlice.reducer;
