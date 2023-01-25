import React from "react";
import Info from "./components/info";
import About from "./components/about.js";
import Interest from "./components/interest.js";
import Footer from "./components/footer.js";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="container">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}

export default App;
