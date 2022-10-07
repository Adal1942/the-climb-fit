import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../../App.js';
import Work from '../Work.jsx';

function Rota() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/work' element={<Work />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Rota