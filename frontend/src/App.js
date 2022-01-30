import { Routes, Route, Link } from "react-router-dom";
import Nav from "./components/navbar";
import Words from "./components/words";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import './styles/base.css'

function App() {

  return (
    <>
    <Nav />
    <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/words" element={<HomeScreen />} />
      </Routes>
      </>
  );
}

export default App;
