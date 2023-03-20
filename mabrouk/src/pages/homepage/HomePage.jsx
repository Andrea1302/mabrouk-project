import Slogan from "../../components/slogan/Slogan";

import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <section className="homepage_first_section">
        <div className="overlay">
          <Slogan />
        </div>
      </section>
      <section style={{ background: "#F5F5F5", height: "100vh" }}></section>
    </>
  );
};

export default HomePage;
