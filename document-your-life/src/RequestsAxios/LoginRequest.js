import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://dyl-api.herokuapp.com',
    timeout: 1000
});

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

