import "./App.css";
import mail from "./assets/images/email.png";
import facebook from "./assets/images/facebook.png";
import instagram from "./assets/images/instagram.png";

import { Outlet } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <p className="footerElements">Coordonnées - 06 00 00 00 00 - 2024</p>
        <p>
          <a className="logosFooter" href="https://www.facebook.com/">
            <img className="logosFooter" src={facebook} alt="facebook" />
          </a>
          <a className="logosFooter" href="https://www.instagram.com/">
            <img className="logosFooter" src={instagram} alt="instagram" />
          </a>
          <a className="logosFooter" href="gmail.com">
            <img className="logosFooter" src={mail} alt="mail" />
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
