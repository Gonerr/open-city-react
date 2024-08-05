import React, { Component } from 'react';
import Header from "./components/layout/header/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import RoutesPage from './RoutesPage';
// import Gallery from './Gallery';
// import About from './About';
// import Contacts from './Contacts';

const App = () => {
  return (
      <Router>
        <Header/>
        <Routes>
          {/*<Route path="/" element={<Home />} />*/}
          {/*<Route path="/routes" element={<RoutesPage />} />*/}
          {/*<Route path="/gallery" element={<Gallery />} />*/}
          {/*<Route path="/about" element={<About />} />*/}
          {/*<Route path="/contacts" element={<Contacts />} />*/}
        </Routes>
      </Router>
  );
};
export default App;
