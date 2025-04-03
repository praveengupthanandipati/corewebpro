import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import UIUXDesigns from "./pages/services/UIUXDesigns";
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileDevelopment from "./pages/services/MobileDevelopment";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import Works from "./pages/Works";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="About" element={<About/>} />
        <Route path="/services/UIUXDesign" element={<UIUXDesigns/>}/>
        <Route path="/services/WebDevelopment" element={<WebDevelopment/>}/>
        <Route path="/services/MobileDevelopment" element={<MobileDevelopment/>}/>
        <Route path="/services/DigitalMarketing" element={<DigitalMarketing/>}/>
        <Route path="Works" element={<Works/>} />
        <Route path="Blog" element={<Blog/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
