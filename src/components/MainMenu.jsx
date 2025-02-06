import { Link } from 'react-router-dom';
import { useState } from 'react';
import soundEffect from "/public/assets/audio/Recharged.wav"

const MainMenuScreen = () => {

    function play(){
            new Audio(soundEffect).play()
        }

    const [scoutHover, setScoutHover] = useState(false);
    const [soldierHover, setSoldierHover] = useState(false);
    const [pyroHover, setPyroHover] = useState(false);
    const [demomanHover, setDemomanHover] = useState(false);
    const [heavyHover, setHeavyHover] = useState(false);
    const [engineerHover, setEngineerHover] = useState(false);
    const [medicHover, setMedicHover] = useState(false);
    const [sniperHover, setSniperHover] = useState(false);
    const [spyHover, setSpyHover] = useState(false);
    const [madLibHover, setMadLibHover] = useState(false);

    const ScoutLink = <Link to='scout'><button onMouseEnter={() => setScoutHover(true)} onMouseLeave={() => setScoutHover(false)} className="mercBtn" id="scoutBtn"><img className='emblem' src="/public/assets/emblems/Scout_emblem_RED.png" alt="Scout Emblem" /></button></Link>
    const SoldierLink = <Link to='soldier'><button className="mercBtn" onMouseEnter={() => setSoldierHover(true)} onMouseLeave={() => setSoldierHover(false)} id="soldierBtn"><img className='emblem' src="/public/assets/emblems/Soldier_emblem_RED.png" alt="Soldier Emblem" /></button></Link>
    const PyroLink = <Link to='pyro'><button className="mercBtn" onMouseEnter={() => setPyroHover(true)} onMouseLeave={() => setPyroHover(false)} id="pyroBtn"><img className='emblem' src="/public/assets/emblems/Pyro_emblem_RED.png" alt="Pyro Emblem" /></button></Link>
    const DemomanLink = <Link to='demoman'><button className="mercBtn" onMouseEnter={() => setDemomanHover(true)} onMouseLeave={() => setDemomanHover(false)} id="demomanBtn"><img className='emblem' src="/public/assets/emblems/Demoman_emblem_RED.png" alt="Demoman Emblem" /></button></Link>
    const HeavyLink = <Link to='heavy'><button className="mercBtn" onMouseEnter={() => setHeavyHover(true)} onMouseLeave={() => setHeavyHover(false)} id="heavyBtn"><img className='emblem' src="/public/assets/emblems/Heavy_emblem_RED.png" alt="Heavt Emblem" /></button></Link>
    const EngineerLink = <Link to='engineer'><button className="mercBtn" onMouseEnter={() => setEngineerHover(true)} onMouseLeave={() => setEngineerHover(false)} id="engineerBtn"><img className='emblem' src="/public/assets/emblems/Engineer_emblem_RED.png" alt="Engineer Emblem" /></button></Link>
    const MedicLink = <Link to='medic'><button className="mercBtn" onMouseEnter={() => setMedicHover(true)} onMouseLeave={() => setMedicHover(false)} id="medicBtn"><img className='emblem' src="/public/assets/emblems/Medic_emblem_RED.png" alt="Medic Emblem" /></button></Link>
    const SniperLink = <Link to='sniper'><button className="mercBtn" onMouseEnter={() => setSniperHover(true)} onMouseLeave={() => setSniperHover(false)} id="sniperBtn"><img className='emblem' src="/public/assets/emblems/Sniper_emblem_RED.png" alt="Sniper Emblem" /></button></Link>
    const SpyLink = <Link to='spy'><button className="mercBtn" onMouseEnter={() => setSpyHover(true)} onMouseLeave={() => setSpyHover(false)} id="spyBtn"><img className='emblem' src="/public/assets/emblems/Spy_emblem_RED.png" alt="Spy Emblem" /></button>                        </Link>
    return(
        <>
        <div className='contrackerGrid'>
                        <div className="buttonGrid grid-cols-3">
                        {ScoutLink}
                        {SoldierLink}
                        {PyroLink}
                        {DemomanLink}
                        {HeavyLink}
                        {EngineerLink}
                        {MedicLink}
                        {SniperLink}
                        {SpyLink}
                        <Link to='madlib' onMouseEnter={() => setMadLibHover(true)} onMouseLeave={() => setMadLibHover(false)} className="briefing"><button id="briefingBtn"><h2>Mission Briefing</h2></button></Link>
                        </div>
                            {scoutHover ? <div className="infoBox"><img className="mercIcon" id="mercIcon" src="/public/assets/charIcons/Scout_Icon.jpg" alt="scoutTest"/>
                            <h3 id="job" className="job">Rapid Recovery</h3>
                            <div className="activity"><h3 id="activity">Say Hello</h3></div>
                            </div>
                            :
                            soldierHover ? <div className="infoBox"><img className="mercIcon" id="mercIcon" src="/public/assets/charIcons/Soldier_Icon.jpg" alt="scoutTest"/>
                            <h3 id="job" className="job">Rapid Recovery</h3>
                            <div className="activity"><h3 id="activity">Say Hello</h3></div>
                            </div>
                            :
                            soldierHover ? <div className="infoBox"><img className="mercIcon" id="mercIcon" src="/public/assets/charIcons/Soldier_Icon.jpg" alt="scoutTest"/>
                            <h3 id="job" className="job">Shock & Awe</h3>
                            <div className="activity"><h3 id="activity">Add Two Numbers</h3></div>
                            </div>
                            :
                            pyroHover ? <div className="infoBox"><img className="mercIcon" id="mercIcon" src="/public/assets/charIcons/Pyro_Icon.jpg" alt="scoutTest"/>
                            <h3 id="job" className="job">Pyrotechnics</h3>
                            <div className="activity"><h3 id="activity">Magic 8 Ball</h3></div>
                            </div>
                            :
                            demomanHover ? <div className="infoBox"><img className="mercIcon" id="mercIcon" src="/public/assets/charIcons/Demoman_Icon.jpg" alt="scoutTest"/>
                            <h3 id="job" className="job">House Cleaning</h3>
                            <div className="activity"><h3 id="activity">Reverse It (Alphanumerical)</h3></div>
                            </div>
                            :
                            heavyHover ? <div className="infoBox"><img className="mercIcon" id="mercIcon" src="/public/assets/charIcons/Heavy_Icon.jpg" alt="scoutTest"/>
                            <h3 id="job" className="job">Mow Down</h3>
                            <div className="activity"><h3 id="activity">Greater Than or Less Than</h3></div>
                            </div>
                            :
                            engineerHover ? <div className="infoBox"><img className="mercIcon" id="mercIcon" src="/public/assets/charIcons/Engineer_Icon.jpg" alt="scoutTest"/>
                            <h3 id="job" className="job">Area Denial</h3>
                            <div className="activity"><h3 id="activity">Reverse It (Numerical-Only)</h3></div>
                            </div>
                            :
                            medicHover ? <div className="infoBox"><img className="mercIcon" id="mercIcon" src="/public/assets/charIcons/Medic_Icon.jpg" alt="scoutTest"/>
                            <h3 id="job" className="job">Doctor Assisted Homicide</h3>
                            <div className="activity"><h3 id="activity">Asking Questions</h3></div>
                            </div>
                            :
                            sniperHover ? <div className="infoBox"><img className="mercIcon" id="mercIcon" src="/public/assets/charIcons/Sniper_Icon.jpg" alt="scoutTest"/>
                            <h3 id="job" className="job">Precision Elimination</h3>
                            <div className="activity"><h3 id="activity">Odd or Even</h3></div>
                            </div>
                            :
                            spyHover ? <div className="infoBox"><img className="mercIcon" id="mercIcon" src="/public/assets/charIcons/Spy_Icon.jpg" alt="scoutTest"/>
                            <h3 id="job" className="job">Uncloak & Dagger</h3>
                            <div className="activity"><h3 id="activity">Restaruant Picker</h3></div>
                            </div>
                            :
                            madLibHover ? <div className="infoBox"><img className="mercIcon" id="mercIcon" src="/public/assets/Team_Fortress_2_style_logo.png" alt="scoutTest"/>
                            <h3 id="job" className="job">Reliable Excavation Demolition</h3>
                            <div className="activity"><h3 id="activity">MadLib</h3></div>
                            </div>
                            :
                            <div className="infoBox">
                            <img className="mercIcon" id="mercIcon" src="/public/assets/Team_Fortress_2_style_logo.png" alt="Icon"></img>
                            <h3 id="job" className="job"></h3>
                            <div className="activity"><h3 id="activity"></h3></div>
                            </div>}
                            
        </div>
        </>
    )
}

export default MainMenuScreen