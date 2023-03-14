import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  window: [{itemName: 'Welcome to my page', isHidden: true}], // This item in the array starts here because we want this window to be open on load.
};

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    addWindow: (state, action) => {
      const { itemName } = action.payload; // Retrieve the window name from the action payload
      const item = state.window.find((item) => item.itemName === itemName); // Check if the window already exists in the array
      if (item) {
        item.isHidden = !item.isHidden; // If the window already exists in the array, toggle the value of isHidden to show or hide the window
      } else {
        state.window = [...state.window, { itemName, isHidden: true }]; // If the window does not exist in the array, add it with isHidden set to true to show the window
      }
    },
    removeWindow: (state, action) => {
      if (state.window.length === 0) { // Throw an error if the window is empty
        throw new Error('Cannot remove item from empty window');
      }
      const itemName = action.payload; // Retrieve the window name from the action payload
      console.log(itemName);
      const index = state.window.findIndex(item => item.itemName === itemName); // Find the index of the window to remove from the array
      if (index !== -1) { // If the window exists in the array, remove it
        state.window.splice(index, 1);
      }
    },
    toggleHidden: (state, action) => {
      const itemName = action.payload; 
      console.log(itemName);
      const item = state.window.find((item) => item.itemName === itemName); // Find the window object with the matching name
      if (item) {
        item.isHidden = !item.isHidden; // Toggle the value of isHidden to show or hide the window
      }
    }
  },
});

export const { addWindow, removeWindow, toggleHidden } = windowSlice.actions; // Export the action creators
export default windowSlice.reducer; // Export the reducer function



