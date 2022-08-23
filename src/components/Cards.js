import React from 'react'
import Card from './Card'
import "./styles/Cards.css"
const Cards = () => {
  return (
    <div className='main'>
        <div style={{margin: "30px 100px 80px", color: "white"}}>            
                <p style={{fontSize: "60px", fontFamily: "sans-serif", fontWeight: "normal"}}>Our <span >dynamic</span></p>
                <p style={{fontSize: "70px",fontFamily: "sans-serif", fontWeight: "bolder"}}>discovery workflow.</p>
            
        </div>  

        <div className='Cards'>
            <Card heading="Dipping" week="2"/>
            <Card heading="UX/UI" week="4"/>
            <Card heading="Testing" week="7"/>
        </div>    
    </div>
  )
}

export default Cards
