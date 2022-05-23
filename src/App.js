// import react and style
import React from 'react';
import './dist/output.css';

//import components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Champion from './components/Champion';
import Throwdown from './components/Throwdown';
import Login2 from './components/Login2';
import Signup from './components/Signup';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Signup />
      <Login2 />
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
