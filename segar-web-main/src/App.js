import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BMIPage from './pages/BMIPage';
import BMRPage from './pages/BMRPage';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Footer from './components/Footer';
import ArticlesPage from './pages/ArticlesPage';
import AboutPage from './pages/AboutPage';
import FeaturePage from './pages/FeaturePage';
import SleepCalculatorPage from './pages/SleepCalculatorPage';

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
          <Route path='/sleepcalculator' element={<SleepCalculatorPage />} />
          <Route path='/articles' element={<ArticlesPage />} />
          <Route path='/article/:id' element={<DetailPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/features' element={<FeaturePage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
