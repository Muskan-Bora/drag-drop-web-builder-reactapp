import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const HeroSection = ({ onStart }) => {
  return (
    <div className='hero-container'>
      
      <h1 className='hero-title'>Welcome to the Website Builder App!..</h1>

      <p className='hero-description'>
        "Build your own website using drag-and-drop or easy-to-use forms. Let's get started!"
      </p>

      <img src='https://uicreative.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/03/03010746/auto-draft-129.jpg' className='herosection-image'></img>

      <button className='hero-button'  onClick={onStart}>
        Let's Build it!.. <FontAwesomeIcon icon={faRocket} />
      </button>
    </div>
  )
}

export default HeroSection;

// https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg