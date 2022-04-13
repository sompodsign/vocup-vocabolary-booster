import {Routes, Route} from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import FavIcon from 'react-favicon';

import Nav from "./components/navbar";
import JoinScreen from "./screens/JoinScreen";
import LoginScreen from "./screens/LoginScreen";
import './styles/base.css'
import Words from "./screens/VocabularyScreen";
import {ToastContainer} from "react-toastify";
import DictionaryScreen from "./screens/DictionaryScreen";
import QuizScreen from "./screens/QuizScreen";
import TutorialScreen from "./screens/TutorialsScreen";
import CreateTutorial from "./screens/CreateTutorialScreen";
import {PostDetail} from "./screens/PostDetailScreen";
import NotFound from "./components/notFound";
import {ToolsScreen} from "./screens/ToolsScreen";


function App() {

    return (
        <div>
        <ToastContainer />
    <Router>
    <Nav />

    <Routes>
        <Route path="/" element={<Words />} />
        <Route path="/vocabulary" element={<Words />} />
        <Route path="/vocabulary/quiz" element={<QuizScreen />} />
        <Route path="/dictionary" element={<DictionaryScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/join" element={<JoinScreen />} />
        <Route path="/tutorials" element={<TutorialScreen />} />
        <Route path="/create-tutorial" element={<CreateTutorial />} />
        <Route path="/tutorials/:slug" element={<PostDetail />} />
        <Route path="/tutorials/filter/:tag" element={<TutorialScreen />} />
        <Route path="/tools/:toolName" element={<ToolsScreen />} />
        <Route path="*" element={<NotFound />} />
    </Routes>

    </Router>
    </div>
  );
}

export default App;
