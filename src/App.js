import "./App.css";

import Home from "./components/routes/Home"
import Reservations from "./components/routes/Reservations";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/reservations" element = {<Reservations />}/>
    </Routes>
  </>
  );
}

export default App;
