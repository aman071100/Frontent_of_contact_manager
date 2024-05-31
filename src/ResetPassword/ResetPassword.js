import React, { useState } from 'react'
import "./ResetPassword.css"
import hide from "../Assets/hide.png"
import view from "../Assets/view.png"
import password_img from "../Assets/password.png"
import { toast } from 'react-toastify'
import makeHttpRequest from '../httpServices'
import { useParams } from 'react-router-dom'
export default function ForgotPassword() {
    const {id} = useParams();
    const [password, setPassword] = useState({
        password : '',
        confirmPassword : ""
    });
    const [showPass, setShowPass] = useState({
        password : false,
        confirmPassword : false
    })

    const changeHandler = (e) => {
        setPassword({
            ...password,
            [e.target.name]: e.target.value
        })
    }

    const showHandler = (field)=>{
        setShowPass({
            ...showPass,
            [field]: !showPass[field]
        })
    }

    const submitHandler = async ()=>{
        try {
            if(password.password  !== password.confirmPassword){
                toast.error("New password and confirm password must be same.");
                return;
            }

            const data = {
                password : password.password
            }

            const resp = await makeHttpRequest("patch", `resetPassword/${id}`, data)
            setPassword({
                password :"",
                confirmPassword :""
            })
        } catch (error) {
            
        }
    }

    return (
        <div className='container'>
            <div className='header'>
                <div className="text">Reset Password</div>
                <div className="underline" id='1'></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={password_img} alt='' />
                    <input type={showPass.password ? "text" : "password"} name='password' id='password' placeholder='Enter Your Password' onChange={changeHandler}/>
                    <img src={showPass.password ? hide : view} alt="" className='view' onClick={()=>showHandler("password")}/>
                </div>
                <div className="input">
                    <img src={password_img} alt='' />
                    <input type={showPass.confirmPassword ? "text" : "password"} name='confirmPassword' placeholder='Enter Your Confirm Password' onChange={changeHandler}/>
                    <img src={showPass.confirmPassword ? hide : view} alt="" className='view' onClick={()=>showHandler('confirmPassword')}/>
                </div>

            </div>
            <div className="submit-container">
                <div className="submit" onClick={submitHandler}>Submit</div>
            </div>
        </div>
    )
}

