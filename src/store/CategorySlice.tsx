import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  selectedCategory: string | null;
}

const initialState: CategoryState = {
  selectedCategory: null,
};

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    selectCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { selectCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
