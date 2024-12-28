import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import End from "./Pages/End"
import ImageText from "./Pages/ImageText"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/image" element={<ImageText/>} />
          <Route path="/end" element={<End/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
