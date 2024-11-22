import { useContext, useState } from "react";
import BeerContext from "../Contexts/BeerContext";

function Filter() {
  const { breweries } = useContext(BeerContext);

  const [filteredBreweries, setFilteredBreweries] = useState(breweries);
  const [filter, setFilter] = useState(false);

  // déclaration des states pour récupérer les réponses des sélections par pays, provinces et citiess dans un tableau, qui ne sera visible qu'au clic sur valider
  const [tempCountries, setTempCountries] = useState<string[]>([]);
  const [tempProvinces, setTempProvinces] = useState<string[]>([]);
  const [tempCities, setTempCities] = useState<string[]>([]);

  // changement du state au clic en fonction des countries/provinces/cities sélectionnés avec la fonction ternaire
  const handleTempCountryChange = (country: string) => {
    const newSelectedCountries = tempCountries.includes(country)
      ? tempCountries.filter((c) => c !== country)
      : [...tempCountries, country];
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

  // le filtre s'applique en fonction des countries, provinces, cities sélectionnés
  const handleApplyFilters = () => {
    filterBreweries(tempCountries, tempProvinces, tempCities);
  };

  // affichage dans un Array des brasseries sélectionnées en fonction des countries/provinces/citiess
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

  // retourne une nouvelle liste de brasseries par countries/provinces/cities selon le filtre utilisé : si le tableau countries/provinces/cities est vide (! country.length) on accepte toute les brasseries quel que soit le countries sinon on vérifie si le brewery.country est inclu dans countries
  const filterBreweries = (
    countries: string[],
    provinces: string[],
    cities: string[],
  ) => {
    setFilteredBreweries(
      breweries.filter(
        (brewery) =>
          (!countries.length || countries.includes(brewery.country)) &&
          (!provinces.length || provinces.includes(brewery.state_province)) &&
          (!cities.length || cities.includes(brewery.city)),
      ),
    );
  };

  // chaque input propose des choix de countries/provinces/cities
  return (
    <>
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
            <h2 className="boutonSoif">Filtrer par :</h2>

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
                <h2 className="boutonSoif">Régions/States</h2>
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
        <ul className="listeFiltre">
          {filteredBreweries.map((brewery) => (
            <li key={brewery.id}>
              {brewery.name} - {brewery.country}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Filter;
