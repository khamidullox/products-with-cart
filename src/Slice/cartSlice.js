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
      let findCart = state.cart.find((item) => {
        return item.id == payload.id;
      });

      if (findCart) {
        findCart.amout += payload.amout;
        state.amout = findCart.amout;
      } else {
        state.cart.push(payload);
      }
      cartSlice.caseReducers.calculatTotal(state);
    },
    deleteCart: (state, { payload }) => {
      let filterDelete = state.cart.filter((cart) => {
        return cart.id != payload;
      });
      state.amout = 0;
      state.price = 0;
      filterDelete.forEach((element) => {
        state.amout += element.amout;
        state.price += element.price * element.amout;
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
      state.price = 0;
      cartSlice.caseReducers.setLocal(state);
    },
    calculatTotal: (state) => {
      let price = 0;
      let amout = 0;
      state.cart.forEach((item) => {
        price += item.price * item.amout;
        amout += item.amout;
      });
      state.amout = amout;
      state.price = price;
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
