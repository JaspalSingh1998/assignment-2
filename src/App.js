import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Tools from "./pages/Tools";
import About from "./pages/About";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/"  element={<Home />}/>
        <Route exact path="/services"  element={<Services />}/>
        <Route exact path="/tools"  element={<Tools />}/>
        <Route exact path="/about"  element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App;
