import { Link } from "react-router-dom"
import { useState } from "react"
import spyAudio from "/public/assets/audio/SpyAudio.wav"

const SpyPage = () => {
    function play(){
            new Audio(spyAudio).play()
        }

    const [display, setDisplay] = useState('')
    let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/restaurantpicker/restaurantpicker/`;

    function FrenchBtn(){
        FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/restaurantpicker/restaurantpicker/french`;
        displayTxt()
    }
    function BurgerBtn(){
        FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/restaurantpicker/restaurantpicker/burger`;
        displayTxt()
    }
    function TacoBtn(){
        FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/restaurantpicker/restaurantpicker/tacos`;
        displayTxt()
    }
    function ChickenBtn(){
        FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/restaurantpicker/restaurantpicker/chicken`;
        displayTxt()
    }
    function PizzaBtn(){
        FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/restaurantpicker/restaurantpicker/pizza`;
        displayTxt()
    }
    function OtherBtn(){
        FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/restaurantpicker/restaurantpicker/other`;
        displayTxt()
    }

    const getSpy = async () => {
        const response = await fetch(FetchLink);
        const data = await response.text();
        setDisplay(data)

      };

      const displayTxt = () => {
          getSpy()
    }
    
    return(
    <>
        <div className="mercBG spyBG">
        <div className="header"><h1>Restaurant Picker</h1></div>
    <img onClick={play} className="merc" id="spy" src="../public/assets/characters/Spy.png" alt="Spy" />
    <div className="game-box">
        <div className="flex justify-center">
            <img className="mobileIcon" src="./" alt="spy" />
        </div>
        <section className="grid grid-cols-2 gap-2">
            <button onClick={FrenchBtn} id="french" className="submitBtn">French</button>
            <button onClick={BurgerBtn} id="burger" className="submitBtn">Burger</button>
            <button onClick={TacoBtn} id="taco" className="submitBtn">Taco</button>
            <button onClick={ChickenBtn} id="chicken" className="submitBtn">Chicken</button>
            <button onClick={PizzaBtn} id="pizza" className="submitBtn">Pizza</button>
            <button onClick={OtherBtn} id="other" className="submitBtn">Other</button>
        </section>
            <div className="textBox flex justify-center text-xl p-2">
            {
            display.length == 0 && <h1 id="result">If you are interested in some of the finest French Cuisine (or any other lesser meals) feel free to ask...</h1>

            }
                <h1 id="result">{display}</h1>
            </div>
            <Link to='/'><button className="backBtn"><h1 className="text-xl">Back</h1></button></Link>
        </div>
    </div>
    </>
    )
}

export default SpyPage