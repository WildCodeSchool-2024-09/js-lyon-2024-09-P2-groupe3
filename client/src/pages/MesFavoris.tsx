import { useContext, useEffect } from "react";
import BeerContext from "../Contexts/BeerContext";

const MesFavoris = () => {
  const { favorites, toggleFavorite, breweries, setBreweries } =
    useContext(BeerContext);
  useEffect(() => {
    const favoriteBreweries = breweries.filter((brewery) =>
      favorites.includes(brewery.id),
    );
    setBreweries(favoriteBreweries);
  });
  return (
    <div>
      <h2 className="titreMesFavoris">Mes brasseries favorites</h2>
      <ul>
        {breweries.map((brewery) => (
          <figure className="card" key={brewery.id}>
            <h3 className="nameBrasserie">{brewery.name}</h3>
            <ul className="cardList">
              <li>Type de brassage: {brewery.brewery_type}</li>
              <li>
                Adresse :{brewery.address} {brewery.postal_code}{" "}
                <li>Ville :{brewery.city}</li>
                <li>Région :{brewery.state}</li>
                <li>Pays : {brewery.country}</li>
              </li>
              <li>
                Site internet :{" "}
                <a href={brewery.website_url}>visiter le site </a>
              </li>
            </ul>
            <button
              type="button"
              className="coeurs"
              onClick={() => toggleFavorite(brewery.id)}
            >
              {favorites.includes(brewery.id) ? "❤️" : "🖤"}
            </button>
          </figure>
        ))}
      </ul>
    </div>
  );
};

export default MesFavoris;
