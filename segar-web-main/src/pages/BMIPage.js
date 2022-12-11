import React, { useState } from 'react';
import ButtonCalculate from '../components/ButtonCalculate';
import HeroFeature from '../components/HeroFeature';
import TextInput from '../components/TextInput';

import '../styles/BMIPage.css';

const BMIPage = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [bmiClass, setBmiClass] = useState();

  const handleHeightChange = (event) => setHeight(event.target.value);
  const handleWeightChange = (event) => setWeight(event.target.value);

  const computeBmi = () => {
    let bmiValue = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmiValue);
    let bmiClass = getBmi(bmiValue);
    setBmiClass(bmiClass);
    setHeight('');
    setWeight('');
  };

  const getBmi = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight';
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight';
    }
    if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    }
    if (bmi >= 30) {
      return 'Obesity';
    }
  };

  return (
    <>
      <HeroFeature />
      <div className='container'>
        <div className='form-input'>
          <div>
            <h2>Welcome to our BMI Calculator!</h2>
          </div>

          <div className='form-input__content'></div>
          <div className='row'>
            <TextInput
              label='Height'
              placeholder='Enter height in cm'
              handleChange={handleHeightChange}
              value={height}
            />
          </div>
          <div className='row'>
            <TextInput
              label='Weight'
              placeholder='Enter weight in kg'
              handleChange={handleWeightChange}
              value={weight}
            />
          </div>
          <div className='btn-submit'>
            <ButtonCalculate label='CALCULATE' onClick={computeBmi} />
          </div>
        </div>

        <h2>Index BMI</h2>
        <div className='bmi-result'>
          {isNaN(bmi) ? null : <h3>Your BMI = {bmi}</h3>}
        </div>

        <h2>BMI Description</h2>
        <div className='bmi-description'>
          <h3>{bmiClass}</h3>
        </div>
      </div>
    </>
  );
};

export default BMIPage;
