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
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('localId')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}


export const checkAuthTimeout = (expirationTime) => {
    console.log(expirationTime)
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000);
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
                const expirationDate = new Date (new Date ().getTime() + res.data.expiresIn * 1000)
                localStorage.setItem('token', res.data.idToken)
                localStorage.setItem('expirationDate', expirationDate )
                localStorage.setItem('userId', res.data.localId)
                dispatch(authSuccess(res.data.idToken, res.data.localId))
                console.log(res.data.expiresIn)
                dispatch(checkAuthTimeout(res.data.expiresIn))

            })
            .catch(error => {


                dispatch(authFail(error.response.data.error))
            })
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }

}

export const authCheckState = () => {
    const token = localStorage.getItem('token')
    return dispatch => {
        if(!token) {
         
           dispatch(logout())
        }
        else {
            const expirationDate = new Date (localStorage.getItem('expirationDate'))
            const localId = localStorage.getItem('userId')

            if(expirationDate >= new Date()) {
                dispatch(authSuccess(token, localId))
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }

            else {
                dispatch(logout())
            }
        }
    }
}
