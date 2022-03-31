import React from 'react';
import Container from 'react-bootstrap/Container';
import NaturePic from '../../assets/images/Nature_04-02.png';
// import playButtonAnimated from '../../assets/images/play-button-animated.svg'
import playButton from '../../assets/images/play-button-svgrepo-com.svg'



const HeroFrontPage = () => {
  return (
    <div className='imageFrontPage imageVeryBig'>
      <h1 className='text-white'>Groove Where You Are</h1>
      <p className='text-white'>
        Film Your World. Discover Others. <br/>Press the Play button below to learn more about the GWYA project!
      </p>
      {/* add styles and responsiveness to play button later --- styles="padding: 100px" */}
      <a href="https://www.youtube.com" >
        <img src={playButton} width="50px" />
        {/* <object type="image/svg+xml" data={playButton} width="50px">LAla</object> */}
      </a>
    </div>
  )

}


export default HeroFrontPage;