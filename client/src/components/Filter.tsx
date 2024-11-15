import { useEffect, useState } from "react";

export interface Beer {
  id: number;
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

function Filter() {
  const [breweries, setBreweries] = useState<Beer[]>([]);
  useEffect(() => {
    getBreweries();
  }, []);

  const getBreweries = () => {
    const urls = [
      "https://api.openbrewerydb.org/v1/breweries?by_country=england&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=austria&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=france&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=isle_of_man&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=irland&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=poland&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=portugal&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=scotland&per_page=200",
    ];

    const fetchPromises = urls.map((url) => fetch(url));
    Promise.all(fetchPromises)
      .then((responses) =>
        Promise.all(responses.map((response) => response.json())),
      )
      .then((data) => {
        const breweries = data.flat();

        setBreweries(breweries);
      });
  };
  const [filteredBreweries, setFilteredBreweries] = useState<Beer[]>(breweries);
  const [filter, setFilter] = useState(false);

  const [tempCountries, setTempCountries] = useState<string[]>([]);
  const [tempProvinces, setTempProvinces] = useState<string[]>([]);
  const [tempCities, setTempCities] = useState<string[]>([]);

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

  const handleApplyFilters = () => {
    filterBreweries(tempCountries, tempProvinces, tempCities);
  };
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

  return (
    <>
      <div>
        <button
          type="button"
          className="boutonSoif"
          onClick={() => setFilter((prev) => !prev)}
        >
          Filtre
        </button>
        {filter && (
          <div>
            <h2>Filtrer par :</h2>

            {countries.map((country) => (
              <div key={country}>
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
                <h2>Régions/States</h2>
                {provinces.map((province) => (
                  <div key={province}>
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
                <h2>Villes</h2>
                {cities.map((city) => (
                  <div key={city}>
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
            <button type="button" onClick={handleApplyFilters}>
              Valider
            </button>
          </div>
        )}
        <ul>
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
