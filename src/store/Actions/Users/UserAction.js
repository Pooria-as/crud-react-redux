import axios from "axios"
import { CREATE_NEW_USER, DELETE_USER, EDIT_USER, GET_USER, GET_USERS } from "../../types"




export const users = () => async (dispatch) => {
    try {
        const users = await axios.get(process.env.REACT_APP_USERS_API)
        const { data } = await users
        dispatch({
            type: GET_USERS,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}


export const Newuser = (name, email, password, age) => async (dispatch) => {
    try {
        const data = {
            name,
            email,
            password,
            age
        }
        await axios.post(process.env.REACT_APP_USERS_API, data)
        dispatch({
            type: CREATE_NEW_USER,
            payload: { data, msg: "success" }
        })

    } catch (error) {
        console.log(error)
    }
}


export const getUserById = (id) => async (dispatch) => {
    try {

        const userById = await axios.get(process.env.REACT_APP_USERS_API + `/${id}`)
        const { data } = await userById
        dispatch({
            type: GET_USER,
            payload: data
        })

    } catch (error) {
        console.log(error)
    }
}





export const editUser = (UserId, name, email, password, age) => async (dispatch) => {
    try {
        const data = {
            name,
            email,
            password,
            age
        }
        await axios.put(process.env.REACT_APP_USERS_API + `/${UserId}`, data)
        dispatch({
            type: EDIT_USER,
            payload: { data, msg: "success" }
        })

    } catch (error) {
        console.log(error)
    }
}




export const deleteUser = (id) => async (dispatch) => {
    try {

        await axios.delete(process.env.REACT_APP_USERS_API + `/${id}`)
        dispatch({
            type: DELETE_USER,
            payload: { id, msg: "success" }
        })

    } catch (error) {
        console.log(error)
    }
}
