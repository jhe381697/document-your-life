import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://dyl-api.herokuapp.com',
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
export async function patchAvatar(type, value) {
    let userId = localStorage.getItem('userId')
    let access_token = localStorage.getItem('token')
    const formData = new FormData();
    formData.append(type, value)
    const res = await instance.patch(`/user/${userId}/avatar`,
        formData, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        },
    })
    console.log(res)
    return res


}