import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Path from "./components/Path/Path";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
        <Path />
        <hr className="hr" />
      </header>
      <div className="main-container">
        <div>Hello</div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
