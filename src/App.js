// import react and style
import React from "react";
import "./index.css";

//import components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Throwdown from "./components/Throwdown";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Throwdown />
    </div>
  );
}

// export App.js
export default App;
