import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Home2 from "./Pages/Home2"
import End from "./Pages/End"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home2/>} />
          <Route path="/end" element={<End/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
