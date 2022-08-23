import React from 'react'
import "./styles/Video.css"
import photo from './images/phone.png';
import Vids from './images/Pex.mp4'

const Video = () => {
  return (
    <>
    <div className='Video'>
      <video width={"100%"} height={"500px"} controls autoPlay loop muted>
        <source src={Vids} type='video/mp4'></source>
      </video>
    

    {/* <div className='phone'>
        
    </div> */}
    
    <div style={{color: "white", margin: "60px 0 0 70px", fontSize: "2rem"}}>
      <p style={{paddingTop:"50px"}}>FIND THE RIGHT PLACE</p>
      <br/>
      <br/>
      <img id='one' src={photo} alt='ooo'/>
      <img id='two' src={photo} alt='ooo'/>
    </div>

    </div>
    </>
  )
}

export default Video
