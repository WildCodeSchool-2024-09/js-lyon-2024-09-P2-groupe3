import { useContext, useEffect, useState } from "react";

import BreweryContext, { type BreweryType } from "../Contexts/BreweryContext";

function Filter() {
  const { breweries, setBreweries } = useContext(BreweryContext); // Récupérer la fonction setBreweries du contexte

  const [tempCountries, setTempCountries] = useState<string[]>([]); // le résultat doit être des strings dans un tableau et redonner un autre tableau
  const [tempProvinces, setTempProvinces] = useState<string[]>([]);
  const [tempCities, setTempCities] = useState<string[]>([]);

  // état pour stocker les brasseries sélectionnées mais non encore affichées
  const [filteredBreweries, setFilteredBreweries] = useState<BreweryType[]>([]);
  // état pour afficher les brasseries sélectionnées

  const [filter, setFilter] = useState(false);

  // Filtrage des brasseries en fonction des pays, provinces, et villes
  const filterBreweries = (
    countries: string[],
    provinces: string[],
    cities: string[],
  ) => {
    const filtered = breweries.filter(
      (brewery) =>
        (!countries.length || countries.includes(brewery.country)) && // filtrer toutes les brasseries si aucun pays n'est sélectionner
        (!provinces.length || provinces.includes(brewery.state_province)) && // filtrer par province si nécessaire
        (!cities.length || cities.includes(brewery.city)), // filtrer par ville si nécessaire
    );

    // mise à jour de l'état des brasseries
    setFilteredBreweries(filtered);
  };

  const handleApplyFilters = () => {
    filterBreweries(tempCountries, tempProvinces, tempCities);
  };

  // met à jour les brasseries sélectionnées à chaque fois que l'état change
  useEffect(() => {
    setBreweries(filteredBreweries);
  }, [filteredBreweries, setBreweries]);

  const handleTempCountryChange = (country: string) => {
    const newSelectedCountries = tempCountries.includes(country)
      ? tempCountries.filter((c) => c !== country) // retirer un pays déjà sélectionné
      : [...tempCountries, country]; // autrement ajouté
    setTempCountries(newSelectedCountries);
  };
  const handleTempProvincesChange = (province: string) => {
    const newTempProvinces = tempProvinces.includes(province)
      ? tempProvinces.filter((r) => r !== province)
      : [...tempProvinces, province];
    setTempProvinces(newTempProvinces);
  };

  const handleTempCitiesChange = (city: string) => {
    const newTempCities = tempCities.includes(city)
      ? tempCities.filter((c) => c !== city)
      : [...tempCities, city];
    setTempCities(newTempCities);
  };

  // liste des pays, provinces, villes
  const countries = Array.from(
    new Set(breweries.map((brewery) => brewery.country)),
  );

  const provinces = Array.from(
    new Set(
      breweries
        .filter((brewery) => tempCountries.includes(brewery.country))
        .map((brewery) => brewery.state_province),
    ),
  );

  const cities = Array.from(
    new Set(
      breweries
        .filter((brewery) => tempProvinces.includes(brewery.state_province))
        .map((brewery) => brewery.city),
    ),
  );

  // chaque input propose des choix de countries/provinces/cities
  return (
    <>
      <div className="filterCard">
        <div className="filtres">
          <button
            type="button"
            className="boutonSoif"
            onClick={() => setFilter((prev) => !prev)}
          >
            Filtre
          </button>
          {filter && (
            <div>
              <h2 className="boutonSoif">Pays</h2>

              {countries.map((country) => (
                <div className="listeFiltre" key={country}>
                  <input
                    type="checkbox"
                    id={country}
                    checked={tempCountries.includes(country)}
                    onChange={() => handleTempCountryChange(country)}
                  />
                  <label htmlFor={country}>{country}</label>
                </div>
              ))}

              {provinces.length > 0 && (
                <>
                  <h2 className="boutonSoif">Régions</h2>
                  {provinces.map((province) => (
                    <div className="listeFiltre" key={province}>
                      <input
                        type="checkbox"
                        id={province}
                        checked={tempProvinces.includes(province)}
                        onChange={() => handleTempProvincesChange(province)}
                      />
                      <label htmlFor={province}>{province}</label>
                    </div>
                  ))}
                </>
              )}

              {cities.length > 0 && (
                <>
                  <h2 className="boutonSoif">Villes</h2>
                  {cities.map((city) => (
                    <div className="listeFiltre" key={city}>
                      <input
                        type="checkbox"
                        id={city}
                        checked={tempCities.includes(city)}
                        onChange={() => handleTempCitiesChange(city)}
                      />
                      <label htmlFor={city}>{city}</label>
                    </div>
                  ))}
                </>
              )}
              <button
                type="button"
                className="boutonSoif"
                onClick={handleApplyFilters}
              >
                Valider
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Filter;
