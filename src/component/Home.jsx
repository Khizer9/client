import React, { useEffect, useState } from "react";
import Camera from "../assets/icon_camera.svg";
import Mic from "../assets/icon_mic.svg";
import Logo from "../assets/asset_brand_iamai.svg";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import HeroSection from "./HeroSection";


const Home = () => {
  const [showInput, setShowInput] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [recordingCount, setRecordingCount] = useState(0);
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [countdown, setCountdown] = useState(6);

  let recordingInterval;

  useEffect(() => {
    if (isRecording) {
      SpeechRecognition.startListening();
    } else {
      SpeechRecognition.stopListening();
    }
  }, [isRecording]);

  useEffect(() => {
    if (isRecording && recordingCount >= 6) {
      setIsRecording(false);
      setIsConverting(true);
      setShowInput(true)
      clearInterval(recordingInterval); // Stop the timer
    }
  }, [recordingCount, isRecording]);

  const startRecordingTimer = () => {
    recordingInterval = setInterval(() => {
      setRecordingCount((prevCount) => prevCount + 1);
    }, 1000); 
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleStartMic = () => {
    if (isRecording) {
      setIsRecording(false);
      setShowInput(true);
      setIsConverting(false);
      clearInterval(recordingInterval);
    } else {
      setIsRecording(true);
      setShowInput(false);
      setIsConverting(false);
      setRecordingCount(0);
      startRecordingTimer();
  
      // Show the countdown circle
      const countdownCircle = document.getElementById("countdownCircle");
      if (countdownCircle) {
        countdownCircle.style.display = "block";
      }
  
      // Start countdown animation
      setCountdown(6); // Set initial countdown value
      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
        if (countdown <= 0) {
          clearInterval(countdownInterval);
          setIsRecording(false);
          setShowInput(true);
          setIsConverting(false);
  
          // Hide the countdown circle when the countdown is complete
          if (countdownCircle) {
            countdownCircle.style.display = "none";
          }
        }
      }, 1000);
    }
  };

  return (
    <>
    <div className="homeContainer my-5">
      <div>
        <div className="logoImg my-5">
          <img src={Logo} alt="logo" />
        </div>

        {showInput ? (
          <div className="centered-input">
            <button className="icon-button">
              <img src={Camera} alt="Camera" />
            </button>
            <input
              type="text"
              value={transcript}
              placeholder={isConverting ? 'Converting into Text' : 'Ask me anything'}
              className="centered-input-field"
            />
            <button className="icon-button">
              <img src={Mic} alt="Mic" onClick={handleStartMic} />
            </button>
          </div>
        ) : (
          <div>
            <div className="count">
              {Math.floor(recordingCount / 60).toString().padStart(1, '0')}:
              {(recordingCount % 60).toString().padStart(2, '0')}
            </div>
            <button id="speech" className="btn">
              <div className="pulse-ring"></div>
              <i className="fa fa-microphone" aria-hidden="true"></i>
            </button>
          </div>
        )}
      </div>
    </div>

    {showInput && <HeroSection />}
    </>
  );
};



export default Home;
