import axios from "axios"
import { LOGIN_USER, LOGIN_USER_FAIL, LOGOUT_USER, LOGOUT_USER_FAIL, REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, LOGIN_USER_REQUEST, LOAD_USER_REQUEST, LOAD_USER, LOAD_USER_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_RESET,  ADMIN_ALL_USERS_REQUEST, ADMIN_ALL_USERS_SUCCESS, ADMIN_ALL_USERS_FAIL, ADMIN_UPDATE_USERS_RESET, ADMIN_UPDATE_USERS_FAIL, ADMIN_UPDATE_USERS_REQUEST, ADMIN_UPDATE_USERS_SUCCESS, USER_DETAILS_REQUEST, USER_DETAILS, USER_DETAILS_FAIL } from "../constants";



export const RegisterUser = (name, email, password) => async (dispatch) => {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    await axios.post("/user/RegisterUser", {
        name, email, password
    }, config).then((result) => {
        dispatch({
            type: REGISTER_USER,
            payload: result.data
        })
    }).catch((err) => {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: err.response.data.message
        })
        console.log(err.response.data)
    });

}


export const Login = (email, password) => async (dispatch) => {

    dispatch({ type: LOGIN_USER_REQUEST });

    await axios.post("/user/Login", {
        email, password
    }, { withCredentials: true, credentials: "include", headers: { "Content-Type": "application/json" } }).then((result) => {
        dispatch({
            type: LOGIN_USER,
            payload: result.data
        })
    }).catch((err) => {
        dispatch({
            type: LOGIN_USER_Fail,
            payload: err.response.data

        })
    });

}


export const LoadUser = () => async (dispatch) => {
    try {


        dispatch({ type: LOAD_USER_REQUEST });


        const { data } = await axios.get("/user/myDetails", { withCredentials: true, credentials: "include" })
        dispatch({
            type: LOAD_USER,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data
        })
    }

}




export const Logout = () => async (dispatch) => {

    await axios.get("/user/login", {
        withCredentials: true,credentials: "include",
    }).then(() => {
        dispatch({
            type: LOGOUT_USER,
        })
    }).catch((err) => {
        dispatch({
            type: LOGOUT_USER_FAIL,
            payload: err.response.data.message
        })
    });

}
