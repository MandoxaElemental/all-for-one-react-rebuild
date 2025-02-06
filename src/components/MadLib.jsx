import { Link } from "react-router-dom"

const MadLibPage = () => {
    return(
    <>
    <div className="flex justify-center">
    <div popover id="resultBox">
    <p id="result"></p>
    </div>
    </div>
        <div className='flex justify-center'>
        <div className='contracker'>
        <div className="title">
    <h1 className="text-xl">Mission Briefing</h1>
    <h2>(MadLib)</h2>
    </div>
    <div className="mobileMadlib">
        <div className="contrackerInner grid lg:grid-cols-2 grid-cols-1">
            <div className="madlibGrid grid lg:grid-cols-2 gap-2 text-sm mr-[50px]">
                <input className="madLibInput bg-[#f39057b3]" id="colorInput" placeholder="Color" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" id="pluralNoun1Input" placeholder="Plural Noun" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" id="placeInput" placeholder="Place" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" id="verb1Input" placeholder="Verb" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" id="verb2Input" placeholder="Verb" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" id="noun1Input" placeholder="Noun" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" id="adjective1Input" placeholder="Adjective" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" id="pluralObjectInput" placeholder="Plural Object" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" id="noun2Input" placeholder="Noun" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" id="verb3Input" placeholder="Verb" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" id="pluralNoun2Input" placeholder="Plural Noun" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" id="adjective2Input" placeholder="Adjective" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" id="pluralNoun3Input" placeholder="Plural Noun" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" id="adverb1Input" placeholder="Adverb" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" id="verb4Input" placeholder="Verb" type="text"/>
                <input className="madLibInput bg-[#f39057b3]" id="adverb2Input" placeholder="Adverb" type="text"/>
            </div>
            <div className="madlibBtns grid grid-cols-2 lg:grid-cols-1"> 
            <div>
                <button className="backBtn" id="madlibBtn" popovertarget="resultBox"><h1 className="text-xl">GO</h1></button>
            </div>
            <div>
                <Link to='/'><button className="backBtn"><h1 className="text-xl">Back</h1></button></Link>
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