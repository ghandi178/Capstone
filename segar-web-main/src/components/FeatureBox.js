import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function FeatureBox(props) {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image} alt='' />
      </div>
      <div className='a-b-text'>
        <h2>
          <Link to={props.path}>{props.title}</Link>{' '}
        </h2>
      </div>
    </div>
  );
}

export default FeatureBox;
