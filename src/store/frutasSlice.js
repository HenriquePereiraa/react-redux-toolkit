import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "frutas",
  initialState: {
    frutas:[],
  },
  reducers: {
    setFruits: (state, { payload }) => {
      return{
        ...state,
          frutas:[...state.frutas, payload]
      }
    },
    resetFruits:(state) => {
      return{
        ...state,
        frutas:[]
      }
    }
  },
});

export const { setFruits, resetFruits } = slice.actions;

export default slice.reducer;
