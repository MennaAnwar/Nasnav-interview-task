import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Lazy load the ProductDetails component
const ProductDetails = lazy(() =>
  import("./pages/ProductDetails/ProductDetails")
);

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <Navbar />
        </header>
        <div className="main-container">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/" element={<Navigate to="/product/1" />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
