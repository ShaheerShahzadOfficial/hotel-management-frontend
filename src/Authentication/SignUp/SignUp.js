import React, { useState } from "react"
import "./signup.css"
import loginSignUp from "../../Images/LoginSignUp.png"
import { useNavigate } from "react-router-dom"      
const SignUp = () => {
    const [Role, setRole] = useState("")
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

const history = useNavigate()
   
    return (
        <div className="SignUp">
            <div style={{ paddingTop: "2vmin" }} />
            <div className="SubSignUp">
                <div>
                    <h1>SignUp</h1>

                    <div>
                        <input type="text" value={Name} onChange={e => setName(e.target.value)} placeholder={"Name"} aria-label="Name" />
                    </div>
                    <br />

                    <div>
                        <input placeholder={"Email"} aria-label="Email" value={Email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <br />

                    <div>
                        <input type="password" placeholder={"Password"} aria-label="Password" value={Password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <br />

                    <div>

                        <select className="select"
                            onChange={e => setRole(e.target.value)}
                            value={Role}>
                            <option value="">Choose Your Role</option>
                            <option>Customer</option>
                            <option>Manager</option>
                        </select>

                    </div>

                    <br />
              
                    <button className="signUpbtn">SignUp</button>
                    
            

                    <p className="Redirect"
                        onClick={() => {
                            history('/login')
                        }}
                    >Already Have An Account ? <span style={{ color: "#fb4c55" }}>Login</span></p>
                </div>





                <div>
                    <img src={loginSignUp} alt="Login Pic" /></div>


            </div>
        </div>
    )
}

export default SignUp