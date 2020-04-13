import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import "./App.css";

function App() {
  return (
    <div>
      <div className="body">
        <Header />
        <div className="hero">
          <Hero />
        </div>
      </div>
      <Services />
    </div>
  );
}

export default App;
