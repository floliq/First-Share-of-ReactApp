import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Menu from "./components/Menu"
import Showcase from "./components/Showcase";
import Services from "./components/Services";
import Designers from "./components/Designers";
import Tariffs from "./components/Tariffs";
import Packages from "./components/Packages";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Menu />
      <div className="main">
        <h1>Interior Design</h1>
        <Showcase />
        <Services />
        <Designers />
        <Packages />
        <Tariffs />
        <Contacts />
      </div>
      <Footer />
    </>
  );
}
export default App;
