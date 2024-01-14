import React from "react";
import About from "./components/About";  
import Navbar from "./components/Navbar"; 
import Projects from "./components/Projects"; 
import Skills from "./components/Skills"; 

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./particlesConfig";

export default function App() {
  const particlesInit = (engine) => {
    loadFull(engine);
  };

  return (
    <main className="text-gray-400 body-font bg-gray-800">

    <div id="particles-js">
    <Particles init={particlesInit} options={particlesOptions} />
    </div>
     
      <Navbar/>
      <About />
      <Projects />
      <Skills />

    </main>
  )
}
