import { createSlice } from "@reduxjs/toolkit";

const Appslice = createSlice({
  name: "App",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = Appslice.actions;
export default Appslice.reducer;
