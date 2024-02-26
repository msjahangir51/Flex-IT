import React from 'react'
import Home from './assets/Components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './assets/Pages/Services';
import Aboutus from './assets/Pages/Aboutus';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Service' element={<Services/>}></Route>
        <Route path='/About' element={<Aboutus/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App