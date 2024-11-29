import { useState } from "react";
interface RandomBrewery {
  id: string;
  name: string;
  brewery_type: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
  website_url: string;
  state: string;
}

function ButtonJaiSoif() {
  const [randomBrewery, setRandomBrewery] = useState<RandomBrewery | null>(
    null,
  );
  const randomApi = () => {
    fetch("https://api.openbrewerydb.org/v1/breweries/random", {
      headers: {
        "Cache-Control": "no-cache", // indique au navigateur ne pas utiliser de réponse mise en cache
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRandomBrewery(data[0]);
      });
  };
  return (
    <>
      <button className="boutonSoif" type="button" onClick={randomApi}>
        J'ai soif
      </button>
      {randomBrewery && (
        <figure className="card" key={randomBrewery.id}>
          <h3 className="nameBrasserie">{randomBrewery.name}</h3>
          <ul className="cardList">
            <li>Type de brassage: {randomBrewery.brewery_type}</li>
            <li>
              Adresse :{randomBrewery.address} {randomBrewery.postal_code}{" "}
            </li>
            <li>Ville :{randomBrewery.city}</li>
            <li>Région :{randomBrewery.state}</li>
            <li>Pays : {randomBrewery.country}</li>
            <li>
              Site internet :
              <a href={randomBrewery.website_url}>visiter le site </a>
            </li>
          </ul>
        </figure>
      )}
    </>
  );
}
export default ButtonJaiSoif;
