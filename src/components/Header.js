import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <header className="header">
      <img src="/assets/Logo.svg" alt="logo" className="logo"></img>
      <Nav />
    </header>
  );
}
export default Header;
