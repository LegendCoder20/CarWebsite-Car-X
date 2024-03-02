import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
// Imported All Cars Components
import AllSportsCar from "./All Cars/AllSportsCar";
import SportsCar from "./All Cars Data/SportsCar";
import AllLuxuaryCars from "./All Cars/AllLuxuaryCars";
import LuxuaryCars from "./All Cars Data/LuxuaryCars";
import AllRacingCars from "./All Cars/AllRacingCars";
import RacingCars from "./All Cars Data/RacingCars";
import {BrowserRouter as Routers, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Routers>
        <Navbar></Navbar>
        <Routes>
          {/*  */}
          <Route path="/" element={<Home></Home>}></Route>
          {/*  */}
          <Route
            path="/allsportscar"
            element={<AllSportsCar></AllSportsCar>}
          ></Route>
          {/*  */}
          <Route
            path="/sportscar/:car"
            element={<SportsCar></SportsCar>}
          ></Route>
          {/*  */}
          <Route
            path="/allluxuarycars"
            element={<AllLuxuaryCars></AllLuxuaryCars>}
          ></Route>
          {/*  */}
          <Route
            path="/luxuarycars/:car"
            element={<LuxuaryCars></LuxuaryCars>}
          ></Route>
          {/*  */}
          <Route
            path="/allracingcars"
            element={<AllRacingCars></AllRacingCars>}
          ></Route>
          {/*  */}
          <Route
            path="/racingcars/:car"
            element={<RacingCars></RacingCars>}
          ></Route>
          {/*  */}
          <Route path="*" element={<Home></Home>}></Route>
          {/*  */}
        </Routes>
      </Routers>
    </>
  );
}

export default App;
