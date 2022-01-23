import React from "react";

export default function Footer() {
  return (
    <section className="bg-dark text-light d-flex justify-content-center align-items-center">
      <div class="py-1 mx-5 text-secondary">
        <p className="">&copy; {new Date().getFullYear()} Filip Ciesielski</p>
      </div>
    </section>
  );
}
