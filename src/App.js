import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";       
import About from "./components/About";
import Services from "./components/Services";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import BecomeMember from "./components/BecomeMember";

export default function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/BecomeMember" element={<BecomeMember />} />
      </Routes>
    </div>
  );
}
