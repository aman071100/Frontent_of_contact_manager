import React, { useState } from 'react'
import "./forgot.css"
import Email from "../Assets/email.png"
import { toast } from 'react-toastify';
import makeHttpRequest from '../httpServices';
export default function ForgotPassword() {
    const [email, setEmail] = useState("");

    const changeHandler = (e) => {
       setEmail(e.target.value)
    }

    const submitHandler = async()=>{
        try {
            if(!email){
                toast.error("Please enter your registered email.")
            }

            const data = {
                email
            }
            const resp = await makeHttpRequest("post", 'forgotPassword', data)
            setEmail("");
        } catch (error) {
            
        }
    }

    return ( 
        <div className='container'>
            <div className='header'>
                <div className="text">Forgot Password</div>
                <div className="underline" id='2'></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={Email} alt='' />
                    <input type='text' name='email' id='email' placeholder='Enter Your Email' onChange={changeHandler}/>
                </div>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={submitHandler}>Submit</div>
            </div>
        </div>
    )
}

