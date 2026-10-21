import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Company from "./Components/pages/Company";
import Contact from "./Components/pages/Contact";
import NewProject from "./Components/pages/NewProject";
import Projects from "./Components/pages/Projects";
import Project from "./Components/pages/Project";
import Container from "./Components/layout/Container";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NewProject" element={<NewProject />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
