import { useEffect, useState } from "react";
import hangman from "../../../utils/hangman.json"

function Words() {

    const [chooseletters, setChooseletters] = useState()
    const [randomWord,setRandomWords] = useState()
    
    useEffect(()=>{
        let randomNum = Math.floor(Math.random() * hangman.cities.length )
        setRandomWords(hangman.cities[randomNum])
        
    },[])
 
    function wordPage(){
        let arr = randomWord.split(",")
        console.log(arr);
    }
    
    return ( 
        <>
        <p>{randomWord}</p>
        <div>
            {hangman.letters.map((item,index)=><button key={`words${index}`}>{item}</button>)}
        </div>
        
        </>
     );
}
export default Words;
