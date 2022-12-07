import { users } from "../Actions/Users/UserAction"
import { CREATE_NEW_USER, DELETE_USER, EDIT_USER, GET_USER, GET_USERS } from "../types"

const initialState = {
    users: [],
    user: {},
    loading: true
}

const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload,
                loading: false,
                user: null
            }
        case GET_USER:
            return {
                ...state,
                user: payload,
                loading: false,
                users: state.users
            }
        case CREATE_NEW_USER:
            return {
                ...state,
                user: payload.data,
                loading: false,
            }
        case EDIT_USER:
            return {
                ...state,
                users: state.users,
                user: payload.data,
                loading: false,
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== payload.id),
                loading: false,
            }
        default:
            return state
    }
}



export default UserReducer