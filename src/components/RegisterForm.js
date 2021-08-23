import React, {useEffect, useState} from 'react'
import '../styles/Form.css'


function RegisterForm() {
    return (
        <div className="card form-card">
            <p className="card-welcome">Welcome to Recipey</p>
            <form  className="register">
               <div className="input-container">
                   <label>Your Name</label>
                    <input className="card input-box" type="text" name="name" />
               </div>
               <div className="input-container">
                   <label>Email</label>
                    <input className="card input-box" type="email" name="email"  />
               </div>
               <div className="input-container">
                    <label>Password</label>
                    <input className="card input-box" type="password" name="password" minLength="8"  />
               </div>
                <button className=" card def-btn" >Sign In</button>
            </form>
        </div>
    )
}

export default RegisterForm
