import React from 'react'
import chart1 from './images/chart1.png'
import chart2 from './images/chart2.png'
import "./styles/Chart.css"

const Chart = () => {
  return (
    <div className='Chart'>
        <div className='flex1'>
           <div>
              <img src={chart1} alt="image1"></img>
           </div>
           <div>
              <p style={{fontSize: "30px"}}>Explore <span style={{color: "cyan"}}>market</span></p>
              <p style={{fontSize: "50px",background: "linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3)", borderRadius: "15px", padding: "0 10px"}}>high trends</p>
           </div>
        </div>

        <div className='flex2'>
           <div>
              <img src={chart2} alt="image2"></img>
           </div>
        </div>
    </div>
  )
}

export default Chart
