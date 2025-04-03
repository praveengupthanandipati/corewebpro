import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route key="home" path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
