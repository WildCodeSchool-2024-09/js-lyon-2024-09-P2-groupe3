import "./App.css";

import { Link, Outlet } from "react-router-dom";

// import BeerContext from "./Contexts/BeerContext";
// import BeersList from "./components/BeersList";
// import BreweriesList from "./components/BreweriesList";

function App() {
  return (
    <>
      <header>
        <div className="h1-logo-container">
          <h1 className="titre">Wild beers </h1>
          <img
            className="logoImg"
            src="/src/assets/images/logo.png"
            alt="logo"
          />
        </div>
        <button type="button" className="burger-menu">
          ☰ Menu
        </button>

        <nav className="barreNav">
          <Link to="/" className="homeLink">
            Home
          </Link>
          <Link to="/mes-favoris" className="homeLink">
            Mes favoris
          </Link>
          <Link to="/notre-histoire" className="homeLink">
            Notre histoire
          </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
      <footer>
        <p>Coordonées - 2024</p>
      </footer>
    </>
  );
}

export default App;
