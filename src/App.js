import React from "react";
import { BrowserRouter } from "react-router-dom";
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