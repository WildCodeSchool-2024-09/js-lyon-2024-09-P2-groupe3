import { useContext, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import BeerContext from "../Contexts/BeerContext";
import type { Brewery } from "../Contexts/BeerContext";
export default function Maps() {
  const { breweries } = useContext(BeerContext);
  const { favorites, toggleFavorite } = useContext(BeerContext);

  const [, setValidLocations] = useState<Brewery[]>([]);

  useEffect(() => {
    const filteredBreweries = breweries.filter(
      (location) => location.latitude && location.longitude,
    );
    setValidLocations(filteredBreweries);
  }, [breweries]);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {breweries.map((brewery) => (
        <Marker
          key={brewery.id}
          position={[brewery.latitude, brewery.longitude]}
        >
          <Popup className="pop-up">
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
                <a href={brewery.website_url} className="url">
                  visiter le site{" "}
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="coeurs"
              onClick={() => toggleFavorite(brewery.id)}
            >
              {favorites.includes(brewery.id) ? "❤️" : "🖤"}
            </button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
