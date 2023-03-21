//Style
import "./Discover.scss";

//imgs
import restaurant from "../../assets/imgs/Ristorante.jpg";
import boat from "../../assets/imgs/barca.jpeg";

//Component
import Card from "../card/Card";

//Routes
import routes from "../../routes";

const cards = [
  {
    id: 1,
    src: restaurant,
    alt: "restaurant-img",
    title: "IL RISTORANTE",
    link: routes.RESTAURANT,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ducimus laboriosam necessitatibus, molestiae magnam suscipit sed delectus amet voluptate omnis, sint corrupti similique, consequuntur blanditiis. Eum, officia? Nesciunt, quas modi.",
  },
  {
    id: 2,
    src: boat,
    alt: "barca-img",
    title: "LE NOSTRE ESCURSIONI",
    link: routes.ESCURSIONI,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ducimus laboriosam necessitatibus, molestiae magnam suscipit sed delectus amet voluptate omnis, sint corrupti similique, consequuntur blanditiis. Eum, officia? Nesciunt, quas modi.",
  },
];

const Discover = () => {
  const mappingCard = (card) => {
    return <Card key={card.id} product={card} />;
  };
  return (
    <>
      <div className="container_discover">
        <h2>Due servizi diversi, stessa qualità!</h2>
        <h6>Scopri di più sul nostro ristorante e sulle nostre escursioni</h6>
        <section className="discover_more">{cards.map(mappingCard)}</section>
      </div>
    </>
  );
};

export default Discover;
