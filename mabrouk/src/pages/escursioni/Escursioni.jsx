import { useState } from "react";

//Style
import "./Escursioni.scss";

//Components
import Container from "../../components/container/Container";

//imgs
import sunsetImg from "../../assets/imgs/sunset.jpg";
import lunchImg from "../../assets/imgs/barca.jpg";

const Escursioni = () => {
  const [activeArticle, setactiveArticle] = useState("lunch");
  const show = (par) => () => {
    if (par !== activeArticle) setactiveArticle(par);
  };

  const goToContact = () => {
    const contacts = document.querySelector("#contact-us");
    contacts.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <div
        className="exscursion_landing"
        style={
          activeArticle === "sunset"
            ? {
                backgroundImage: `url(${sunsetImg})`,
              }
            : {
                backgroundImage: `url(${lunchImg})`,
              }
        }
      >
        <div className="overlay">
          <h1>Le nostre escursioni</h1>
          <h5>A PRANZO O AL TRAMONTO , PER UN ESPERIENZA UNICA</h5>
          <nav>
            <ul>
              <li
                className={activeArticle === "lunch" ? "active" : undefined}
                onClick={show("lunch")}
              >
                Pranzo
              </li>
              <li
                className={activeArticle === "sunset" ? "active" : undefined}
                onClick={show("sunset")}
              >
                Tramonto
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container_content_excursion">
        <Container>
          <h3>Come funziona?</h3>
          <p>
            Il nostro servizio prevede un escursione guidata con il nostro
            skipper lungo la costa algherese. Compreso nel prezzo, ogni persona
            avrà due consumazioni da poter utilizzare durante la propria
            esperienza. Inoltre vi delizieremo con la nostra 'Mabrouk Poke'. Una
            Poke dai sapori mediterranei preparata dalla nostra insostituibile
            chef Antonietta!
          </p>

          <span>
            Non ti resta che scegliere quando voler prenotare la tua esperienza
            !
          </span>
          <section>
            <article className="excursion_article">
              <h3>PRANZO</h3>
              <span>Ore : 09:00 - 14:00</span>
            </article>
            <div className="separator"></div>
            <article>
              <h3>TRAMONTO</h3>
              <span>Ore : 15:00 - 21:00</span>
            </article>
          </section>
          <span>
            Per prenotare è necessario contattarci attraverso uno dei numeri
            presenti nella sezione
          </span>
          <span className="excursion_contacts" onClick={goToContact}>
            Contatti
          </span>
        </Container>
      </div>
    </>
  );
};

export default Escursioni;
