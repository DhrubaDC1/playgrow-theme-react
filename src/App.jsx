import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
