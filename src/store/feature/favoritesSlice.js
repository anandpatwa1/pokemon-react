import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      const item = action.payload;
      if (!state.find(fav => fav._id === item._id)) {
        state.push(item);
      }
    },
    removeFavorite: (state, action) => {
      return state.filter(fav => fav._id !== action.payload._id);
    },
    resetFavorites: (state) => [],
  },
});

export const { addFavorite, removeFavorite, resetFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
