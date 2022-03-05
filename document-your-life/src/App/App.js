/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */

import React, { useState } from "react";

// Sass
import './App.css';

// React Router Dom
import { Routes, Route } from "react-router-dom";

// Components
import HeaderNavbar from '../Components/HeaderNavbar/HeaderNavbar';
import TabDashboard from '../Components/TabDashboard/TabDashboard';
import FormSignIn from "../Components/FormSignIn/formSignIn";
import { hasAuthenticated } from "../service/AuthApi";
import ProfilePage from "../Components/ProfilePage/ProfilePage";
import HomePage from "../Components/HomePage/HomePage";
import Login from "../Components/LoginForm/LoginForm";
import Auth from "../contexts/Auth";
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute'


function App() {
  const [IsConnected, setIsConnected] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated())
  let data = localStorage.getItem('userId')
  if (data === undefined) {
    console.log('no user')
    setIsAuthenticated(false)
  }
  function handleConnection() {
    setIsAuthenticated(false)
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
  }

  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="App">
        <HeaderNavbar IsConnected={IsConnected} handleConnection={handleConnection} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<FormSignIn />} />
          <Route path="/login" element={<Login />} />
          {/* acces only with loggin or get redirected */}
          <Route path="/dashboard/*"
            element={
              <PrivateRoute>
                <TabDashboard />
              </PrivateRoute>} />
          <Route path="/profil"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            } />
        </Routes>
      </div>
    </Auth.Provider >
  );
}

export default React.memo(App);
