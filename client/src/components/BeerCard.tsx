// import { useContext, useState } from "react";
// import BeerContext from "../Contexts/BeerContext";
// import type { Beer } from "./Beers";

// interface BeerCardProps {
//   beer: Beer;
// }

// function BeerCard({ beer }: BeerCardProps) {
//   const { beerCount, setBeerCount } = useContext(BeerContext);
//   const [isFavorite, setIsFavorite] = useState(false);

//   function handleClickFavorite() {
//     if (isFavorite === false) {
//       setBeerCount(beerCount + 1);
//     } else {
//       setBeerCount(beerCount - 1);
//     }
//     setIsFavorite(!isFavorite);
//   }

//   return (
//     <>
//       <figure className="card">
//         <h3 className="nameBrasserie">{beer.name}</h3>
//         <ul className="cardList">
//           <li>Type de brassage: {beer.brewery_type}</li>
//           <li>
//             Adresse :{beer.address} {beer.city} {beer.postal_code} {beer.state}
//           </li>
//           <li>
//             Site internet : <a href={beer.website_url}>visiter le site </a>
//           </li>
//         </ul>
//         <button type="button" onClick={handleClickFavorite}>
//           {isFavorite ? "❤️" : "🖤"}
//         </button>
//       </figure>
//     </>
//   );
// }

//   return (
//     <>
//       <figure className="card">
//         <h3 className="nameBrasserie">{beer.name}</h3>
//         <ul className="cardList">
//           <li>Type de brassage: {beer.brewery_type}</li>
//           <li>
//             Adresse :{beer.address} {beer.city} {beer.postal_code} {beer.state}
//           </li>
//           <li>
//             Site internet : <a href="{beer.website_url}">visiter le site </a>
//           </li>
//         </ul>
//         <button type="button" onClick={handleClickFavorite}>
//           {isFavorite ? "❤️" : "🖤"}
//         </button>
//       </figure>
//     </>
//   );
// }

// export default BeerCard;
