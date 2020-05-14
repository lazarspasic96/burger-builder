import * as actionTypes from '../actionTypes'
import axios from 'axios'


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}



export const authSuccess = (token, userId) => {

    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}


export const checkAuthTimeout = (expirationTime) => {
    console.log(expirationTime)
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 100 );
    }
}

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart())

        const authdata = {
            email: email,
            password: password,
            returnSecureToken: true,


        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAzSBD8VWZa6Mr0VJ5FI7E8JS2bblbo6Gw'
        if (!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAzSBD8VWZa6Mr0VJ5FI7E8JS2bblbo6Gw'
        }
        axios.post(url, authdata)

            .then(res => {
                console.log(res.data)
                dispatch(authSuccess(res.data.idToken, res.data.localId))
                console.log(res.data.expiresIn)
                dispatch(checkAuthTimeout(res.data.expiresIn))

            })
            .catch(error => {
   

                dispatch(authFail(error.response.data.error))
            })
    }
}