import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/navbar";
import HomeScreen from "./screens/HomeScreen";
import JoinScreen from "./screens/JoinScreen";
import LoginScreen from "./screens/LoginScreen";
import './styles/base.css'
import Words from "./components/words";

function App() {

  return (
    <Router>
    <Nav />
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/vocabulary" element={<Words />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/join" element={<JoinScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
