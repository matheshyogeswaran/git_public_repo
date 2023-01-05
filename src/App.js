import './App.css';
import { Profile } from './pages/Profile';
import { Search } from './pages/Search';
import React from 'react';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import {useState, createContext } from "react";
export const AppContext = createContext();
function App() {
  const [userInput,setUserInput] = useState("");
  return <div>
    <AppContext.Provider value={{userInput,setUserInput}}>
      <Router>
          <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/profile" element={<Profile />} />
          </Routes>
      </Router>
      </AppContext.Provider>
  </div>
}
export default App;



