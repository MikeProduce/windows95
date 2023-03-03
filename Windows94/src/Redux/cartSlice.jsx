
import {createSlice} from '@reduxjs/toolkit'




const initialState = {
  cart: [],
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      const { itemName, itemPrice, itemImage } = action.payload;
      state.cart = [...state.cart, { itemName, itemPrice, itemImage }]
      state.total = state.total + itemPrice
    },
    removeToCart: (state,action) => {
      if (state.cart.length === 0){
        throw new Error('Cannot remove item from empty cart')
      }
      // if the array length of cart is 0 then throw an error
      const { itemName } = action.payload;
      // deconstructing the itemname from the action.payload
      //the payload is whatever item was just clicked in the pay.jsx UI
      const index = state.cart.findIndex(item => item.itemName === itemName);
      // here we are finding the index of the item that is passed from the pay.jsx page 
      // the index variable returns an index number, and will always return the index number of the name that was sent from the UI, if the name does not exist it returns -1 
      if (index !== -1) {
        const removed = state.cart.splice(index, 1);
        state.total = state.total - removed[0].itemPrice;
        // here if index is anything but -1 then it will remove that index number by 1,

    }}
  },
})
export const {addToCart} = cartSlice.actions
export const {removeToCart} = cartSlice.actions

export default cartSlice.reducer;

