import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
      </header>
      <div className="main-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
