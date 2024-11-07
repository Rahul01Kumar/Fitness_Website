import React from "react";
import Home from "./pages/Home";
import BecomeMember from './components/BecomeMember';
import Services from './components/Services';

export default function App() {
  return (
    <div>
      <Home />
      <BecomeMember />
      <Services />
    </div>
  );
}
