import React from "react";
import Hero from "./Hero.tsx";
import Specials from "./Specials.tsx";
import CustomerSays from "./CustomersSay.tsx";
import About from "./About.tsx";
function Main() {
  return (
    <main className="main">
      <Hero />
      <Specials />
      <CustomerSays />
      <About />
    </main>
  );
}

export default Main;
