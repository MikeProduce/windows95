import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  window: [{itemName: 'Welcome to my page',isHidden: true}], // initializing the window array with an empty array
};

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    addWindow: (state, action) => {
      const { itemName } = action.payload; // brings in the modal name
      const item = state.window.find((item) => item.itemName === itemName);// checks if the itemName is alreaedy in the array
      if (item) {
        item.isHidden = !item.isHidden; // if the item name is already in the array but the current boolean value attached to the isHidden property then make it false
      } else {
        state.window = [...state.window, { itemName, isHidden: true }];// else push this current itemName into the array and attach isHidden with a booleon. 
      }
       // add a new item to the window array with the itemName and isHidden property set to true which will show the modal
    },
    removeWindow: (state, action) => {
      if (state.window.length === 0) { // checking if the window is empty
        throw new Error('Cannot remove item from empty window'); // throw an error if the window is empty
      }
      const  itemName  = action.payload; // destructure itemName from the action payload
      console.log(itemName);
      const index = state.window.findIndex(item => item.itemName === itemName); // find the index of the item to remove from the window array
      if (index !== -1) { // checking if the item exists in the window array
        state.window.splice(index, 1); // remove the item from the window array
      }
    },
    toggleHidden: (state, action) => {
      const  itemName = action.payload; 
      console.log(itemName);
      const item = state.window.find((item) => item.itemName === itemName);
      if (item) {
        item.isHidden = !item.isHidden;
      }
    }
  },
});

export const { addWindow, removeWindow,toggleHidden} = windowSlice.actions; // exporting the action creators
export default windowSlice.reducer; // exporting the reducer function


