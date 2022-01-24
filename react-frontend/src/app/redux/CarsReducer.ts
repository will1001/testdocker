import { createSlice } from "@reduxjs/toolkit";
import { CarsType } from "./type";

const initialState: CarsType = {
  cars: [],
  isLoading: true,
};

export const carsReducer = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setCars } = carsReducer.actions;
export default carsReducer.reducer;
