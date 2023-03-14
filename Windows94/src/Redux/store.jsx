// Import the `configureStore` function and the `windowReducer` from their respective modules
import { configureStore } from "@reduxjs/toolkit";
import windowReducer from "./windowSlice"

// Create the Redux store by calling `configureStore` with an object containing the `window` slice reducer
export const store = configureStore({
  reducer : {window: windowReducer},
})
