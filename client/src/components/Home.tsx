// import { useState } from "react";
import "../App.css";

// import BeerContext from "../Contexts/BeerContext";
// import { beersList } from "./Beers";
// import BeersList from "./BeersList";
import BreweriesList from "./BreweriesList";

function Home() {
  // const [beerCount, setBeerCount] = useState(0);

  return (
    <>
      <h2 className="titreMain">Voyagez dans le monde des brasseries</h2>

      {/* const [isSelection, setSelection] = useState(false); */}

      {/* function handleClickSelection() { */}
      {/* if (isFavorite === false) { */}
      {/* setBeerCount(beerCount + 1); */}
      {/* } else {
//       setBeerCount(beerCount - 1);
//     }
//     setSelection(!isSelection);
//   } */}

      {/* <button type="button" onClick={handleClickSelection}>
{isSelection ? "parametre1" : "parametre2"} */}
      {/* </button> */}

      {/* <h3>Ma sélection : {beerCount} brasseries</h3> */}
      <div className="cardContainer">
        <BreweriesList />
      </div>
    </>
  );
}

export default Home;
