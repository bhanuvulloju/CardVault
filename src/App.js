import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Credit from "./Components/Credit";
import Debit from "./Components/Debit";
import Form from "./Components/Form";
import Contact from "./Components/Contact";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [obj, setObj] = useState({ name: "", cvv: "", exp: "", card: "" });
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/credit" element={<Credit obj={obj} />} />
          <Route exact path="/debit" element={<Debit />} />
          <Route exact path="/form" element={<Form setObj={setObj} />} />
          <Route exact path="/contact" element={<Contact setObj={setObj} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
