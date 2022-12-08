import React from 'react';
import { Link } from 'react-router-dom';
import FeatureBox from './FeatureBox';
import fimage1 from '../images/bmi.png';
import fimage2 from '../images/bmr.png';
import fimage3 from '../images/heart.png';

function Feature() {
  return (
    <div id='features'>
      <h2>FEATURES</h2>
      <div className='a-container'>
        <FeatureBox image={fimage1} title='BMI' />
        <FeatureBox image={fimage2} title='BMR' />
        <FeatureBox image={fimage3} title='Resiko Jantung' />
      </div>
    </div>
  );
}

export default Feature;
