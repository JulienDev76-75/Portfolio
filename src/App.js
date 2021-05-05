import './App.css';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Projets from './components/projets/Projets';
import Competences from './components/competences/Competences';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Header />
        <main className="container my-5">
      <Projets />
      <Competences />
        </main>
      <Footer />
      </Router>
    </div>
  );
}

export default App;

           


