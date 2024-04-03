import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilteredContacts(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilteredContacts } = slice.actions;
export default slice.reducer;