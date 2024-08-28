import {configureStore} from "@reduxjs/toolkit"
import { btShoeReducer } from "./BTShoe/slice"

export const store = configureStore({
  reducer: {
    btShoeReducer,
  }
})