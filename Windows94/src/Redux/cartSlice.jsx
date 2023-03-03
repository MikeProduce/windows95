import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [], // initializing the cart array with an empty array
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { itemName } = action.payload; // destructure itemName from the action payload
      state.cart = [...state.cart, { itemName }]; // add a new item to the cart array with the itemName
    },
    removeToCart: (state, action) => {
      if (state.cart.length === 0) { // checking if the cart is empty
        throw new Error('Cannot remove item from empty cart'); // throw an error if the cart is empty
      }
      const { itemName } = action.payload; // destructure itemName from the action payload
      const index = state.cart.findIndex(item => item.itemName === itemName); // find the index of the item to remove from the cart array
      if (index !== -1) { // checking if the item exists in the cart array
        const removed = state.cart.splice(index, 1); // remove the item from the cart array
        state.total = state.total - removed[0].itemPrice; // update the total price by subtracting the removed item's price
      }
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions; // exporting the action creators
export default cartSlice.reducer; // exporting the reducer function


