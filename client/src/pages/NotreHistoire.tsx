import teamImage from "../assets/images/team.jpg";
import "../components/NotreHistoire.css";

function NotreHistoire() {
  return (
    <>
      <h1 className="titreMesFavoris">Notre Histoire</h1>
      <img src={teamImage} alt="groupe Wild Beers" className="teamPhoto" />
      <p className="textePresentation">
        Notre histoire commence le 23 septembre à la Wild. La formation étant
        intense, il est important pour chacun et chacune de décompresser après
        avoir assimilé tant de notions. <br />
        <br />
        Au fil des semaines, nous découvrons une certaine passion pour la bière
        du vendredi soir. Alors nous nous sommes dit, pourquoi pas ? Pourquoi ne
        pas créer une application qui répertorie les brasseries locales dans
        toute l'Europe. <br />
        <br />
        L'idée a germé et a donné naissance à Wild Beers, l'appli pour découvrir
        les richesses houblonnées de notre beau continent. Vous aimez une ou
        plusieurs brasseries ? Sélectionnez-les en favoris et retrouvez-les dans
        la page "Mes Favoris". <br />
        <br />
        En 2 clics, vous pouvez découvrir les brasseries locales de votre pays
        ou les repérer pour vos futures vacances !
      </p>
    </>
  );
}

export default NotreHistoire;
