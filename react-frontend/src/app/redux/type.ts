import { GetCars_cars } from "../services/carService/__generated__/GetCars";

export interface CarsType {
  cars: GetCars_cars[];
  isLoading: boolean;
}
