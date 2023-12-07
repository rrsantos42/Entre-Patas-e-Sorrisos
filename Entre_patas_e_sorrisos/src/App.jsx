import './App.css'
import LandingPage from "./Pages/LandingPage.jsx";
import {Routes, Route} from "react-router-dom";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
