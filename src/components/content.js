import React from "react";

export default function Content() {
  return (
    <>
      <div data-spy="scroll" data-target="#navbar-scroll" data-offset="0">
        <section id="about-me" className="bg-dark">
          <h2 className="text-white">About me</h2>
        </section>
        <section id="projects" className="bg-light">
          <h2 className="text-black">Projects</h2>
        </section>
        <section id="contact" className="bg-dark">
          <h2 className="text-white">Contact</h2>
        </section>
      </div>
    </>
  );
}
