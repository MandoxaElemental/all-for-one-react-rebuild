import { Link } from "react-router-dom"
import { useState } from "react"
import sniperAudio from "/src/assets/audio/SniperAudio.wav"

const SniperPage = () => {
    function play(){
            new Audio(sniperAudio).play()
        }
    
        const [userInput, setUserInput] = useState('')
        const [display, setDisplay] = useState('')
    
    
        let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/oddoreven/oddoreven/${userInput}`;
    
        const getSniper = async () => {
            const response = await fetch(FetchLink);
            const data = await response.text();
            setDisplay(data)
    
          };
    
          const displayTxt = () => {
            let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/oddoreven/oddoreven/${userInput}`;
            getSniper()
        }
    return(
    <>
        <div className="mercBG sniperBG">
        <div class="header"><h1>Odd or Even</h1></div>
            <img onClick={play} class="merc" id="sniper" src="/src/assets/characters/Sniper.png" alt="Sniper" />
            <div class="game-box">
                <div class="flex justify-center">
                    <img class="mobileIcon" src="/src/assets/charIcons/Sniper_Icon.jpg" alt="sniper" />
                </div>
                <input onChange={(event) => setUserInput(event.target.value)} type="text" placeholder="ex. 7" id="oddOrEvenInput" className="bg-[#f39057b3]" />
                <div>
                    <button onClick={displayTxt} class="submitBtn" id="sniperBtn">Enter</button>
                </div>
                <div class="textBox flex justify-center text-xl p-2">
                {
            display.length == 0 && <h1 id="result">G'day mate, could you assist me in providing me a numbah'...</h1>
        }
                    <h1 id="result">{display}</h1>
                </div>
                    <Link to='/'><button className="backBtn"><h1 className="text-xl">Back</h1></button></Link>
            </div>
        </div>
    </>
    )
}

export default SniperPage