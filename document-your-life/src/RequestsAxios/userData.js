import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://dyl-api.herokuapp.com',
    timeout: 1000
});

export default function getUserData() {
let userId = localStorage.getItem('userId')
let access_token = localStorage.getItem('token')
    console.log('1',userId)
    if (userId === null) {
        console.log('2', userId)
    } else {
        const res = instance.get(`/user/${userId}/profil`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })
        console.log('3', userId)
        return res
   
}
    }