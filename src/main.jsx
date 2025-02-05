import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ScoutPage from './components/Scout.jsx'
import SoldierPage from './components/Soldier.jsx'
import MainMenuScreen from './components/MainMenu.jsx'
import PyroPage from './components/Pyro.jsx'
import DemomanPage from './components/Demoman.jsx'
import EngineerPage from './components/Engineer.jsx'
import HeavyPage from './components/Heavy.jsx'
import MedicPage from './components/Medic.jsx'
import SniperPage from './components/Sniper.jsx'
import SpyPage from './components/Spy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='scout' element={<ScoutPage />} />
      <Route path='soldier' element={<SoldierPage />} />
      <Route path='pyro' element={<PyroPage />} />
      <Route path='demoman' element={<DemomanPage />} />
      <Route path='heavy' element={<HeavyPage />} />
      <Route path='engineer' element={<EngineerPage />} />
      <Route path='medic' element={<MedicPage />} />
      <Route path='sniper' element={<SniperPage />} />
      <Route path='spy' element={<SpyPage />} />
      {/* <Route path='/' element={<App />} /> */}
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
