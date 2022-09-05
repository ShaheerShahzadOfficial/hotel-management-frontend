import React, { useState } from "react"
import "./signin.css"
import loginSignUp from "../../Images/LoginSignUp.png"
import { useNavigate } from "react-router-dom"
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { useDispatch, useSelector } from "react-redux"
import { Login } from "../../Redux/Actions/UserActions"
import Loader from "../../loader/Loader"
import swal from 'sweetalert';

const SignIn = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const { loading, error, user } = useSelector(state => state.Auth)

    const history = useNavigate()

    const dispatch = useDispatch()

    const errors = () => {
        if (Email === "") {
            setEmailError("Email can't be empty")
        }

        if (Password === "") {
            setPasswordError("Password can't be empty")
        }

        const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const Pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;

        if (Email && Password) {
            setPasswordError("")
            setPasswordError("")


            if (email.test(Email) === true) {

                setEmailError("")

                if (Pass.test(Password) === true) {
                    setPasswordError("")
                    dispatch(Login(Email, Password))
                    if (error?.msg === 'User Not Found') {
                        swal({
                            text: "You Are Not A User",
                            icon: "error",
                            button: "Sorry !",
                        });
                    }
                    if (error?.msg === 'Email or Password not matched') {
                        swal({
                            text: "Email or Password doesn't matched",
                            icon: "error",
                            button: "Sorry !",
                        });
                    }

                    if (user) {
                        swal({
                            text: "You Are Successfully Logged In",
                            icon: "success",
                            button: "great !",
                        })
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
            {loading ? <Loader /> : <div className="SubSignIn">
                <div>
                    <h1>Sign In</h1>
                    <br />


                    <div>
                        {
                            emailError ? <ReportProblemIcon /> : null
                        }
                        <input placeholder={"Email"} aria-label="Email" value={Email} onChange={e => setEmail(e.target.value)} />
                        {
                            emailError ? <><p style={{ color: "#fb4c55", margin: "0", fontWeight: "600" }}>{emailError}</p>  <br /> </> : <> <br /><br /> </>}
                    </div>




                    <div>
                        {
                            passwordError ? <ReportProblemIcon /> : null
                        }
                        <input type="password" placeholder={"Password"} aria-label="Password" value={Password} onChange={e => setPassword(e.target.value)} />
                        {
                            passwordError ? <> <p style={{ color: "#fb4c55", margin: "0", fontWeight: "600" }}>{passwordError}</p> <br /> </> : <> <br /><br /> </>
                        }
                    </div>





                    <button className="signUpbtn" onClick={errors}>Login</button>

                    <br />

                    <p className="Redirect"
                        onClick={() => {
                            history('/register')
                        }}
                    >Not Registered ? <span style={{ color: "#fb4c55" }}>SignUp</span></p>

                </div>



                <div>
                    <img src={loginSignUp} alt="Login Pic" />
                </div>


            </div>}
        </div>

    )
}

export default SignIn