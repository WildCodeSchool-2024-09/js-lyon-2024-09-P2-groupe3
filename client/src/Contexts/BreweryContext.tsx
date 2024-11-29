import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export interface BreweryType {
  id: string;
  name: string;
  brewery_type: string;
  address: string;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  website_url: string;
  state: string;
  longitude: number;
  latitude: number;
}

interface BreweriesType {
  breweryCount: number;
  setBreweryCount: Dispatch<SetStateAction<number>>;
  favorites: string[];
  toggleFavorite: (breweryFavorite: string) => void;
  setBreweries: Dispatch<SetStateAction<BreweryType[]>>;
  breweries: BreweryType[];
  filteredBreweries: BreweryType[];
  setFilteredBreweries: Dispatch<SetStateAction<BreweryType[]>>;
}

const defaultValue: BreweriesType = {
  breweryCount: 0,
  setBreweryCount: () => {},
  favorites: [],
  toggleFavorite: () => {},
  breweries: [],
  setBreweries: () => {},
  filteredBreweries: [],
  setFilteredBreweries: () => {},
};

const BreweryContext = createContext<BreweriesType>(defaultValue); // creation de context

export const BreweryProvider = ({
  // creation de provider pour passer context
  children,
}: { children: React.ReactNode }) => {
  const [breweries, setBreweries] = useState<BreweryType[]>([]);
  const [filteredBreweries, setFilteredBreweries] = useState<BreweryType[]>([]);

  useEffect(() => {
    getBreweries();
  }, []);

  const getBreweries = () => {
    const urls = [
      "https://api.openbrewerydb.org/v1/breweries?by_country=england&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=austria&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=france&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=isle_of_man&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=ireland&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=poland&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=scotland&per_page=200",
    ];
    // fetcher plusiuer lien de l"API et garder dans l'état breweries
    const fetchPromises = urls.map((url) => fetch(url));
    Promise.all(fetchPromises)
      .then((responses) =>
        Promise.all(responses.map((response) => response.json())),
      )
      .then((data) => {
        const breweries = data.flat();

        setBreweries(breweries);
      });
  };

  const [breweryCount, setBreweryCount] = useState<number>(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  //  mettre à jour de liste de mes favoris (favorites)
  const toggleFavorite = (breweryFavorite: string) => {
    if (favorites.includes(breweryFavorite)) {
      setFavorites(favorites.filter((id) => id !== breweryFavorite));
      setBreweryCount(breweryCount - 1);
    } else {
      setFavorites([...favorites, breweryFavorite]);
      setBreweryCount(breweryCount + 1);
    }
  };

  return (
    <BreweryContext.Provider
      value={{
        breweryCount,
        setBreweryCount,
        favorites,
        toggleFavorite,
        breweries,
        setBreweries,
        filteredBreweries,
        setFilteredBreweries,
      }}
    >
      {children}
    </BreweryContext.Provider>
  );
};

export default BreweryContext;
