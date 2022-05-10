import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    value: {
      allBooks: [],
      selectedBook: {},
      readBooks: [],
      wishlist: [],
      currReadingBooks: [],
      searchTerm: "",
      op: 0,
      loading: false,
    },
  },
  reducers: {
    fetchBooksFromAPI: (state, action) => {
      state.value.allBooks = action.payload.docs;
    },
    search: (state, action) => {
      state.value.searchTerm = action.payload;
    },
    addNewBook: (state, action) => {
      state.value.wishlist = [...state.value.wishlist, action.payload];
    },
    selectAdRead: (state, action) => {
      state.value.selectedBook = state.value.allBooks
        .concat(state.value.wishlist)
        .find((book) => book.key === action.payload);
      state.value.readBooks = [
        ...state.value.readBooks,
        state.value.selectedBook,
      ];
    },
    addCurrReadingBook: (state, action) => {
      const currentyReadingBook = state.value.allBooks.find(
        (book) => book.key === action.payload
      );
      state.value.currReadingBooks = [
        ...state.value.currReadingBooks,
        currentyReadingBook,
      ];
    },
    opc: (state, action) => {
      state.value.op = action.payload;
    },
    load: (state, action) => {
      state.value.loading = action.payload;
    },
    loadFinished: (state, action) => {
      state.value.loading = action.payload;
    },
  },
});
export const {
  fetchBooksFromAPI,
  search,
  addNewBook,
  selectAdRead,
  addCurrReadingBook,
  opc,
  load,
  loadFinished,
} = bookSlice.actions;
export default bookSlice.reducer;
