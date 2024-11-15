import { useState } from "react";
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

function BoutonSoif() {
  const [brewery, setBrewery] = useState<Brewery | null>(null);
  const randomBrewery = () => {
    const randomNumber = Math.floor(Math.random() * 8000) + 1;
    fetch(`https://api.openbrewerydb.org/v1/breweries/random?${randomNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setBrewery(data[0]);
      });
  };
  return (
    <>
      <button className="boutonSoif" type="button" onClick={randomBrewery}>
        {" "}
        J'ai soif
      </button>
      {brewery && (
        <figure className="card" key={brewery.id}>
          <h3 className="nameBrasserie">{brewery.name}</h3>
          <ul className="cardList">
            <li>Type de brassage: {brewery.brewery_type}</li>
            <li>
              Adresse :{brewery.address} {brewery.postal_code}{" "}
            </li>
            <li>Ville :{brewery.city}</li>
            <li>Région :{brewery.state}</li>
            <li>Pays : {brewery.country}</li>

            <li>
              Site internet : <a href={brewery.website_url}>visiter le site </a>
            </li>
          </ul>
        </figure>
      )}
    </>
  );
}
export default BoutonSoif;
