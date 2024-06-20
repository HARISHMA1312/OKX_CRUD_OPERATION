import React, { useState } from "react";
import { Image, Stack } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import Vid1 from '../assets/B961D658AE174818.mp4'
import Vid2 from '../assets/D583B0A2F58732CD.mp4'
import Vid3 from '../assets/CCAA7B610D3D33D4.mp4'
import Trade from '../assets/Trade-video.mp4'
import Monk from '../assets/Monk.webm';

const Toggle = () => {
  const [active, setActive] = useState('Exchange');

  const handleToggle = (value) => {
    setActive(value);
  };

  return (
    <>
    <body className="bdy">
    <center>
                    <h1 className="b_main_h1"><b>Trade like a pro</b></h1><br></br>
                    <p className="b_main_p">Get the lowest fees, fastest transactions, powerful APIs, and more</p>
                    <video className="b_main_video" src={Trade}></video>
                </center>
      <center>
        <h1 style={{ color: "white" }}>One app. Unlimited possibilities.</h1>
      </center>
      
      <div className="toggle-container">
        <div
          className={`toggle-button ${active === 'Exchange' ? 'active' : ''}`}
          onClick={() => handleToggle('Exchange')}
        >
          Exchange
        </div>
        <div
          className={`toggle-button ${active === 'Web3' ? 'active' : ''}`}
          onClick={() => handleToggle('Web3')}
        >
          Web3
        </div>
      </div>
      {active === 'Exchange' && (
        <div className="e_phone1">
          <Stack direction="horizontal">
            <Image
              src='https://www.okx.com/cdn/assets/imgs/242/1249729C549233AA.png?x-oss-process=image/format,webp/ignore-error,1'
              width='300'
              height='500'
              alt='OKX ph1'
              fluid
            />
            <p>This is the Exchange section where you can trade cryptocurrencies.</p>
          </Stack>
        </div>
      )}
      {active === 'Web3' && (
        <div className="e_phone1">
          <Stack direction="horizontal">
            <Image
              src='https://www.okx.com/cdn/assets/imgs/241/C40C936CC5211A11.png?x-oss-process=image/format,webp/ignore-error,1'
              width='300'
              height='500'
              alt='OKX ph2'
              fluid
            />
            <p>This is the Web3 section where you can explore decentralized applications.</p>
          </Stack>
        </div>
      )}
      <br></br>
      <center>
          <h1>With you every step of the way</h1>
          <p>
            From your first crypto trade to your first NFT purchase, you’ll have us to guide you through the process. No stupid questions.<br />
            No sleepless nights. Have confidence in your crypto.
          </p>
        </center>
        <iframe
          src={Monk}
          title='Embedded Video'
          allow='autoplay; encrypted-media'
          
          controls='0'
          className='ifr'
          style={{
            width: '100%',
            height: '87vh',
            border: 'none',
            zIndex: 1,
          }}
        ></iframe>

      
        
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 text-white" style={{ padding: "10px" }}>
              <h1 className="b_h1"><b>What is OKX?</b></h1>
              <h1 className="p">Find out why we’re your new favorite crypto app with some help from our world-class partners</h1>
              <br></br>
              <button className="button-17" >Find out</button>


              <img src={Logo} alt="Logo" className="log" />

              <Stack direction="horizontal">
                <video className="Vid1" src={Vid1} autoplay muted loop>
                  
                </video>
                <video className="Vid1" src={Vid2} autoplay muted loop></video>
                <video className="Vid1" src={Vid3} autoplay muted loop></video>

              </Stack>

            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Toggle;
