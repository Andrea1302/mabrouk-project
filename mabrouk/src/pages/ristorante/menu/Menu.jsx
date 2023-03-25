//Style
import "./Menu.scss";
import "../Restaurant.scss";

//articles
import { articles } from "./articles";

const Menu = () => {
  const mappingArticle = (article, index) => {
    const mappingServices = (service, i) => {
      return <li key={i}>{service}</li>;
    };
    return (
      <article
        className="card_menu"
        key={article.id}
        style={
          index === 0
            ? { paddingTop: 0 }
            : index % 2 !== 0
            ? { flexDirection: "row-reverse" }
            : undefined
        }
      >
        <div className="detail_menu">
          <h3 style={{ textTransform: "uppercase" }}>{article.title}</h3>

          <ul className="services_ul">
            {article.services.map(mappingServices)}
          </ul>
          <div className="tot_menu">
            <span>TOTALE</span>
            <span>{article.tot} €</span>
          </div>
        </div>
        <img className="default_img" src={article.src} alt={article.alt} />
      </article>
    );
  };
  return (
    <section className="menu_wrapper">
      <h2>Le nostre proposte</h2>
      <h5>
        Il nostro ristorante offre un menù fisso, si tratta di una combinazione
        e sapori del nostro mare.
      </h5>
      <h6>*In tutti i menù sono inclusi acqua e vino della casa</h6>
      <div className="container_card_menu">{articles.map(mappingArticle)}</div>
      <p className="disclaimer">Solo con prenotazione</p>
      <p className="disclaimer_scelta_menu">
        La scelta del menù deve coincidere tra tutti i commensali del tavolo,
        per qualsiasi altra richiesta si è pregati di informare con anticipo
      </p>
    </section>
  );
};

export default Menu;
