import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://dyl-api.herokuapp.com',
    timeout: 1000
});
let access_token = localStorage.getItem('token')
let userId = localStorage.getItem('userId')

export default async function LoginAxios(email, password) {
    try {
        const response = await instance.post('/login', {
            email: email,
            password: password,
        })
        return response;
    }
    catch (err) {
        return err.response;
    }
}

export function GetProfile() {
    console.log("LocalStorage user value:", userId)
    instance.get(`/user/${userId}/profil`, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    }
    )
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.error(error)
        })

}