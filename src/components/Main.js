import React from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import CustomerSays from "./CustomersSay.tsx";
import About from "./About";
function Main() {
  return (
    <main className="main">
      <Hero />
      <Specials />
      <CustomerSays />
    </main>
  );
}

export default Main;
