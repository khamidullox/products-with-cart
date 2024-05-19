import { createSlice } from "@reduxjs/toolkit";

let dataFromLoclaStore = () => {
  return (
    JSON.parse(localStorage.getItem("cart")) || {
      cart: [],
      amout: 0,
      price: 0,
      chek: true,
    }
  );
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: dataFromLoclaStore(),
  reducers: {
    addCart: (state, { payload }) => {
      state.amout += payload.amout;
      state.cart.push(payload);
      cartSlice.caseReducers.setLocal(state);
    },
    deleteCart: (state, { payload }) => {
      let filterDelete = state.cart.filter((cart) => {
        return cart.id != payload;
      });
      state.amout = 0;
      filterDelete.forEach((element) => {
        state.amout += element.amout;
      });
      state.cart = filterDelete;
      cartSlice.caseReducers.setLocal(state);
    },
    chekAll: (state, { payload }) => {
      state.chek = !state.chek;
      cartSlice.caseReducers.setLocal(state);
    },
    deleteAll: (state, { payload }) => {
      state.amout = 0;
      state.cart = [];
      cartSlice.caseReducers.setLocal(state);
    },
    setLocal: (state) => {
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

// Action creators are generated for each case reducer function

export const { addCart, deleteCart, chekAll, deleteAll } = cartSlice.actions;

export default cartSlice.reducer;
