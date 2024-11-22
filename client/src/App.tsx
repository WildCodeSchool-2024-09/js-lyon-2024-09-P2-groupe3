import "./App.css";

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
        <p>contact@wildbeers.fr - 06 00 00 00 00 - 2024</p>
      </footer>
    </>
  );
}

export default App;
