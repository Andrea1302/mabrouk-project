//Style
import { useNavigate } from "react-router-dom";
import "./Card.scss";

const Card = ({ product }) => {
  const navigate = useNavigate();

  const goTo = (product) => () => {
    navigate(product?.link);
  };
  return (
    <article className="card">
      <img className="card_img" src={product.src} alt={product.alt} />
      <div className="container_description">
        <div>
          <div className="title">{product.title}</div>
          <p>{product.description}</p>
        </div>

        <div onClick={goTo(product)} className="discover_btn">
          <span>SCOPRI DI PIù</span>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </div>
    </article>
  );
};

export default Card;
