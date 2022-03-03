import axios from 'axios'

export default async function LoginAxios(email, password) {
    try {
        const response = await axios.post('https://dyl-api.herokuapp.com/login', {
            email:email,
            password:password,
        })
        return response;
    }
    catch (err) {
        return err.response;
    }
}


export async function GetProfile() {
    let access_token = localStorage.getItem('token')
    let userId = localStorage.getItem('userId')
    console.log("LocalStorage user value:",userId)
    axios.get(`https://dyl-api.herokuapp.com/user/:${userId}/profil`, {
    headers: {
        'Authorization': `Bearer ${access_token}`
    }
    })
    .then((res) => {
        console.log(res.data)
    })
    .catch((error) => {
        console.error(error)
    })

}