import axios from "axios"
import {ADD_NEW_ROOM_REQUEST,ADD_NEW_ROOM_SUCCESS,
    ADD_NEW_ROOM_Fail,GET_ALL_ROOM_REQUEST,GET_ALL_ROOM_SUCCESS,
    GET_ALL_ROOM_Fail,GET_ALL_ROOM_PER_MANAGER_REQUEST,
    GET_ALL_ROOM_PER_MANAGER_SUCCESS,GET_ALL_ROOM_PER_MANAGER_Fail,
    
} from "../constants.js"

const createRoom=(RoomNo,NumberOfBed,Rent,RoomType,Images,Avalablity,Description)=> async (dispatch)=>{
 dispatch({
    type:ADD_NEW_ROOM_REQUEST
 })
    await axios.post("http://localhost:4000/Room/AddRoom", {
        RoomNo,NumberOfBed,Rent,RoomType,Images,Avalablity,Description  
    }, { withCredentials: true, credentials: "include", headers: { "Content-Type": "application/json" } }).then((result) => {
        dispatch({
            type: ADD_NEW_ROOM_SUCCESS,
            payload: result.data
        })
    }).catch((err) => {
        dispatch({
            type: ADD_NEW_ROOM_Fail,
            payload: err.response.data

        })
    });

}


const AllRooms=()=> async (dispatch)=>{
    dispatch({
       type:GET_ALL_ROOM_REQUEST
    })
       await axios.get("http://localhost:4000/Room/AllRooms",{ withCredentials: true, credentials: "include", headers: { "Content-Type": "application/json" } }).then((result) => {
           dispatch({
               type: GET_ALL_ROOM_SUCCESS,
               payload: result.data
           })
       }).catch((err) => {
           dispatch({
               type: GET_ALL_ROOM_Fail,
               payload: err.response.data
   
           })
       });
   
   }
   
   const AllRoomsPerManager=()=> async (dispatch)=>{
    dispatch({
       type:GET_ALL_ROOM_PER_MANAGER_REQUEST
    })
       await axios.get("http://localhost:4000/Room/manager/rooms",{ withCredentials: true, credentials: "include", headers: { "Content-Type": "application/json" } }).then((result) => {
           dispatch({
               type: GET_ALL_ROOM_PER_MANAGER_SUCCESS,
               payload: result.data
           })
       }).catch((err) => {
           dispatch({
               type: GET_ALL_ROOM_PER_MANAGER_Fail,
               payload: err.response.data
   
           })
       });
   
   }

export {
    createRoom,
    AllRooms,
    AllRoomsPerManager

}