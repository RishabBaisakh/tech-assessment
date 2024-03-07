import { createSlice } from "@reduxjs/toolkit";

export const upvotesSlice = createSlice({
  name: "upvotes",
  initialState: {
    upvotesList: [[true]],
  },
  reducers: {
    updateList: (state, action) => {
      state.upvotesList[action.payload.index] = action.payload.newList;
    },
    addList: (state) => {
      state.upvotesList.push([true]);
    },
    setList: (state, action) => {
      state.upvotesList = [...action.payload];
    },
  },
});

export const { updateList, addList, setList } = upvotesSlice.actions;

export default upvotesSlice.reducer;
