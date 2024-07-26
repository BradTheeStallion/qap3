// Bradley Ayers
// QAP3
// July 22 - 26, 2024

import React, { useEffect, useRef, useState } from 'react';
import doggo1 from './img/doggo1.svg';
import doggo2 from './img/doggo2.svg';
import faqPic from './img/faq.svg';
import home from './img/home.svg';
import BreedSelector from './BreedSelector';
import ImageGallery from './ImageGallery';
import { capitalizeWords, faq, homeButt } from './utils';
import './App.css';

function App() {
  const [breed, setBreed] = useState('');
  const [numImages, setNumImages] = useState(0);
  const [images, setImages] = useState([]);
  useEffect(() => {
    faq();
    homeButt();
  }, []);

  return (
    <div className="App">
      <div className="questions">
        <div className='qtext'>
          <h1>Q&A</h1>
          <ul>
            <li>How many hours did it take you to complete this assessment? (Please keep try to keep track of how many hours you have spent working on each individual part of this assessment as best you can - an estimation is fine; we just want a rough idea.)<br /><span className='answer'>I would estimate that I spent about 10 hours on this QAP altogether. About a third of the time was spent on CSS.</span></li>
            <li>What online resources you have used? (My lectures, YouTube, Stack overflow etc.)<br /><span className='answer'>In addition to class lectures and notes (Front End, Javascript, UI/UX), I used the following resources:
              <ul>
                <li><a href='https://create-react-app.dev/docs/getting-started'>Create React App</a></li>
                <li><a href='https://react.dev/reference/react'>React Documentation</a></li>
                <li><a href='https://css-tricks.com/'>CSS Tricks</a></li>
                <li><a href='https://www.w3schools.com/cssref/index.php'>W3 Schools</a></li>
              </ul>
              I also consulted ChatGPT for various trouble-shooting incidents in both React and CSS.</span></li>
            <li>Did you need to ask any of your friends in solving the problems. (If yes, please mention name of the friend. They must be amongst your class fellows.)<br /><span className='answer'>I consulted several classmates for their opinions, notably Kyle Hollett, Brian Janes, Brandon Shea, and Adam Stevenson</span></li>
            <li>Did you need to ask questions to any of your instructors? If so, how many questions did you ask (or how many help sessions did you require)?<br /><span className='answer'>I didn't consult any instructors or tutors regarding specific details of this QAP.</span></li>
            <li>Rate (subjectively) the difficulty of Making this all! from your own perspective, and whether you feel confident that you can solve a similar but different problem requiring some of the same techniques in the future now that you’ve completed this one.<br /><span className='answer'>This was a great task and I feel like I could make a similar project relatively quickly with the knowledge gleaned from this project.</span></li>
          </ul>
        </div>
        <button className="homeButton"><img src={home} alt="home button" /></button>
      </div>
      <div className="main-content">
        <div className="headbar">
          <div className="headbartop">
            <img src={doggo1} alt="doggo1" />
            <h1>
              <span className='pink'>Doggy</span> <span className='green'>Dog</span> <span className='blue'>World</span>
            </h1>
            <img src={doggo2} alt="doggo2" />
          </div>
          <div className='faq'>
            <img src={faqPic} alt="faq" />
          </div>
        </div>
        <div className="headbarbottom">
          <BreedSelector 
            setBreed={setBreed}
            setNumImages={setNumImages} 
            setImages={setImages} 
          />
        </div>
        <div className="main-content-breed">
          <div className='breedname'>
            <h1>{capitalizeWords(breed)}</h1>
          </div>
          <ImageGallery images={images} />
        </div>
      </div>
    </div>
  );
}

export default App;