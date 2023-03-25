import { useState } from "react";

//Style
import "./Restaurant.scss";

//Components
import Container from "../../components/container/Container";
import Story from "./story/Story";
import Menu from "./menu/Menu";

const Restaurant = () => {
  const [activeSection, setActiveSection] = useState("story");

  const handleSection = (par) => () => {
    setActiveSection(par);
  };
  return (
    <Container>
      <div className="restaurant-container">
        <nav>
          <ul>
            <li
              onClick={handleSection("story")}
              className={activeSection === "story" ? "active first" : "first"}
            >
              LA NOSTRA STORIA
            </li>
            <li
              onClick={handleSection("menu")}
              className={activeSection !== "story" ? "active second" : "second"}
            >
              IL NOSTRO MENU
            </li>
          </ul>
        </nav>
        {activeSection === "story" ? <Story /> : <Menu />}
      </div>
    </Container>
  );
};

export default Restaurant;
