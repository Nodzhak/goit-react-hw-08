import { createSlice } from "@reduxjs/toolkit";
import {
  deleteContact,
  fetchContacts,
  addContact,
  updateContact,
} from "./operations";

import { logout } from "../auth/operations";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.error = false;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
        state.error = false;
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const contactIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[contactIndex] = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.loading = false;
      }),
});

export default slice.reducer;