import React, { useState } from 'react'
import "./styles/Users.css"
const Users = () => {
  const [email, setEmail] = useState("");
  const [show, setShow] =useState(false);

  const handleChange = (e)=>{
    setEmail(e.target.value)
  } 
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(email)
    setShow(true);    
  }
  return (
    <div className='Users'>
      {(!show)? <>
        <form onSubmit={handleSubmit}>
        <h1>Register wih us using mail Right Now!!!</h1>
        <input onChange={handleChange} type={"email"} name="email"></input><br/>
        <button type='submit'>Lets GO!!</button>
      </form> 
      </> : <>
        <h1>Thanks for Signing Up!!!</h1>
        <h3>You Will hear from us soon!!</h3>
      </>}
    </div>
  )
}

export default Users
