import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [], // initializing the cart array with an empty array
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { itemName } = action.payload; // brings in the modal name
      const item = state.cart.find((item) => item.itemName === itemName);// checks if the itemName is alreaedy in the array
      if (item) {
        item.isHidden = !item.isHidden; // if the item name is already in the array but the current boolean value attached to the isHidden property then make it false
      } else {
        state.cart = [...state.cart, { itemName, isHidden: false }];// else push this current itemName into the array and attach isHidden with a booleon. 
      }
       // add a new item to the cart array with the itemName and isHidden property set to false
    },
    removeToCart: (state, action) => {
      if (state.cart.length === 0) { // checking if the cart is empty
        throw new Error('Cannot remove item from empty cart'); // throw an error if the cart is empty
      }
      const  itemName  = action.payload; // destructure itemName from the action payload
      console.log(itemName);
      const index = state.cart.findIndex(item => item.itemName === itemName); // find the index of the item to remove from the cart array
      if (index !== -1) { // checking if the item exists in the cart array
        state.cart.splice(index, 1); // remove the item from the cart array
      }
    },
    toggleHidden: (state, action) => {
      const  itemName = action.payload; 
      console.log(itemName);
      const item = state.cart.find((item) => item.itemName === itemName);
      if (item) {
        item.isHidden = !item.isHidden;
      }
    }
  },
});

export const { addToCart, removeToCart,toggleHidden} = cartSlice.actions; // exporting the action creators
export default cartSlice.reducer; // exporting the reducer function


