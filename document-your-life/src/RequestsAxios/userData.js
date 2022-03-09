import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://dyl-api.herokuapp.com',
    timeout: 1000
});

export default function getUserData() {
    let userId = localStorage.getItem('userId')
    let access_token = localStorage.getItem('token')
    const res = instance.get(`/user/${userId}/profil`, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
    return res


}