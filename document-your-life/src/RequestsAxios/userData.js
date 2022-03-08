import axios from 'axios'


let access_token = localStorage.getItem('token')
let userId = localStorage.getItem('userId')

const instance = axios.create({
    baseURL: 'https://dyl-api.herokuapp.com',
    timeout: 1000
});

export default function getUserData() {
    try{
 const res = instance.get(`/user/${userId}/profil`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })
        return res
    }
    catch (err) {
        return err.res;
    }
    }