import { createSlice } from "@reduxjs/toolkit";


const initialState = {
cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : []
};

const CartPricingSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex !== -1) {
        state.cartItems[existingIndex].qty = state.cartItems[existingIndex].qty +1;
        
      } else {
        
        state.cartItems.push(action.payload);
        
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].qty > 1) {
        state.cartItems[itemIndex].qty -= 1;

       
      } else {
        state.cartItem[itemIndex].qty = 1
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

         
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart } =
CartPricingSlice.actions;

export default CartPricingSlice.reducer;