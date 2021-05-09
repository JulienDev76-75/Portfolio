import './App.css';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Projets from './components/projets/Projets';
import Competences from './components/competences/Competences';
import React from "react";

import {
  BrowserRouter as Router,
} from "react-router-dom";
//Single page, don't need Switch or any Links
function App() {
  return (
    <div>
      <Router>
      <Header />
      <Projets />
      <Competences />
      <Footer />
      </Router>
    </div>
  );
}

export default App;

           


