import React from 'react';
import FeatureBox from './FeatureBox';
import fimage1 from '../images/bmi.png';
import fimage2 from '../images/bmr.png';
import fimage3 from '../images/sleep.png';

function Feature() {
  return (
    <div id='features'>
      <h2>FEATURES</h2>
      <div className='a-container'>
        <FeatureBox image={fimage1} title='BMI' path='/bmi' />
        <FeatureBox image={fimage2} title='BMR' path='/bmr' />
        <FeatureBox
          image={fimage3}
          title='Sleep Calculator'
          path='/sleepcalculator'
        />
      </div>
    </div>
  );
}

export default Feature;
