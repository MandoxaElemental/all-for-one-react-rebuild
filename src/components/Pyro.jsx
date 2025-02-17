import { Link } from "react-router-dom"
import { useState } from "react"
import pyroAudio from "/assets/audio/PyroAudio.wav"
import pyroLandAudio from "/assets/audio/Taunt_pyro_balloonicorn.wav"

const PyroPage = () => {

    function play(){
        new Audio(pyroAudio).play()
    }
    function pyroLand(){
        new Audio(pyroLandAudio).play()
    }

    const [userInput, setUserInput] = useState('')
    const [display, setDisplay] = useState('')


    let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/magic8ball/magic8ball/${userInput}`;

    const getPyro = async () => {
        const response = await fetch(FetchLink);
        const data = await response.text();
        setDisplay(data)

      };

      const displayTxt = () => {
        FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/magic8ball/magic8ball/${userInput}`;
        getPyro()
    }

    return(
    <>
        <div className="mercBG pyroBG">
            <div className="header">
        <h1 className="activity">Magic 8 Ball</h1>
        <img onClick={pyroLand} id="goggles" src="../assets/Goggles.png" alt="goggles" /></div>
    <img onClick={play} className="merc" id="pyro" src="../assets/characters/Pyro.png" alt="Pyro" />
    <div className="game-box">
        <div className="flex justify-center">
            <img onClick={play} className="mobileIcon" src="../assets/charIcons/Pyro_Icon.jpg" alt="pyro" />
        </div>
        <input onChange={(event) => setUserInput(event.target.value)} type="text" id="magic8BallInput" className="bg-[#f39057b3]"/>
        <div>
            <button onClick={displayTxt} className="submitBtn" id="pyroBtn">Enter</button>
        </div>
        <div className="textBox flex justify-center items-center text-xl p-2">
        {
            display.length == 0 && <h1 id="result">... <br/> (Try asking him a question)</h1>
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

export default PyroPage