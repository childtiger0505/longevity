import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Second from './pages/Second';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="home" element={ <Home />}/>
          <Route path="second" element={<Second />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
