import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from "./paginas/Home";
import About from "./paginas/About";
import Newsletter from './paginas/Newsletter';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
          <Route path="/" element={<Home/>}>
            
          </Route>
          <Route path="/about" element={<About/>}>
            
          </Route>
          <Route path="/newsletter" element={<Newsletter/>}>
            
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
