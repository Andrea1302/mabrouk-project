import React, { useEffect, useState } from "react";

//Style
import "./Header.scss";

//logo
import logo2 from "../../assets/imgs/logo2.jpeg";
import itaLang from "../../assets/imgs/itaLang.png";
import ukFlag from "../../assets/imgs/ukFlag.png";

import { useNavigate } from "react-router-dom";

const initialStateLinks = [
  {
    text: "HOMEPAGE",
    active: true,
  },
  {
    text: "ESCURSIONI",
    active: false,
  },
  {
    text: "RISTORANTE",
    active: false,
  },
  {
    text: "CONATTI",
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

  const goTo = (text) => () => {
    const copyLinks = [...links];
    copyLinks.map((link) => {
      if (link.text === text) {
        link.active = true;
      } else {
        link.active = false;
      }
    });
    setLinks(copyLinks);
  };

  const mappingLinks = (link) => {
    return (
      <li
        onClick={goTo(link.text)}
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
    let className = undefined;
    if (inScroll) {
      className = "inScroll";
    }
    if (hundredScroll) {
      className = "inScroll hundred";
    }
    return className;
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
              {isDropdownOpened && <ul>{links.map(mappingLinks)}</ul>}
              <ion-icon
                className="hamburger_menu"
                name="menu-outline"
              ></ion-icon>
              <section>{langs.map(mappingLang)}</section>
            </nav>
          </header>
        </>
      )}
    </>
  );
};

export default Header;
