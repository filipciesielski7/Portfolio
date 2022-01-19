import React from "react";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";

export default function Content() {
  return (
    <>
      <div data-spy="scroll" data-target="#navbar-scroll" data-offset="0">
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
