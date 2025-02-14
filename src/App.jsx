import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Footer />
    </>
  );
}

export default App;
