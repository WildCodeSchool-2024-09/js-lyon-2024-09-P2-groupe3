import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <header>
      <img
        className="banner"
        src="/src/assets/images/barrels_banner.jpg"
        alt="barrels_banner"
      />
      <div className="bannerWrap">
        <div className="h1-logo-container">
          <h1 className="titre">Wild beers </h1>
          <img
            className="logoImg"
            src="/src/assets/images/logo.png"
            alt="logo"
          />
        </div>
        <button type="button" className="burger-menu">
          ☰
        </button>
      </div>
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
  );
}
export default Header;
