import React from 'react'
import Camera from '../assets/icon_camera.svg'
import Mic from '../assets/icon_mic.svg'
import Logo from '../assets/asset_brand_iamai.svg'

const Home = () => {
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
                <input type="text" placeholder="Ask me anything" className="centered-input-field" />
                <button className="icon-button">
                <img src={Mic} alt="Mic" />
                </button>
            </div>
        </div>
  </div>
  )
}

export default Home