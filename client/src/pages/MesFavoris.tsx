import { useContext, useEffect } from "react";
import "../components/MesFavoris.css";
import BreweryContext from "../Contexts/BreweryContext";

const MesFavoris = () => {
  const { favorites, toggleFavorite, breweries, setBreweries } =
    useContext(BreweryContext); //recuperation des fonction à partir de context
  useEffect(() => {
    // Filtre les brasseries favorites en fonction de l'ID des brasseries stockées dans 'favorites'
    const favoriteBreweries = breweries.filter((brewery) =>
      favorites.includes(brewery.id),
    );
    // Met à jour l'état des brasseries avec la liste des brasseries favorites
    setBreweries(favoriteBreweries);
    [favorites, breweries]; // Ce useEffect sera exécuté chaque fois que 'favorites' ou 'breweries' changent
  });
  return (
    <div>
      <h2 className="titreMesFavoris">Mes brasseries favorites</h2>
      <ul className="cardFavoris">
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
