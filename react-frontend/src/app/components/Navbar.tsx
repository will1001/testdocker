import { Dispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
import { setCars } from "../redux/CarsReducer";
import carService from "../services/carService";
import { GetCars_cars } from "../services/carService/__generated__/GetCars";
import { makeSelectCars } from "./selectors";
import { createSelector } from "reselect";

const Container = styled.div`
  ${tw`
flex
justify-between
p-4
bg-green-500
`}
  :hover {
    ${tw`bg-blue-700`}
  }
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setCars: (cars: GetCars_cars[]) => dispatch(setCars(cars)),
});

const stateSelector = createSelector(makeSelectCars, (cars) => ({
  cars: cars.cars,
  isLoading: cars.isLoading,
}));

const Navbar = () => {
  const { cars, isLoading } = useSelector(stateSelector);
  const { setCars } = actionDispatch(useDispatch());
  const fetchTopCars = async () => {
    const cars = await carService.getCars().catch((err) => {
      console.log("Error: ", err);
    });

    console.log("Cars: ", cars);
    cars && setCars(cars);
  };

  useEffect(() => {
    fetchTopCars();
  }, []);

  return (
    <Container>
      <div>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          cars.map((e, i) => {
            return (
              <div key={i}>
                <p>{e.dailyPrice}</p>
                <p>{e.monthlyPrice}</p>
              </div>
            );
          })
        )}
      </div>
      <div>logo2</div>
      <div>logo3</div>
    </Container>
  );
};

export default Navbar;
