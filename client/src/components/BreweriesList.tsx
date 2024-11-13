import { useEffect, useState } from "react";

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
interface BreweriesListProps {
  favorites: string[];
  toggleFavorite: (breweryId: string) => void;
}

const BreweriesList = ({ favorites, toggleFavorite }: BreweriesListProps) => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  useEffect(() => {
    getBreweries();
  }, []);

  const getBreweries = () => {
    fetch(
      "https://api.openbrewerydb.org/v1/breweries?by_country=england&per_page=200",
    )
      .then((response) => response.json())
      .then((data) => {
        setBreweries(data);
      });
  };

  return (
    <div>
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

export default BreweriesList;
