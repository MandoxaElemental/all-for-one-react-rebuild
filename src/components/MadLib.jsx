import { Link } from "react-router-dom"
import { useState } from "react"
import Popover from "./Popover.jsx"

const MadLibPage = () => {

    const [color, setColorInput] = useState('')
    const [pluralNoun1, setPluralNoun1Input] = useState('')
    const [place, setPlaceInput] = useState('')
    const [verb1, setVerb1Input] = useState('')
    const [verb2, setVerb2Input] = useState('')
    const [noun1, setNoun1Input] = useState('')
    const [adjective1, setAdjective1Input] = useState('')
    const [pluralObject, setPluralObjectInput] = useState('')
    const [noun2, setNoun2Input] = useState('')
    const [verb3, setVerb3Input] = useState('')
    const [pluralNoun2, setPluralNoun2Input] = useState('')
    const [adjective2, setAdjective2Input] = useState('')
    const [pluralNoun3, setPluralNoun3Input] = useState('')
    const [adverb1, setAdverb1Input] = useState('')
    const [verb4, setVerb4Input] = useState('')
    const [adverb2, setAdverb2Input] = useState('')

    const [display, setDisplay] = useState('')

    let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/madlib/madlib/${color}/${pluralNoun1}/${place}/${verb1}/${verb2}/${noun1}/${adjective1}/${pluralObject}/${noun2}/${verb3}/${pluralNoun2}/${adjective2}/${pluralNoun3}/${adverb1}/${verb4}/${adverb2}`;

    const getMadLib = async () => {
        const response = await fetch(FetchLink);
        const data = await response.text();
        setDisplay(data)

      };

      const displayTxt = () => {
        FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/madlib/madlib/${color}/${pluralNoun1}/${place}/${verb1}/${verb2}/${noun1}/${adjective1}/${pluralObject}/${noun2}/${verb3}/${pluralNoun2}/${adjective2}/${pluralNoun3}/${adverb1}/${verb4}/${adverb2}`;
        getMadLib()
          console.log(display)
    }


    return(
    <>
    <div className="flex justify-center">
    </div>
        <div className='flex justify-center'>
        <div className='contracker'>
        <div>
        <div className="title">
            <h1 className="text-xl">Mission Briefing</h1>
            <h2>(MadLib)</h2>
        </div>
    <div className="mobileMadlib">
        <div className="contrackerInner grid md:grid-cols-2 grid-cols-1 pt-5">
            <div className="madlibGrid grid md:grid-cols-2 gap-2 text-sm mr-[50px]">
                <input className="madLibInput bg-[#f39057b3]" onChange={(event) => setColorInput(event.target.value)} placeholder="Color" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" onChange={(event) => setPluralNoun1Input(event.target.value)} placeholder="Plural Noun" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" onChange={(event) => setPlaceInput(event.target.value)} placeholder="Place" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" onChange={(event) => setVerb1Input(event.target.value)} placeholder="Verb" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" onChange={(event) => setVerb2Input(event.target.value)} placeholder="Verb" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" onChange={(event) => setNoun1Input(event.target.value)} placeholder="Noun" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" onChange={(event) => setAdjective1Input(event.target.value)} placeholder="Adjective" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" onChange={(event) => setPluralObjectInput(event.target.value)} placeholder="Plural Object" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" onChange={(event) => setNoun2Input(event.target.value)} placeholder="Noun" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" onChange={(event) => setVerb3Input(event.target.value)} placeholder="Verb" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" onChange={(event) => setPluralNoun2Input(event.target.value)} placeholder="Plural Noun" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" onChange={(event) => setAdjective2Input(event.target.value)} placeholder="Adjective" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" onChange={(event) => setPluralNoun3Input(event.target.value)} placeholder="Plural Noun" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" onChange={(event) => setAdverb1Input(event.target.value)} placeholder="Adverb" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" onChange={(event) => setVerb4Input(event.target.value)} placeholder="Verb" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" onChange={(event) => setAdverb2Input(event.target.value)} placeholder="Adverb" type="text"/>
            </div>
            <div className="text-center">
            <div className="madlibBtns grid grid-cols-2 md:grid-cols-1"> 
            <div>
            <Popover content={(
                <div id="resultBox">
                {
                    display.length == 0 && <h1 id="Result">Some Entries Appear to be Missing</h1>
                }
                <div>
                <p>{display}</p>
                </div>
                    
                </div>
                )}>
                <button className="backBtn" onClick={displayTxt} id="madlibBtn" popovertarget="resultBox"><h1 className="text-xl">GO</h1></button>
            </Popover>
            </div>
            <div>
                <Link to='/'><button className="backBtn"><h1 className="text-xl">Back</h1></button></Link>
            </div>
            </div>
            </div>
        </div>
    </div>
        </div>
        </div>
        </div>
    </>
    )
}

export default MadLibPage