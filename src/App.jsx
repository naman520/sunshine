import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import ServicesList from "./Pages/Services"
import SpeechTherapy from "./Pages/SpeechTherapy"
import OccupationalTherapy from "./Pages/OccupationalTherapy"
import PsychologicalCounselling from "./Pages/PsychologicalCounselling"
import SpecialEducation from "./Pages/SpecialEducation"
import Footer from "./Pages/Footer"
import Navbar from "./components/Navbar"



function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/service" element={<ServicesList/>} />
          <Route path="/speech-therapy" element={<SpeechTherapy />} />
        <Route path="/occupational-therapy" element={OccupationalTherapy} />
        <Route path="/psychological-counselling" element={<PsychologicalCounselling />} />
        <Route path="/special-education" element={<SpecialEducation />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
