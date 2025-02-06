import { Link } from "react-router-dom"
import { useState } from "react"
import scoutAudio from "/assets/audio/ScoutAudio.wav"
const ScoutPage = () => {
    function play(){
        new Audio(scoutAudio).play()
    }

    const [userInput, setUserInput] = useState('')
    const [display, setDisplay] = useState('')


    let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/sayhello/helloworld/${userInput}`

    const getScout = async () => {
        const response = await fetch(FetchLink);
        const data = await response.text();
        setDisplay(data)

      };

      const displayTxt = () => {
          FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/sayhello/helloworld/${userInput}`
          getScout()
          console.log(display)
    }
    
    return(
    <>
        <div className="mercBG scoutBG">
  <div className="header">
    <h1>Say Hello</h1>
  </div>
  <img onClick={play} className="merc" id="scout" src="src/assets/characters/Scout.png" alt="Scout" />
  <div className="game-box">
    <div className="flex justify-center">
      <img className="mobileIcon" src="src/assets/charIcons/Scout_Icon.jpg" alt="scout"/>
    </div>
    <input type="text" onChange={(event) => setUserInput(event.target.value)} placeholder="Jeremy" id="sayHelloInput" className="bg-[#f39057b3]"
    />
    <div>
      <button onClick={displayTxt} className="submitBtn" id="scoutBtn">Enter</button>
    </div>
    <div className="textBox flex justify-center text-xl p-2">
        {
            display.length == 0 && <h1 id="Result">Yo... You're the new guy right? What's ya name pal?</h1>
        }
      <h1 id="result">{display}</h1>
    </div>
    <div>
        <Link to='/'><button className="backBtn"><h1 className="text-xl">Back</h1></button></Link>
    </div>
  </div>
</div>

    </>
    )
}

export default ScoutPage