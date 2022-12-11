import React from 'react';
import SleepCalcResult from '../components/SleepCalcResult';
import { useState } from 'react';
import calcSleepTimes from '../helpers/calcSleepTimes';

import '../styles/SleepCalculatorPage.css';
import HeroFeature from '../components/HeroFeature';

const SleepCalculatorPage = () => {
  const [results, setResults] = useState([]);

  const [wakingTime, setWakingTime] = useState({
    hour: '',
    minute: '',
    time: 'AM',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setWakingTime((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sleepingTimes = calcSleepTimes(wakingTime);
    setResults(sleepingTimes);
  };

  return (
    <>
      <HeroFeature />
      <div id='calculator-container'>
        <h2>Sleep Calculator</h2>
        <h3>Masukkan Waktu Anda ingin Bangun:</h3>

        <div id='form-container'>
          <form onSubmit={handleSubmit} onChange={handleChange}>
            <div id='inputs'>
              <label htmlFor='hour'>
                <input
                  required
                  type='number'
                  id='hour'
                  name='hour'
                  value={wakingTime.hour}
                  min={1}
                  max={12}
                  onChange={() => {}}
                />
              </label>
              <span id='colon'>:</span>

              <label htmlFor='minute'>
                <input
                  required
                  type='number'
                  id='minute'
                  name='minute'
                  value={wakingTime.minute}
                  min={0}
                  max={59}
                  onChange={() => {}}
                />
              </label>

              <label htmlFor='time'>
                <select id='time' name='time' required>
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </label>
            </div>

            <button className='btn-calc'>Hitung</button>
          </form>
        </div>

        {results.length > 0 && <SleepCalcResult results={results} />}
      </div>
    </>
  );
};

export default SleepCalculatorPage;
