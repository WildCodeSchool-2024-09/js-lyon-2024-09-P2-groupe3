import { useState } from "react";
import "../App.css";

import BeerContext from "../Contexts/BeerContext";

import BreweriesList from "./BreweriesList";

function Home() {
  const [beerCount, setBeerCount] = useState(0);
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
    <>
      <h2 className="titreMain">Voyagez dans le monde des brasseries</h2>
      <h3>Ma sélection : {beerCount} brasseries</h3>
      <div className="cardContainer">
        <BeerContext.Provider value={{ beerCount, setBeerCount }}>
          <BreweriesList
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </BeerContext.Provider>
      </div>
    </>
  );
}

export default Home;
