// import { useState } from "react";

// export interface Beer {
//   id: number;
//   name: string;
//   brewery_type: string;
//   address: string;
//   city: string;
//   state_province: string;
//   postal_code: string;
//   country: string;
//   website_url: string;
//   state: string;
// }

// const breweries: Beer[] = [
//   {
//     id: 1,
//     name: "Bute Brew Co",
//     brewery_type: "closed",
//     address: "15-17 Columshill Street",
//     city: "Isle of Bute",
//     state_province: "Bute",
//     postal_code: "PA20 0DN",
//     country: "Scotland",
//     website_url: "http://butebrewco.co.uk/",
//     state: "Bute",
//   },
//   {
//     id: 2,
//     name: "Colonsay Ales",
//     brewery_type: "micro",
//     address: "Colonsay Brewery",
//     city: "Isle of Colonsay",
//     state_province: "Argyll",
//     postal_code: "PA61 7YZ",
//     country: "England",
//     website_url: "https://colonsaybrewery.co.uk/",
//     state: "Argyll",
//   },
//   {
//     id: 3,
//     name: "Fyne Ales",
//     brewery_type: "micro",
//     address: "Achadunan",
//     city: "Cairndow",
//     state_province: "Argyll",
//     postal_code: "PA26 8BJ",
//     country: "Poland",
//     website_url: "https://www.fyneales.com/",
//     state: "Argyll",
//   },
// ];

// const countries = ["England", "Scotland", "Poland"]

// function Filter() {
//   const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
//   const [filteredBreweries, setFilteredBreweries] = useState<Beer[]>(breweries);

//   const handleCountryChange = (country:string) => {
//     const newSelectedCountries = selectedCountries.includes(country)
//       ? selectedCountries.filter((c) => c !== country)
//       : [...selectedCountries, country];

//       setSelectedCountries(newSelectedCountries);
//       setFilteredBreweries(
//         breweries.filter(brewery => newSelectedCountries.includes(brewery.country))
//       );
//     };

//   return (
//     <>
//           <div>
//       <h1>Brewery Filter</h1>

//       {countries.map(country => (
//         <div key={country}>
//           <input
//             type="checkbox"
//             id={country}
//             checked={selectedCountries.includes(country)}
//             onChange={() => handleCountryChange(country)}
//           />
//           <label htmlFor={country}>{country}</label>
//         </div>
//       ))}

//       <ul>
//         {filteredBreweries.map(brewery => (
//           <li key={brewery.id}>{brewery.name} - {brewery.country}</li>
//         ))}
//       </ul>
//     </div>
//     </>
//   );
// }

// export default Filter;
