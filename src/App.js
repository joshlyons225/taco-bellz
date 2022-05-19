// import react and style
import React from "react";
import "./dist/output.css";

//import components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Throwdown from "./components/Throwdown";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Throwdown />
      <Footer />
    </div>
  );
}

// export App.js
export default App;
