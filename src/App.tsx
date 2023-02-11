import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { createContext } from 'vm';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from './componentes/Inicio';

const userObjectContext = {loggedIn: false};

export const UserContext = createContext(userObjectContext);

function App() {
  const [user] = useState(userObjectContext);
  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
      </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
