import React from "react";
import About from "../components/about";
import Contact from "../components/contact";
import Projects from "../components/projects";

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
