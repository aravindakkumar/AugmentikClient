import React from 'react'
import "./styles/Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div>
            <p>UI/UX DESIGN CONCEPT</p>
            <hr width="400rem"></hr>
            <p>REAL ESTATE PLATFORM</p>
        </div>

        <div style={{textAlign: "right"}}> 
            <p>LINK UP DESIGN</p>
            <hr width="400rem" ></hr>
            <p>2022</p>
        </div>
    </div>
  )
}

export default Header
