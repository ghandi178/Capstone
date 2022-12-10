import React from 'react';
import imageAbout from '../images/about.jpg';

function About() {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={imageAbout} alt='about' />
      </div>
      <div className='about-text'>
        <h2>Tentang Kami</h2>
        <p>
          Kami adalah sekumpulan mahasiswa yang suka menekuni pengembangan web
          dan UI/UX.
        </p>
      </div>
    </div>
  );
}

export default About;
