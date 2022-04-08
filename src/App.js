import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Sponsors } from "./components/sponsors/Sponsors";
import { Galerie } from "./components/galerie/Galerie";
import { Follow } from "./components/follow/Follow";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sponsors" element={<Sponsors/>} />
        <Route path="/galerie" element={<Galerie/>} />
        <Route path="/follow" element={<Follow/>} />
        <Route path="/contact" element={Contact} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
