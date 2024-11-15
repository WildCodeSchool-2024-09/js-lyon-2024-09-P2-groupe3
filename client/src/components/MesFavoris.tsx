import { useContext, useEffect, useState } from "react";
import BeerContext from "../Contexts/BeerContext";

interface Brewery {
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
}

const MesFavoris = () => {
  const { favorites, toggleFavorite } = useContext(BeerContext); // Utiliser le contexte pour récupérer les favoris et la fonction toggleFavorite

  const [breweries, setBreweries] = useState<Brewery[]>([]);
  useEffect(() => {
    fetch("https://api.openbrewerydb.org/v1/breweries?per_page=200")
      .then((response) => response.json())
      .then((data) => {
        // Filtrer les brasseries favorites par leur ID
        const favoriteBreweries = data.filter((brewery: Brewery) =>
          favorites.includes(brewery.id),
        );
        setBreweries(favoriteBreweries);
      });
  }, [favorites]);

  return (
    <div>
      <h2>Mes brasseries favorites</h2>
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
            <button type="button" onClick={() => toggleFavorite(brewery.id)}>
              {favorites.includes(brewery.id) ? "❤️" : "🖤"}
            </button>
          </figure>
        ))}
      </ul>
    </div>
  );
};

export default MesFavoris;
