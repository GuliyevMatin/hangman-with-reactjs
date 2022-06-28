import { useEffect, useState } from "react";
import hangman from "../../../utils/hangman.json";
import HomeCss from "../../../style/home.module.css";
const Words = ({ health, showLetters }) => {
  const [word, setWord] = useState("");
  const [chooseLetter, setchooseLetter] = useState([]);
  const [clicked, setClicked] = useState(false);
  const changeWord = () => {
    setClicked(true);
    health.sethealth(9);
    showLetters.setShowLetter(false);
    let randomNum = Math.floor(Math.random() * hangman.cities.length);
    return setWord(hangman.cities[randomNum]);
  };
  useEffect(() => {
    if (word?.indexOf(" ") !== -1) {
      let spaceWord = word?.split(" ");
      let newWord = spaceWord.map((item) => "_".repeat(item.length));
      setchooseLetter(newWord.join(" "));
    } else {
      let underLine = "_";
      setchooseLetter(`${underLine.repeat(word.length)}`);
    }
  }, [word]);

  const btnClick = (e) => {
    let result = [];
    let str = chooseLetter;
    if (word.indexOf(e.target.innerHTML) !== -1) {
      for (let i = 0; i < word.length; i++) {
        if (e.target.innerHTML === word[i]) {
          result.push(i);
        }
      }

      str = str.split("");
      for (const item of result) {
        str[item] = e.target.innerHTML;
      }
      str = str.join("");
      setchooseLetter(str);
    } else {
      health.sethealth((prev) => prev - 1);
    }

    verifyWords(str);
  };

  const verifyWords = (item) => {
    if (item === word) {
      showLetters.setShowLetter(true);
    }
  };

  return (
    <div className={`${HomeCss.BodyGame}`}>
      <p>{chooseLetter}</p>
      <p>{showLetters.showLetter && chooseLetter === word && "Qalib"}</p>
      <div className={`${HomeCss.BodyGameBtnParent}`}>
        {health.health !== 0
          ? hangman.letters.map((item, index) => (
              <button
                className={`${HomeCss.BodyGameBtn}`}
                disabled={!clicked || (chooseLetter === word && true)}
                onClick={(e) => btnClick(e)}
                key={index}
              >
                {item}
              </button>
            ))
          : `Meglub Oldunuz . Lazim olan soz ${word}`}
      </div>
      {!clicked && (
        <h2>
          <span>I</span>t's time to<span>deal with tom</span>{" "}
        </h2>
      )}
      <button className="btn btn-primary mt-1" onClick={changeWord}>
        Yeni oyun
      </button>
    </div>
  );
};
export default Words;
