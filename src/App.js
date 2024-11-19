import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import GameControls from "./components/GameControls";
import { BrowserRouter, useNavigate } from "react-router-dom";
import axios from "axios";
import './App.css'
import { AppRouter } from "./components/AppRouter";


function App() {

  return (
    <div className="app">
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>      
    </div>
  );
}

export default App;