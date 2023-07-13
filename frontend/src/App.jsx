import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Edit from "./components/Edit";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit/:index" element={<Edit />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
