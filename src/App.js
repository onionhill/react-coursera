import "./App.css";

import HomePage from "./components/pages/HomePage.tsx";
import ConfirmationPage from "./components/pages/ConfirmationPage.tsx";
import ReservationPage from "./components/pages/ReservationPage.tsx"

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<HomePage/>} path="/"/>
      <Route element={<ReservationPage/>} path="/reservations"/>
      <Route element={<ConfirmationPage/>} path="/confirmation"/>
    </Routes>
  );
}

export default App;
