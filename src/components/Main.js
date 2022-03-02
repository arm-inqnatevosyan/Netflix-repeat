import React, { useRef } from 'react';
import video from "../img/Netflix 2022 Movie Preview _ Official Trailer.mp4";
import video1 from "../img/Squid Game _ Official Trailer _ Netflix.mp4";
import video2 from "../img/Vikings_ Valhalla _ Behind the Scenes_ The Fall of London Bridge _ Netflix.mp4";
import img from "../img/kids.png";

const Main = () => {
  return (
      <>
    <main>
        <div>
            <h1>Enjoy on your TV.</h1>
            <h6>Watch on Smart Tvs Playstation Xbox</h6>
            <h6>Chromecast,Apple TV,Blu-ray players,and </h6>
            <h6>more.</h6>
        </div>
        <div className='video-div'>
            <video loop muted  autoPlay >
                <source src={video}  />
            </video>
        </div>
    </main>
    <main>
        <div className='video-div'>
            <video loop muted  autoPlay >
                <source src={video1}  />
            </video>
        </div>
        <div>
            <h1>Download your shows</h1>
            <h1>to watch offline</h1>
            <h6>Save your favorites easily and always have </h6>
            <h6>something to watch.</h6>
        </div>
    </main>
    <main>
        <div>
            <h1>Watch everywhere.</h1>
            <h6>Stream unlimited movies and TV shows on</h6>
            <h6>your phone, tablet, laptop, and TV without </h6>
            <h6>paying more.</h6>
        </div>
        <div className='video-div'>
            <video loop muted  autoPlay >
                <source src={video2} />
            </video>
        </div>
    </main>
    <main>
        <div className='video-div'>
            <img src={img} width="500" height="400" />
        </div>
        <div>
            <h1>Create profiles for kids.</h1>
            <h6>Send kids on adventures with their favorite</h6>
            <h6>characters in a space made just for them— </h6>
            <h6>free with your membership.</h6>
        </div>
    </main>
    </>
  )
}

export default Main
