import "../components/home.css";
import { useContext } from "react";
import Filter from "../components/Filter";
import Maps from "../components/map";
import BreweryContext from "../Contexts/BreweryContext";
import ButtonJaiSoif from "../components/buttonJaiSoif";

function Home() {
  const { breweryCount } = useContext(BreweryContext);

  return (
    <>
      <div className="titre_selection_contenair">
        <h2 className="titreMain">Voyagez dans le monde des brasseries</h2>
        <h3 className="maSelection">
          Ma sélection : {breweryCount} brasseries 🍺
        </h3>
      </div>
      <div className="map_filtre">
        <div className="leaflet-container">
          <Maps />
        </div>
        <Filter />
      </div>
      <ButtonJaiSoif />
    </>
  );
}

export default Home;
