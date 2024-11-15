import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useState,
} from "react";

const defaultValue: BeerCountType = {
  beerCount: 0,
  setBeerCount: () => {},
  favorites: [],
  toggleFavorite: () => {},
};

interface BeerCountType {
  beerCount: number;
  setBeerCount: Dispatch<SetStateAction<number>>;
  favorites: string[];
  toggleFavorite: (breweryId: string) => void;
}

const BeerContext = createContext<BeerCountType>(defaultValue);

export const BeerProvider = ({ children }: { children: React.ReactNode }) => {
  const [beerCount, setBeerCount] = useState<number>(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (breweryId: string) => {
    if (favorites.includes(breweryId)) {
      setFavorites(favorites.filter((id) => id !== breweryId));
      setBeerCount(beerCount - 1);
    } else {
      setFavorites([...favorites, breweryId]);
      setBeerCount(beerCount + 1);
    }
  };

  return (
    <BeerContext.Provider
      value={{ beerCount, setBeerCount, favorites, toggleFavorite }}
    >
      {children}
    </BeerContext.Provider>
  );
};

export default BeerContext;
