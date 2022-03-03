/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */

import React, { useState } from "react";

// React Router Dom
import { Routes, Route } from "react-router-dom";

// Components
import HeaderNavbar from '../Components/HeaderNavbar/HeaderNavbar';
import TabDashboard from '../Components/TabDashboard/TabDashboard';
import FormSignIn from "../Components/FormSignIn/formSignIn";

import HomePage from "../Components/HomePage/HomePage";
import Login from "../Components/LoginForm/LoginForm";
import Card from "../Components/Card/Card";

// Sass
import './App.css';

function App() {
  const [IsConnected, setIsConnected] = useState(false)
  let data = localStorage.getItem('userId')
  if (data === undefined) {
    console.log('no user')
    setIsConnected(false)
  }
  function handleConnection() {
    setIsConnected(true)
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
  }

  return (
    <div className="App">
      <HeaderNavbar IsConnected={IsConnected} handleConnection={handleConnection}/>

      <Routes>
        <Route path="/" element={
          <HomePage setIsConnected={setIsConnected} />}
        />
        <Route path="/signup" element={
          <FormSignIn IsConnected={IsConnected} />}
        />
        <Route path="/login" element={
          <Login setIsConnected={setIsConnected}/>}
        />
        <Route path="/dashboard/*" element={
          <TabDashboard IsConnected={IsConnected} />
        }
          />
        <Route path="/card" element={
          <Card />}
        />
      </Routes>
    </div>
  );
}

export default React.memo(App);
