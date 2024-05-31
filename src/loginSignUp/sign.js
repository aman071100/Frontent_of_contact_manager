import React, { useState } from 'react'
import "./loginSignUp.css"
import user_name from "../Assets/person.png"
import email from "../Assets/email.png"
import password_img from "../Assets/password.png"
import hide from "../Assets/hide.png"
import view from "../Assets/view.png"
import { useNavigate } from 'react-router-dom'
import makeHttpRequest from "../httpServices"
import { toast } from 'react-toastify';

export default function SignIn() {
    const naviagte = useNavigate();
    const [isRegistered, setIsRegistered] = useState(true);
    const [show, setShow] = useState(false);
    const [data, setData] = useState({ name: '', email: '', password: '' })

    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const login = async () => {
        try {
            if (!data.email || !data.password) {
                toast.error("All fields are mandatory!");
                return;
            }

            const userData = {
                email: data.email,
                password: data.password
            };

            const resp = await makeHttpRequest('post', "login", userData);
            localStorage.setItem("token", resp?.token);
            naviagte("/contact-list")

        } catch (error) {

        }
    }

    const submitHandler = async (val) => {
        try {
            if (val === "signup") {
                if (!data.name || !data.email || !data.password) {
                    // console.log('djhfvhjdsvhksdbv')
                    toast.error("All fields are mandatory!");
                    return;
                }

                const userData = {
                    name: data.name,
                    email: data.email,
                    password: data.password
                };

                const resp = await makeHttpRequest('post', "register", userData);
                // console.log(resp);
                login();
            } else if (val === "signin") {
                login();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className="text">{isRegistered ? "Sign In" : "Sign Up"}</div>
                <div className="underlin" id='3'></div>
            </div>
            <div className="inputs">
                {!isRegistered && <div className="input">
                    <img src={user_name} alt='' />
                    <input type='text' name='name' id='full_name' placeholder='Enter Your Full Name' onChange={changeHandler} />
                </div>}
                <div className="input">
                    <img src={email} alt='' />
                    <input type='text' name='email' id='email' placeholder='Enter Your Email' onChange={changeHandler} />
                </div>
                <div className="input">
                    <img src={password_img} alt='' />
                    <input type={show ? 'text' : "password"} name='password' id='password' placeholder='Enter Your Password' onChange={changeHandler} />
                    <img src={show ? hide : view} alt="" className='view' onClick={() => setShow(!show)} />
                </div>
            </div>
            {isRegistered ? <div className="forgot-password">Forgot Password? <span className='forgot1' onClick={() => naviagte("/forgot")}>Click here</span>
                <span onClick={() => { setIsRegistered(!isRegistered); if (show) setShow(false) }}> Sign Up</span></div> :
                <div className="forgot-password"><span className="login" onClick={() => {
                    setIsRegistered(!isRegistered);
                    if (show) setShow(false)
                }}>Log In</span></div>}

            <div className="submit-container">
                {isRegistered ? <div className="submit" onClick={() => submitHandler("signin")}>Sign In</div> :
                    <div className="submit" onClick={() => submitHandler("signup")}>Sign Up</div>}
            </div>
            {/* <ToastContainer /> */}
        </div>
    )
}

