import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Project from "./Components/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Project" element={<Project />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
