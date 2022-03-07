/* eslint-disable no-unused-vars */
import axios from  'axios';
import jwtDecode from 'jwt-decode';
import { useContext } from 'react';
import Auth from '../contexts/Auth';
import { getItem, addItem, removeItem} from './LocaleStorage'


const instance = axios.create({
    baseURL: 'https://dyl-api.herokuapp.com',
});

export function hasAuthenticated() {
    const token = getItem("token");
    const resultToken = token ? tokenIsValid(token) : false;
    if (false === resultToken) {
        removeItem('token')
    }
    return resultToken
}


export default function LoginAxios(credentials) {
    return instance
        .post('/login', credentials)
        .then(response => {
            response

            addItem('token', response.data.tokenGenerated);
            addItem('userId', response.data.userId);
            return (true, response)
        })
        .then(token => {
            console.log(token)
            return true
        }).catch((err)=>{
            console.log(err.reponse.status)
        })

}

export function logout() {
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
    setIsAuthenticated(false)
    logout
    removeItem('token')
}
function tokenIsValid(token) {
    const { exp } = jwtDecode(token);

    if(exp * 1000 > new Date().getTime()){
        return true
    }
    return false
}