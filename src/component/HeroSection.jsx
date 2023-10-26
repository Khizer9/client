import React, { useState, useEffect } from 'react';
import RightArrow from '../assets/icon_arrow.svg';
import LeftArrow from '../assets/leftArrow.svg';

const HeroSection = () => {
  const words = ["BOOK", "PLAN", "RESERVE", "BUY", "ORDER", "COMPARE", "BRAINSTORM", "WRITE"];
  const textData = [
    "Book me a flight from Singapore to Kuala Lumpur on 8 Sep returning on 12 Sep",
    "I want to watch John Wick 4 on Saturday at 2pm, check if Kieran, Shiju and Appu are free to join.",
    "Book me a flight from Singapore to Kuala Lumpur on 8 Sep returning on 12 Sep",
    "I want to watch John Wick 4 on Saturday at 2pm, check if Kieran, Shiju and Appu are free to join.",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cursorStart, setCursorStart] = useState(0);
  const [cursorEnd, setCursorEnd] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const [displayText, setDisplayText] = useState(textData[0]);
  const [cursorPosition, setCursorPosition] = useState(0); // To store the text to display

  const animationSpeed = 25; // Adjust this value to control the animation speed

  useEffect(() => {
    if (isAnimating) {
      const animationInterval = setInterval(() => {
        if (cursorEnd < textData[currentIndex].length) {
          setCursorEnd(cursorEnd + 1);
          setDisplayText(textData[currentIndex].slice(0, cursorEnd));
        } else {
          clearInterval(animationInterval);
          setTimeout(() => {
            setShowCursor(false);
            setIsAnimating(false);
            setCursorStart(0);
            setCursorEnd(0);
          }, 500);
        }
      }, animationSpeed); // Adjust this value for faster animation
      return () => clearInterval(animationInterval);
    }
  }, [cursorEnd, isAnimating, currentIndex,]);

  const nextText = () => {
    if (!isAnimating) {
      setCurrentIndex(0);
      setShowCursor(true);
      setIsAnimating(true);
      setCursorStart(0);
      setCursorEnd(0);
      setDisplayText(textData[currentIndex].slice(0, cursorEnd)); 
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-words">
        {words.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </div>
      <div className="carousel-container my-8">
        <img
          src={RightArrow}
          alt="arrow"
          className="next-button"
          onClick={nextText}
        />
        <div className="text-carousel">
          <div className="text-item" id="textAnimation">
            <span className="cursor" style={{ visibility: showCursor ? 'visible' : 'hidden' }}>|</span>
            {displayText}
            <span className="cursor" style={{ visibility: showCursor ? 'visible' : 'hidden' }}>|</span>
          </div>
        </div>
        <img
          src={LeftArrow}
          alt="arrow"
          className="next-button"
          onClick={() => {
            if (!isAnimating) {
              setCurrentIndex(textData.length - 1);
              setShowCursor(true);
              setIsAnimating(true);
              setCursorStart(0);
              setCursorEnd(0);
              setDisplayText(textData[currentIndex].slice(0, cursorEnd)); 
            }
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
