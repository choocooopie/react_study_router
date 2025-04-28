import React from 'react';
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductPage1 from './page/ProductPage1';
import ProductDetailPage from './page/ProductDetailPage';
import { useState } from 'react';
import UserPage from './page/UserPage';
import LoginPage from './page/LoginPage';

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate == true?<UserPage/>:<Navigate to = "/login"/>
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Homepage />} />
        <Route path="/about" element={ <Aboutpage />} />
        <Route path="/Products" element={ <ProductPage1 />} />
        <Route path="/Products/:id" element={ <ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/user" element={<PrivateRoute />}/>
      </Routes>
    </div>
  );
}

export default App;