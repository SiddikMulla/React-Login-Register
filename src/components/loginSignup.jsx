import React, { useState } from 'react'
import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import './loginSignup.css'
export default function LoginSignup() {
  const [action, setAction] = useState("login");
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        
        <div className="inputs">
         
          {action === "login" ? <div></div> : 
           <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder='Name' />
            </div>
          }


          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email' />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' />
          </div>
          <div className="forget-password">Forget Password </div>
          <div className="submit-container">
            <div className={action === "login" ? "submit grey" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
            <div className={action === "Sign Up" ? "submit grey" : "submit"} onClick={() => { setAction("login") }}>login</div>
          </div>
        </div>
      </div>
    </>
  )
}
