import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//Style
import "./Header.scss";

//logo
import logo2 from "../../assets/imgs/logo2.jpeg";
//flags
import itaLang from "../../assets/imgs/itaLang.png";
import ukFlag from "../../assets/imgs/ukFlag.png";

//Routes
import routes from "../../routes";

const initialStateLinks = [
  {
    text: "HOMEPAGE",
    routeLink: "HOMEPAGE",
    active: true,
  },
  {
    text: "ESCURSIONI",
    routeLink: "ESCURSIONI",
    active: false,
  },
  {
    text: "RISTORANTE",
    routeLink: "RESTAURANT",
    active: false,
  },
  {
    text: "CONTATTI",
    routeLink: "CONTATTI",
    active: false,
  },
];

const initialStateLanguages = [
  {
    id: "it",
    active: true,
    src: itaLang,
    alt: "logo italia",
  },
  {
    id: "en",
    active: false,
    src: ukFlag,
    alt: "logo regno unito",
  },
];

const Header = () => {
  const [links, setLinks] = useState(initialStateLinks);
  const [langs, setLangs] = useState(initialStateLanguages);
  const [width, setWidth] = useState(window.innerWidth);
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [inScroll, setInscroll] = useState(false);
  const [hundredScroll, setHundredScroll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    function handleResize() {
      // Set window width
      setWidth(window.innerWidth);
    }

    function handleScroll() {
      const height = window.innerHeight;
      const headerHeight = height / 10;
      const heightWithoutHeader = height - headerHeight;

      if (window.scrollY > heightWithoutHeader && !hundredScroll) {
        setHundredScroll(true);
      } else if (window.scrollY < heightWithoutHeader && hundredScroll) {
        setHundredScroll(false);
      }
      if (window.scrollY > 0 && !inScroll) {
        setInscroll(true);
      } else if (window.scrollY === 0 && inScroll) {
        setInscroll(false);
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inScroll, hundredScroll]);

  const goTo = (text, link) => () => {
    const copyLinks = [...links];
    copyLinks.map((link) => {
      if (link.text === text) {
        link.active = true;
      } else {
        link.active = false;
      }
    });
    setLinks(copyLinks);
    if (isDropdownOpened) {
      setIsDropdownOpened(false);
    }
    if (link !== "CONTATTI") {
      navigate(routes[link]);
    } else {
      const contacts = document.querySelector("#contact-us");
      contacts.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const mappingLinks = (link) => {
    return (
      <li
        onClick={goTo(link.text, link.routeLink)}
        className={link.active ? "active" : undefined}
        key={link.text}
      >
        {link.text}
      </li>
    );
  };

  const changeLang = (id) => () => {
    const copyLangs = [...langs];
    copyLangs.map((lang) => {
      if (lang.id === id) {
        lang.active = true;
      } else {
        lang.active = false;
      }
    });
    setLangs(copyLangs);
  };

  const mappingLang = (lang) => {
    return (
      <img
        onClick={changeLang(lang.id)}
        key={lang.id}
        className={!lang.active ? "lang notActive" : "lang"}
        src={lang.src}
        alt={lang.alt}
      />
    );
  };

  const setScrollClassName = () => {
    if (pathname !== "/") {
      return "inScroll hundred";
    }
    let className = undefined;
    if (inScroll) {
      className = "inScroll";
    }
    if (hundredScroll) {
      className = "inScroll hundred";
    }
    return className;
  };

  const handleHamburgerMenu = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  return (
    <>
      {width > 767 ? (
        <header className={setScrollClassName()}>
          <nav>
            <img className="logo" src={logo2} alt="logo mabrouk" />
            <ul>{links.map(mappingLinks)}</ul>
          </nav>
          <section>{langs.map(mappingLang)}</section>
        </header>
      ) : (
        <>
          <header className={setScrollClassName()}>
            <nav>
              <ion-icon
                onClick={handleHamburgerMenu}
                className="hamburger_menu"
                name="menu-outline"
              ></ion-icon>
              <section>{langs.map(mappingLang)}</section>
            </nav>
            {isDropdownOpened && (
              <section className="dropdown_menu">
                <div style={{ display: "flex" }}>
                  <div className="separator"></div>
                  <ion-icon
                    onClick={handleHamburgerMenu}
                    className="close_hamburger_menu"
                    name="close-circle-outline"
                  ></ion-icon>
                </div>
                <ul>{links.map(mappingLinks)}</ul>
              </section>
            )}
          </header>
        </>
      )}
    </>
  );
};

export default Header;
