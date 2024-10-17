import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import SignOut from './pages/SignOut';

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(() => {
    return localStorage.getItem('isAuth') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isAuth', String(isAuth));
  }, [isAuth]);


  if (!isAuth) {
    return <Login setIsAuth={setIsAuth} />;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signOut" element={<SignOut setIsAuth={setIsAuth} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
