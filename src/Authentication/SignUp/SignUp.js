import React, { useState } from "react"
import "./signup.css"
import loginSignUp from "../../Images/LoginSignUp.png"
import { useNavigate } from "react-router-dom"
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import {useDispatch,useSelector} from "react-redux"
import {RegisterUser} from "../../Redux/Actions/UserActions"
import Loader from "../../loader/Loader"
import swal from 'sweetalert';

const SignUp = () => {
    const [Role, setRole] = useState("")
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [NameError, setNameError] = useState("")

const {loading,error} = useSelector(state=>state.Auth)

    const history = useNavigate()

const dispatch = useDispatch()

    const errors = () => {
        if (Name === "") {
            setNameError("Name can't be empty")
        }
        if (Email === "") {
            setEmailError("Email can't be empty")
        }

        if (Password === "") {
            setPasswordError("Password can't be empty")
        }
if(Role === ""){
    swal({
        text: "You Forgot to Choose Your Role!",
        icon: "error",
        button: "Sorry !",
      });
}
        const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const Pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;

        if (Email && Password && Name && Role) {
            setPasswordError("")
            setPasswordError("")
            setNameError("")

            if (email.test(Email) === true) {

                setEmailError("")
            
                if (Pass.test(Password) === true) {
                    setPasswordError("")
                    dispatch(RegisterUser(Name,Email,Password,Role))
                    if(error?.msg === 'User Already Exist with this Name'){
                        swal({
                            text: "User Already Exist with this Name",
                            icon: "error",
                            button: "Sorry !",
                          });
                    }

                    if(error?.msg === 'User Already Exist with this Email'){
                        swal({
                            text: "User Already Exist with this Email",
                            icon: "error",
                            button: "Sorry !",
                          });
                    }


                } else {
                    setPasswordError("Password must Contain Capital/Small letter symbol and number")
                }

            } else {
                setEmailError("Enter Valid Email")
            }


        }
    }



    return (
        <div className="SignUp">
            <div style={{ paddingTop: "2vmin" }} />
           {loading?<Loader/>: <div className="SubSignUp">
                <div>
                    <h1>SignUp</h1>

                    <div> {
                            NameError ? <ReportProblemIcon  /> : null
                        }
                        <input type="text" value={Name} onChange={e => setName(e.target.value)} placeholder={"Name"} aria-label="Name" />
                        {
                            NameError ? <> <p style={{ color: "#fb4c55",margin:"0",fontWeight:"600" }}>{NameError}</p> <br/> </>: <> <br /><br /> </>
                        }
                    </div>
                


                    <div>
                        {
                            emailError ? <ReportProblemIcon  /> : null
                        }
                        <input placeholder={"Email"} aria-label="Email" value={Email} onChange={e => setEmail(e.target.value)} />
                        {
                            emailError ? <><p style={{ color: "#fb4c55",margin:"0",fontWeight:"600" }}>{emailError}</p>  <br /> </>: <> <br /><br /> </>

                        }
                    </div>


                    <div>
                        {
                            passwordError ? <ReportProblemIcon  /> : null
                        }
                        <input type="password" placeholder={"Password"} aria-label="Password" value={Password} onChange={e => setPassword(e.target.value)} />
                        {
                            passwordError ? <> <p style={{ color: "#fb4c55" , margin:"0",fontWeight:"600" }}>{passwordError}</p> <br/> </>:  <> <br /><br /> </>
                        }
                    </div>


                    <div>

                        <select className="select"
                            onChange={e => setRole(e.target.value)}
                            value={Role}>
                            <option value="">Choose Your Role</option>
                            <option value="Customer">Customer</option>
                            <option value={"Manager"}>Manager</option>
                        </select>

                    </div>

                    <br />

                    <button className="signUpbtn" onClick={errors}>SignUp</button>



                    <p className="Redirect"
                        onClick={() => {
                            history('/login')
                        }}
                    >Already Have An Account ? <span style={{ color: "#fb4c55" }}>Login</span></p>
                </div>





                <div>
                    <img src={loginSignUp} alt="Login Pic" /></div>


            </div>}
        </div>
    )
}

export default SignUp