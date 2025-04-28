import React from 'react';
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductPage from './page/ProductPage';
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
        {/* path는 각 페이지의 주소, element는 주소에 보여주고 싶은 페이지 */}
        <Route path="" element={<Homepage />}/>
        <Route path="/about" element={<Aboutpage />}/>
        <Route path="/products" element={<ProductPage />}/>
        <Route path="/products/:id" element={<ProductDetailPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/user" element={<PrivateRoute />}/>

      </Routes>

      
      
    </div>
  );
}

export default App;
