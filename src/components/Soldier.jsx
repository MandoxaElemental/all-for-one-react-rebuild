import { Link } from "react-router-dom";
import { useState } from "react"
import soldierAudio from "/assets/audio/SoldierAudio.wav"



const SoldierPage = () => {

      function play(){
          new Audio(soldierAudio).play()
      }

  const [userInput, setUserInput] = useState('')
  const [userInput2, setUserInput2] = useState('')
  const [display, setDisplay] = useState('')

  let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/addtwonumbers/addtwonumbers/0/0`;
  const getSoldier = async () => {
    const response = await fetch(FetchLink);
    const data = await response.text();
    setDisplay(data)

  };

  const displayTxt = () => {
      FetchLink = ('https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/addtwonumbers/addtwonumbers/' + userInput + "/" + userInput2)
      getSoldier()
}
    
  return (
    <>
      <div className="mercBG soldierBG">
        <div className="header">
          <h1>Add Two Numbers</h1>
        </div>
        <img
        onClick={play}
          className="merc"
          id="soldier"
          src="../assets/characters/Soldier.png"
          alt="Soldier"
        />
        <div className="game-box">
          <div className="flex justify-center">
            <img
              className="mobileIcon"
              src="../assets/charIcons/Soldier_Icon.jpg"
              alt="soldier"
            />
          </div>
          <input
            onChange={(event) => setUserInput(event.target.value)}
            type="text"
            placeholder="ex. 23"
            id="addTwo1Input"
            className="bg-[#f39057b3]"
          />
          <input
            onChange={(event) => setUserInput2(event.target.value)}
            type="text"
            placeholder="ex. 32"
            id="addTwo1Input"
            className="bg-[#f39057b3]"
          />
          <div>
            <button onClick={displayTxt} id="soldierBtn" className="submitBtn">
              Enter
            </button>
          </div>
          <div className="textBox flex justify-center text-xl p-2">
          {
            display.length == 0 && <h1 id="result">Listen up Maggot, give me two numbers so that I can show you how smart I truly am...</h1>

        }
            <h1 id="result">
              {display}
            </h1>
          </div>
          <div>
            <Link to="/">
              <button className="backBtn">
                <h1 className="text-xl">Back</h1>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoldierPage;
