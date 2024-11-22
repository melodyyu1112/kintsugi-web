import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router basename="/kintsugi-web">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;