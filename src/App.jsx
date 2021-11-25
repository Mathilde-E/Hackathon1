import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banniere from "./components/Banniere";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "./App.css";
import { Profiles } from "./components/Profiles";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Navbar />
          <Banniere title="Premier Hackathon avec la team plop !" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profiles" element={<Profiles />} />
          </Routes>
        </Router>
      </div> 
      <Footer />
    </div>
  );
}

export default App;
