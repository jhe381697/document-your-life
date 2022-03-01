/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */

import React from "react";

// React Router Dom
import { Routes, Route } from "react-router-dom";

// Components
import HeaderNavbar from '../Components/HeaderNavbar/HeaderNavbar';
import TabDashboard from '../Components/TabDashboard/TabDashboard';
import FormSignIn from "../Components/FormSignIn/formSignIn";
import HomePage from "../Components/HomePage/HomePage";
import Login from "../Components/LoginForm/LoginForm";

// Sass
import './App.css';

function App() {

  return (
    <div className="App">
      <HeaderNavbar />

      <Routes>
        <Route path="/" element={
          <HomePage />}
        />
        <Route path="/signup" element={
          <FormSignIn />}
        />
        <Route path="/login" element={
          <Login />}
        />
        <Route path="/dashboard/*" element={
          <TabDashboard />
        }
        />

      </Routes>
    </div>
  );
}

export default React.memo(App);
