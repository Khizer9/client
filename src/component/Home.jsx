import React from 'react'
import Camera from '../assets/icon_camera.svg'
import Mic from '../assets/icon_mic.svg'
import Logo from '../assets/asset_brand_iamai.svg'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Home = () => {
  const {
    transcript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='homeContainer my-5'>
        <div>
                <div className='logoImg my-5'>
                    <img src={Logo} alt="logo" />
                </div>

                <div className="centered-input">
                <button className="icon-button">
                <img src={Camera} alt="Camera" />
                </button>
                <input type="text" value={transcript} placeholder="Ask me anything" className="centered-input-field" />
                <button className="icon-button">
                <img src={Mic} alt="Mic" onClick={SpeechRecognition.startListening}/>
                </button>
            </div>
        </div>
  </div>
  )
}

export default Home