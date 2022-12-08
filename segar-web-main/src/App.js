import React from 'react';
import Feature from './components/Feature';
import Header from './components/Header';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Feature />
    </div>
  );
};

export default App;
