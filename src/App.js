// import react and style
import React from 'react';
import './dist/output.css';

//import components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Champion from './components/Champion';
import Throwdown from './components/Throwdown';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Champion />
      <Throwdown />
      <Footer />
    </div>
  );
}

// export App.js
export default App;
