import { useState } from "react";
import HangmanPic from "./HangmanPic";
import Words from "./Words";


function HomePage() {

  const [health,sethealth] = useState(9)
  // const [win,setWin] = useState(0)
 const [showLetter,setShowLetter] = useState(false)
  

  return (
    <>
   
      <HangmanPic health = {health}  />
      <Words health = {{health,sethealth}} showLetters = {{showLetter,setShowLetter}}/>
    </>
  );
}

export default HomePage;
