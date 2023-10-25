import React, {  useState } from 'react'
import RightArrow from '../assets/icon_arrow.svg'
import LeftArrow from '../assets/icon_chevron_inv.svg'

const HeroSection = () => {

    const words = ["BOOK", "PLAN", "RESERVE", "BUY", "ORDER", "COMPARE", "BRAINSTORM", "WRITE"];
    const textData = [
        "Book me a flight from Singapore to Kuala Lumpur on 8 Sep returning on 12 Sep",
        "I want to watch John Wick 4 on Saturday at 2pm, check if Kieran, Shiju and Appu are free to join.",
        "Book me a flight from Singapore to Kuala Lumpur on 8 Sep returning on 12 Sep",
        "I want to watch John Wick 4 on Saturday at 2pm, check if Kieran, Shiju and Appu are free to join.",
      ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextText = () => {
      setCurrentIndex((currentIndex + 1) % textData.length);
      animateText();
    };
  
    const prevText = () => {
      setCurrentIndex((currentIndex - 1 + textData.length) % textData.length);
      animateText();
    };
  
    const animateText = () => {
      const textItem = document.getElementById('textAnimation');
      textItem.classList.add('animation');
      setTimeout(() => {
        textItem.classList.remove('animation');
      }, 1000); // Adjust the timeout to match your animation duration
    };

  return (
    <>
    <section className="hero-section">
      <div className="hero-words">
        {words.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </div>
    </section>

    <div className="carousel-container my-8">
      <img
        src={RightArrow}
        alt="arrow"
        className="next-button"
        onClick={prevText}
      />

      <div className="text-carousel">
        <div className="text-item" id="textAnimation">
          {textData[currentIndex]}
        </div>
      </div>

      <img
        src={LeftArrow}
        alt="arrow"
        className="next-button"
        onClick={nextText}
      />
    </div>
</>
  )
}

export default HeroSection
