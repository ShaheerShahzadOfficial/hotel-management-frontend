import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { AddRoomReducer } from '../Reducers/RoomReducers';
import {AuthReducers,ProfileReducers,GetAllUser,UpdateUserRole,userDetailsReducer} from "../Reducers/UserReducers"




const rootReducer = combineReducers({
    Auth:AuthReducers,
    updateProfile:ProfileReducers,
    AdminAllUser:GetAllUser,
    RoleUpdate:UpdateUserRole,
    UserDetail:userDetailsReducer,
    AddProduct:AddRoomReducer
})


const initialState = {

}





const Store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)


export default Store