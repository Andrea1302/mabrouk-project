import { useState, useEffect } from "react";
import "./Slogan.css";

const changeActivePhrase = (sentences, index) => {
  const copySentences = [...sentences];
  copySentences.forEach((frase, i) => {
    if (i === index) {
      frase.active = true;
    } else {
      frase.active = false;
    }
  });
  return copySentences;
};

function Slogan() {
  const [sentences, setSentences] = useState([
    { text: "SOLO PESCE", active: true },
    { text: "SOLO FRESCO", active: false },
    { text: "SOLO LA SERA", active: false },
    { text: "MABROUK", active: false },
  ]);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      const newsentences = changeActivePhrase(sentences, 1);
      setSentences(newsentences);
    }, 1200); // visualizza la frase "Solo fresco" dopo 2 secondi

    const timeout2 = setTimeout(() => {
      const newsentences = changeActivePhrase(sentences, 2);
      setSentences(newsentences);
    }, 2400);

    const timeout3 = setTimeout(() => {
      const newsentences = changeActivePhrase(sentences, 3);
      setSentences(newsentences);
    }, 3600);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  const mappingFrasi = (sentence, index) => {
    if (sentence.active) {
      return (
        <div
          key={sentence.text}
          className={
            index === sentences.length - 1 ? "sentence last" : "sentence"
          }
        >
          {sentence.text}
        </div>
      );
    }
  };

  return <>{sentences.map(mappingFrasi)}</>;
}

export default Slogan;
