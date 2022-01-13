import React from "react";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="bg-dark"
      >
        <h2 style={{ color: "white", fontWeight: 300 }}>Filip Ciesielski</h2>
      </div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="bg-light"
      >
        <h2 style={{ color: "black", fontWeight: 300 }}>Filip Ciesielski</h2>
      </div>
    </>
  );
}
