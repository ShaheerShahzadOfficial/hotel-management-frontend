import React, { useState } from "react"
import "./signin.css"
import loginSignUp from "../../Images/LoginSignUp.png"
import { useNavigate } from "react-router-dom"

const SignIn = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
// const history = useHistory()
const history = useNavigate()
    return (
        <div className="SignUp">
            <div style={{ paddingTop: "2vmin" }} />
            <div className="SubSignIn">
                <div>
                    <h1>Sign In</h1>
                    <br />
                    

                    <div>
                        <input placeholder={"Email"} aria-label="Email" value={Email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <br />
                    <br />

                    <div>
                        <input type="password" placeholder={"Password"} aria-label="Password" value={Password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <br />
                    <br />


                    <button className="signUpbtn">Login</button>

                    <br />
                    <br />

<p className="Redirect" 
onClick={()=>{
    history('/register')
    }  }
    >Not Registered ? <span style={{color:"#fb4c55"}}>SignUp</span></p>

                </div>



                <div>
                    <img src={loginSignUp} alt="Login Pic" />
                </div>


            </div>
        </div>

    )
}

export default SignIn