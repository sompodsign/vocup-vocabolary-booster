import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Nav from "./components/navbar";
import HomeScreen from "./screens/HomeScreen";
import JoinScreen from "./screens/JoinScreen";
import LoginScreen from "./screens/LoginScreen";
import './styles/base.css'

function App() {

  return (
    <HashRouter>
    <Nav />
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/join" element={<JoinScreen />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
