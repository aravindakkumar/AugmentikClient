import React from 'react'

const Card = (props) => {
    const heading = props.heading;
    const week = props.week;
    // const content = props.content;
  return (
    <div style={{background: "linear-gradient(317deg, rgba(2,0,36,1) 0%, rgba(91,23,79,1) 35%, rgba(0,212,255,1) 100%)", padding: "20px 40px", borderRadius: "20px", boxShadow: "5px 7px black", color:"white"}}>

      <h1>{heading}</h1>
      <h4>--- {week} weeks</h4>

    <p>Defining of A Person</p><br/>
    <p>Visual Concept</p><br/>
    <p>Specification</p><br/>
    <p>Style Realizing</p><br/>
    </div>
  )
}

export default Card
