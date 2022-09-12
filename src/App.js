import "./App.css";
import { Routes, Route } from "react-router-dom";
//components
import Home from "./pages/Home";
import SinglePokemon from "./Components/SinglePokemon";
import NoData from "./pages/NoData";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:userId" element={<SinglePokemon />} />
        <Route path="*" element={<NoData />} />
      </Routes>
    </>
  );
}

export default App;
