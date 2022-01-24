import { createSelector } from "reselect";
import { IRootAppState } from "../typings";

const selectCars = (state: IRootAppState) => state.cars;

export const makeSelectCars = createSelector(selectCars, (data) => ({
  cars: data.cars,
  isLoading: data.isLoading,
}));
