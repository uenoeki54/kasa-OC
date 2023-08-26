import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import Header from './components/Header';
import Error from './components/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './maincss/styles.css';
import Apropos from './pages/Apropos/Apropos';
import Fiche from './pages/Fiche/Fiche';
import Footer from './components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className="conteneur">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/fiche/:logementId" element={<Fiche />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);
