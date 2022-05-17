// import react and style
import React from "react";
import "./index.css";

//import components
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

// export App.js
export default App;
