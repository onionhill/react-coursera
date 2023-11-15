import React from "react";
import Hero from "./Sections/Hero";
import Specials from "./Sections/Specials";
import Reviews from "./Sections/Reviews";
import About from "./Sections/About";
function Main() {
  return (
    <main className="main">
      <Hero />
      <Specials />
      <Reviews />
      <About />
    </main>
  );
}

export default Main;
