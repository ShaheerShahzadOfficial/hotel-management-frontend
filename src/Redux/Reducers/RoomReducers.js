import {
    ADD_NEW_ROOM_REQUEST,
    ADD_NEW_ROOM_SUCCESS,
    ADD_NEW_ROOM_FAIL,
    ADD_NEW_ROOM_RESET,
    GET_ALL_ROOM_REQUEST,
    GET_ALL_ROOM_SUCCESS,
    GET_ALL_ROOM_Fail
} from "../constants"

const initialState = {
    Room: {},
    error: [],
    message: {}
}

export const AddRoomReducer = (state = initialState, actions) => {

    switch (actions.type) {
        case ADD_NEW_ROOM_REQUEST:
            return {
                loading: true
            }
        case ADD_NEW_ROOM_SUCCESS:
            return {
                loading: false,
                success: true,
                Room:actions.payload
            }
            case ADD_NEW_ROOM_FAIL:
                return {
                    loading: false,
                    success: false,
                    error:actions.payload
                }
                case ADD_NEW_ROOM_RESET:
                    return{
                        loading:false,
                        success:false
                    }
        default:
            return state
    }

}

export const AllRoomReducer = (state = initialState, actions) => {

    switch (actions.type) {
        case GET_ALL_ROOM_REQUEST:
            return {
                loading: true
            }
        case GET_ALL_ROOM_SUCCESS:
            return {
                loading: false,
                success: true,
                Room:actions.payload
            }
            case GET_ALL_ROOM_Fail:
                return {
                    loading: false,
                    success: false,
                    error:actions.payload
                }
        default:
            return state
    }

}