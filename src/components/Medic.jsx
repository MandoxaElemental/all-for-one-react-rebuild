import { Link } from "react-router-dom"
import { useState } from "react"
import medicAudio from "/assets/audio/MedicAudio.mp3"

const MedicPage = () => {

    function play(){
        new Audio(medicAudio).play()
        }
    
        const [userInput, setUserInput] = useState('')
        const [userInput2, setUserInput2] = useState('')
        const [display, setDisplay] = useState('')
    
    
        let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/askingquestions/askingquestions/${userInput}/${userInput2}`
    
        const getMedic = async () => {
            const response = await fetch(FetchLink);
            const data = await response.text();
            setDisplay(data)
    
          };
    
          const displayTxt = () => {
            let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/askingquestions/askingquestions/${userInput}/${userInput2}`
            getMedic()
        }
    
    return(
    <>
        <div className="mercBG medicBG">
        <div className="header"><h1>Asking Questions</h1></div>
    <img onClick={play} className="merc" id="medic" src="../assets/characters/Medic.png" alt="Medic" />
    <div className="game-box">
        <div className="flex justify-center">
            <img className="mobileIcon" src="../assets/charIcons/Medic_Icon.jpg" alt="demoman" />
        </div>
        <input onChange={(event) => setUserInput(event.target.value)} type="text" placeholder="ex.(herbert)" id="askingQuestions1Input" className="bg-[#f39057b3]" />
        <input onChange={(event) => setUserInput2(event.target.value)} type="text" placeholder="1-12" id="askingQuestions2Input" className="bg-[#f39057b3]" />
        <div>
            <button onClick={displayTxt} className="submitBtn" id="medicBtn">Enter</button>
        </div>
        <div className="textBox flex justify-center text-xl p-2">
        {
            display.length == 0 && <h1 id="result">Velcome mein Friend, you here to zchedule your appointment, ja?</h1>
        }
            <h1 id="result">{display}</h1>
            </div>
            <Link to='/'><button className="backBtn"><h1 className="text-xl">Back</h1></button></Link>
            </div>
        </div>
    </>
    )
}

export default MedicPage