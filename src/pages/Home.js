import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Schedule from "../components/Schedule";
import Contact from "../components/Contact";
import BecomeMember from "../components/BecomeMember";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Schedule />
      <Contact />
      <BecomeMember />
    </div>
  );
}
