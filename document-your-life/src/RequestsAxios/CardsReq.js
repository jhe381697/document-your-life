/* eslint-disable no-undef */
import axios from "axios";
import { getItem } from "../service/LocaleStorage";


const instance = axios.create({
    baseURL: 'https://dyl-server-back.herokuapp.com',
    timeout: 1000
});

export default async function getAllCards(cardId) {
    let access_token = getItem('token')
    let userId = getItem('userId')
    try {
        const res = await instance.get(`/user/${userId}/cards/${cardId}`, {
            headers: {
                'Authorization': `Bearer ${access_token}`,
            }
        })
        console.table('getAllCards', res)
        return res
    }
    catch (err) {
        return err.res;
    }
}
export async function getTodayCard() {
    let access_token = getItem('token')
    let userId = getItem('userId')
    try {
        const response = await instance.get(`/user/${userId}/dashboard`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            },
        })
        console.log('getTodayCard', response)
        return response
    }
    catch (err) {
        console.table(err.response)
        return err.response;
    }
}
/**
 * 
 * @param {string}- text,moodLabel
 */
export async function putTodayCardText(value) {
    let access_token = getItem('token')
    let userId = getItem('userId')
    try {
        const res = await instance.put(`/user/${userId}/cards/today`, {
            text: value,
            headers: {
                'Authorization': `Bearer ${access_token}`,
            }
        }
        )
        console.table('putTodayCard', res)
        return res
    }
    catch (err) {
        console.log(err.res)
        return err.res;
    }
}
/**
 * 
 * @param {string}- text,moodLabel
 */
export async function putTodayCarMood(value) {
    let access_token = getItem('token')
    let userId = getItem('userId')
    try {
        const res = await instance.put(`/user/${userId}/cards/today`, {
            'moonLabel': value,
            headers: {
                'Authorization': `Bearer ${access_token}`,
            },
        }
        )
        console.table('putTodayCard', res)
        return res
    }
    catch (err) {
        console.log(err.res)
        return err.res;
    }
}

/**
 * 
 * @param1 {string}- audio,video,image
 * @param2 {string}- {value} 
 * @returns 
 */
export async function patchTodayCardFiles(type, value) {
    let access_token = getItem('token')
    let userId = getItem('userId')
    const formData = new FormData();
    formData.append(type, value)
    try {
        const res = await instance.patch(`/user/${userId}/cards/${type}`,
            formData, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            },
        }
        )
        console.table('patchTodayCard', res)
        return res
    }
    catch (err) {
        console.log(err.res)
        return err.res;
    }
}