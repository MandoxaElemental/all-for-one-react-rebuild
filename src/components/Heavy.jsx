import { Link } from "react-router-dom"
import { useState } from "react"
import heavyAudio from "/assets/audio/HeavyAudio.wav"

const HeavyPage = () => {

    function play(){
        new Audio(heavyAudio).play()
        }
    
        const [userInput, setUserInput] = useState('')
        const [userInput2, setUserInput2] = useState('')
        const [display, setDisplay] = useState('')
    
    
        let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/greaterthan/greaterthan/${userInput}/${userInput2}`
    
        const getHeavy = async () => {
            const response = await fetch(FetchLink);
            const data = await response.text();
            setDisplay(data)
    
          };
    
          const displayTxt = () => {
            FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/greaterthan/greaterthan/${userInput}/${userInput2}`
            getHeavy()
        }
    
    return(
    <>
        <div className="mercBG heavyBG">
        <div className="header"><h1>Greater Than or Less Than</h1></div>
    <img onClick={play} className="merc" id="heavy" src="../assets/characters/Heavy.png" alt="Heavy" />
    <div className="game-box">
        <div className="flex justify-center">
            <img onClick={play} className="mobileIcon" src="../assets/charIcons/Heavy_Icon.jpg" alt="heavy" />
        </div>
        <input onChange={(event) => setUserInput(event.target.value)} type="text" placeholder="00" id="greaterThanInput1" className="bg-[#f39057b3]" />
        <input onChange={(event) => setUserInput2(event.target.value)} type="text" placeholder="00" id="greaterThanInput2" className="bg-[#f39057b3]" />
        <div>
            <button onClick={displayTxt} className="submitBtn" id="heavyBtn" >Enter</button>
        </div>
        <div className="textBox flex justify-center text-xl p-2">
        {
            display.length == 0 && <h1 id="result">I am Heavy Weapons Guy. <br/> Give me two numbers to compare...</h1>
        }
            <h1 id="result">{display}</h1>
        </div>
        <Link to='/'><button className="backBtn"><h1 className="text-xl">Back</h1></button></Link>
    </div>
    </div>
    </>
    )
}

export default HeavyPage