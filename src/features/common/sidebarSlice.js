import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: true, // current page title state management
  },
  reducers: {
    toggleSet: (state, { payload }) => {
      state.isOpen = typeof payload === "boolean" ? payload : true;
    },
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    
  },
});

export const { toggleOpen, toggleSet } = sidebarSlice.actions;



export default sidebarSlice.reducer;
