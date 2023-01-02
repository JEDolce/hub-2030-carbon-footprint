import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Intro } from './pages/Intro';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Form } from './pages/Form';
import { Results } from './pages/Results';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './app.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/form' element={<Form />} />
          <Route path='/results' element={<Results />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
