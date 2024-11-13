import { type Dispatch, type SetStateAction, createContext } from "react";

// const BeerContext = createContext({
// 	beerCount: 0,
// 	setBeerCount: Dispatch<SetStateAction<number>> = () => defaultValue,
// });

const defaultValue: BeerCountType = {
  beerCount: 0,
  setBeerCount: () => {},
};

interface BeerCountType {
  beerCount: number;
  setBeerCount: Dispatch<SetStateAction<number>>;
}

const BeerContext = createContext<BeerCountType>(defaultValue);

// const BeerContext = createContext(null);

export default BeerContext;
