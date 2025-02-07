import { Link } from "react-router-dom"
import { useState } from "react"
import engineerAudio from "/assets/audio/EngineerAudio.wav"

const EngineerPage = () => {
    function play(){
        new Audio(engineerAudio).play()
    }

    const [userInput, setUserInput] = useState('')
    const [display, setDisplay] = useState('')


    let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/reverseit/reversednum/${userInput}`;
    const getScout = async () => {
        const response = await fetch(FetchLink);
        const data = await response.text();
        setDisplay(data)

      };

      const displayTxt = () => {
        FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/reverseit/reversednum/${userInput}`;
        getScout()
    }
    return(
    <>
        <div className="mercBG engineerBG">
        <div className="header"><h1>Reverse It (Numerical)</h1></div>
    <img onClick={play} className="merc" id="engineer" src="../assets/characters/Engineer.png" alt="Engineer"/>
    <div className="game-box">
        <div className="flex justify-center">
            <img onClick={play} className="mobileIcon" src="../assets/charIcons/Engineer_Icon.jpg" alt="engineer"/>
        </div>
        <input onChange={(event) => setUserInput(event.target.value)} type="text" placeholder="123 = 321" id="reverseItNumericalInput" className="bg-[#f39057b3]"/>
        <div>
            <button onClick={displayTxt} className="submitBtn" id="engineerBtn">Enter</button>
        </div>
        <div className="textBox flex justify-center items-center text-xl p-2">
        {
            display.length == 0 && <h1 id="result">Howdy Partner. Could you be so kind as to give a number? Any would suffice.</h1>
        }
            <h1 id="result">{display}</h1>
        </div>
        <Link to='/'><button className="backBtn"><h1 className="text-xl">Back</h1></button></Link>
        </div>
        <div className="footer"></div>
        </div>
    </>
    )
}

export default EngineerPage