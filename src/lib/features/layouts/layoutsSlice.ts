import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayoutsState {
  navHeight: number;
}

const initialState: LayoutsState = {
  navHeight: 0,
};

const layoutsSlice = createSlice({
  name: 'layouts',
  initialState,
  reducers: {
    setNavHeight: (state, action: PayloadAction<number>) => {
      state.navHeight = action.payload;
    },
  },
});

export const { setNavHeight } = layoutsSlice.actions;
export default layoutsSlice.reducer;
