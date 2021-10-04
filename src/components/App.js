//import React from "react";
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import FeatureContainer from './FeatureContainer/FeatureContainer';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <FeatureContainer />
      <Footer />
    </div>
  );
}

export default App;
