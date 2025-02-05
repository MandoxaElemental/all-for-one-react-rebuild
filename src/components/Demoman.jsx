import { Link } from "react-router-dom"
import { useState } from "react"
import demomanAudio from "/src/assets/audio/DemomanAudio.wav"
const DemomanPage = () => {

    function play(){
        new Audio(demomanAudio).play()
    }

        const [userInput, setUserInput] = useState('')
        const [display, setDisplay] = useState('')
        let FetchLink = ('https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/reverseit/reversedword/' + userInput)

        const getDemoman = async () => {
            const response = await fetch(FetchLink);
            const data = await response.text();
            setDisplay(data)
    
          };
    
          const displayTxt = () => {
              FetchLink = ('https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/reverseit/reversedword/' + userInput)
              getDemoman()
              setDisplay()
        }
    
    return(
    <>
    <div className="mercBG demomanBG">
    <div className="header flex justify-center text-center"><h1>Reverse It (Alphanumerical)</h1></div>
    <img onClick={play} className="merc" id="demoman" src="/src/assets/characters/Demoman.png" alt="Demoman"/>
        <div className="game-box">
        <div className="flex justify-center">
            <img className="mobileIcon" src="/src/assets/charIcons/Demoman_Icon.jpg" alt="demoman" />
        </div>
        <input type="text" onChange={(event) => setUserInput(event.target.value)} placeholder="Scrumpy = ypmurcS" id="reverseItAlphaInput" className="bg-[#f39057b3]"/>
        <div>
            <button onClick={displayTxt} className="submitBtn" id="demomanBtn">Enter</button>
        </div>
        <div className="textBox flex justify-center text-xl p-2">
            <h1 id="result">{display}</h1>
        </div>
            <Link to='/'><button className="backBtn"><h1 className="text-xl">Back</h1></button></Link>
        </div>
    </div>
    </>
    )
}

export default DemomanPage