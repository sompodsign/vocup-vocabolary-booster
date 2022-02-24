import {Routes, Route} from "react-router-dom";
import {HashRouter as Router} from "react-router-dom";
import Nav from "./components/navbar";
import HomeScreen from "./screens/HomeScreen";
import JoinScreen from "./screens/JoinScreen";
import LoginScreen from "./screens/LoginScreen";
import './styles/base.css'
import Words from "./screens/VocabularyScreen";
import {ToastContainer} from "react-toastify";
import DictionaryScreen from "./screens/DictionaryScreen";
import QuizScreen from "./screens/QuizScreen";
import PdfReader from "./screens/ReaderScreen";

function App() {

    return (
        <Router>
            <Nav/>
            <ToastContainer/>
            <div class="container mt-8">
                <Routes>
                    <Route path="/" element={<HomeScreen/>}/>
                    <Route path="/vocabulary" element={<Words/>}/>
                    <Route path="/vocabulary/quiz" element={<QuizScreen/>}/>
                    <Route path="/dictionary" element={<DictionaryScreen/>}/>
                    <Route path="/login" element={<LoginScreen/>}/>
                    <Route path="/join" element={<JoinScreen/>}/>
                    <Route path="/reader" element={<PdfReader/>}/>
                </Routes>
            </div>

        </Router>
    );
}

export default App;
