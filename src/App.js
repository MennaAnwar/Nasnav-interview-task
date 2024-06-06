import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
      </header>
      <p className="app-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
