import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Login")
    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />

                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? <></> : <input type='text' placeholder='Enter your name' required />}

                    <input type="email" placeholder="Enter your email" required />
                    <input type="password" placeholder="Enter your password" required />

                </div>
                <button>{currentState === "Sign Up" ? "Create account" : "Log in"}</button>
                <div className='login-popup-condition'>
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currentState==="Login"?<p>create new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>:
                    <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
                
            </form>
        </div>
    )
}

export default LoginPopup
