import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BMIPage from './pages/BMIPage';
import BMRPage from './pages/BMRPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/bmi' element={<BMIPage />} />
          <Route path='/bmr' element={<BMRPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
