import { configureStore } from "@reduxjs/toolkit";
import upvotesSliceReducer from "./upvotesSlice";

export default configureStore({
  reducer: {
    upvotes: upvotesSliceReducer,
  },
});
