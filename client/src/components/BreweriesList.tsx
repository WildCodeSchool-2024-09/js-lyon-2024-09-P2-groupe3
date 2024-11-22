// import { useContext } from "react";
// import BeerContext from "../Contexts/BeerContext";

// const BreweriesList = () => {

//   const { favorites, toggleFavorite } = useContext(BeerContext);
//   const { breweries } = useContext(BeerContext);

//   return (
// <div>
//   {breweries.map((brewery) => (
//     <figure className="card" key={brewery.id}>
//       <h3 className="nameBrasserie">{brewery.name}</h3>
//       <ul className="cardList">
//         <li>Type de brassage: {brewery.brewery_type}</li>
//         <li>
//           Adresse :{brewery.address} {brewery.postal_code}{" "}
//           <li>Ville :{brewery.city}</li>
//           <li>Région :{brewery.state}</li>
//           <li>Pays : {brewery.country}</li>
//         </li>
//         <li>
//           <a href={brewery.website_url} className="url">
//             visiter le site{" "}
//           </a>
//         </li>
//       </ul>
//       <button
//         type="button"
//         className="coeurs"
//         onClick={() => toggleFavorite(brewery.id)}
//       >
//         {favorites.includes(brewery.id) ? "❤️" : "🖤"}
//       </button>
//     </figure>
//   ))}
// </div>
//   );
// };

// export default BreweriesList;
