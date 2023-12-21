import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header/index.js';
import SignIn from './components/login';
import Signup from './components/signUp';
import Home from './components/home';
import Album from './components/componentDetails/index.js';

function App() {
  return (
    <BrowserRouter>
            <Header/>
            
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<SignIn/>}/>
            <Route path='/signup' element={<Signup/>} />
           <Route path='/:id' element={<Album/>} />
          </Routes>
    </BrowserRouter>
    
  );
}

export default App;
