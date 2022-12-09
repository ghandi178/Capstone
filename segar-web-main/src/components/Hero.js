import React from 'react';

const Hero = () => {
  return (
    <div id='main'>
      <div className='hero'>
        <h1>
          <span>Free</span> Workout Plans
        </h1>
        <p className='details'>
          Tutorial workout yang dapat diakses kapanpun dan dimanapun. Bergabung
          untuk pengalaman kesehatan yang lebih baik.
        </p>
        <div className='header-btns'>
          <button href='#' className='header-btn'>
            JOIN US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
