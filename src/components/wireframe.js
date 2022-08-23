import React from 'react'
import "./styles/wireframe.css"
import image from "./images/blackImg.png"
import ph1 from "./images/ph1.png"
import ph2 from "./images/ph2.png"
const wireframe = () => {
  return (
    <>
    <div className='wire'>
    <h2 style={{textAlign: "center"}}>Medium-<span style={{background: "white", color: "black", borderRadius: "5px"}}>fidelity</span></h2>
      <div className='dotted'>
        <h1>wireframes.</h1>
      </div>
    {/* <div  className='dot left'></div>
    <div  className='dot right'></div> */}

    <div className='dotted2'>
         <p>To go from idea to design faster we have prepared a comprehensive</p>
         <p>set tof ready-to-use components, templates, and more.</p>
      </div>
    

    <div className='end'>
        <div>
            <p>DESKTOP . 1920</p>
        </div>
        <div>
            <p>TABLET . 768</p>
        </div>
        <div>
            <p>MOBILE . 375</p>
        </div>
    </div>

    <div className='image'>
        <img width={"80%"} src={image} alt="wireframe Img"></img>
    </div>

    <div className='phones'>
      <img id={"ph1"} src={ph1} alt="ph1"></img>
      <h1>Community Stats</h1>
      <img id={"ph2"} src={ph2} alt="ph2"></img>
    </div>
    </div>
    
    </>
  )
}

export default wireframe
