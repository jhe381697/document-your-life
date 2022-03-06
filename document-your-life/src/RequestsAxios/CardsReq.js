/* eslint-disable no-undef */
import axios from "axios";

let access_token = localStorage.getItem('token')
let userId = localStorage.getItem('userId')

const instance = axios.create({
    baseURL: 'https://dyl-api.herokuapp.com',
    timeout: 1000
});

export default async function getAllCards() {
    try {
        const res = await instance.get(`/user/${userId}/cards/${cardId}`, {
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
export async function patchTodayCard() {
    try {
        const res = await instance.patch(` /user/:userId/cards/today`, {
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
export async function postTodayCard() {
    try {
        const res = await instance.post(`/user/:userId/cards/today`, {
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