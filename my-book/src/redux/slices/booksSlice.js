// src/redux/slices/booksSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebaseConfig";
import { ref, get, set, update } from "firebase/database";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const snapshot = await get(ref(database, "books"));
  return snapshot.val() ? Object.entries(snapshot.val()).map(([id, book]) => ({ id, ...book })) : [];
});

export const booksSlice = createSlice({
  name: "books",
  initialState: { books: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => { state.loading = true; })
      .addCase(fetchBooks.fulfilled, (state, action) => { state.books = action.payload; state.loading = false; })
      .addCase(fetchBooks.rejected, (state, action) => { state.error = action.error.message; state.loading = false; });
  },
});

export default booksSlice.reducer;
