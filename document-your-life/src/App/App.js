/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */

import React, { useState } from "react";

// Sass
import './App.css';

// React Router Dom
import { Routes, Route } from "react-router-dom";

// Components
import Logo from "../Components/logo/logo";
import HeaderNavbar from '../Components/HeaderNavbar/HeaderNavbar';
import TabDashboard from '../Components/TabDashboard/TabDashboard';
import FormSignIn from "../Components/FormSignIn/formSignIn";
import { hasAuthenticated } from "../service/AuthApi";
import ProfilePage from "../Components/ProfilePage/ProfilePage";
import HomePage from "../Components/HomePage/HomePage";
import Login from "../Components/LoginForm/LoginForm";
import Auth from "../contexts/Auth";
import PrivateRoute, { IfConnectedRoute } from '../Components/PrivateRoute/PrivateRoute'
import Contact from "../Contact/Contact";
import About from "../About/About";
import Card from "../Components/Card/Card"
import Cgu from "../Components/Cgu/Cgu";
import CardResume from "../Components/CardResume/CardResume";
import CardEdit from "../Components/CardEdit/CardEdit";
import Page404 from "../Components/page404/page404";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated())

  const [IsConnected, setIsConnected] = useState(false)
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
        <div className="headerContainer">
          <Logo />
          <HeaderNavbar IsConnected={IsConnected} handleConnection={handleConnection} />
        </div>

        <Routes>
          <Route path="/*" element={<Page404 />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* A ENLEVER */}
          <Route path="/cgu" element={<Cgu />} />
          <Route path="/contact" element={<Cgu />} />
          {/* acces only if not logged or get redirected */}
          <Route path="/" element={
            <IfConnectedRoute>
              <HomePage />
            </IfConnectedRoute>
          } />
          <Route path="/signup" element={
            <IfConnectedRoute>
              <FormSignIn />
            </IfConnectedRoute>} />
          <Route path="/login" element={
            <IfConnectedRoute>
              <Login />
            </IfConnectedRoute>} />

          {/* acces only with loggin or get redirected */}

          <Route path="/dashboard/*"
            element={
              <PrivateRoute>
                <TabDashboard />
              </PrivateRoute>} />

          <Route path="/card/*" element={
            <PrivateRoute>
              <Card />
            </PrivateRoute>
          } />

          <Route path="/profil"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            } />
          <Route path="/last"
            element={
              <PrivateRoute>
                <CardResume />
              </PrivateRoute>
            } />
          <Route path="/today"
            element={
              <PrivateRoute>
                <CardEdit />
              </PrivateRoute>
            } />
        </Routes>
      </div>
    </Auth.Provider>
  );
}

export default React.memo(App);
