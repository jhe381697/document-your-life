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
        console.log(res)
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
        console.log(response)
        return response
    }
    catch (err) {
        console.log(err.response)
        return err.response;
    }
}
/**
 * 
 * @param {string}- id,text,moodLabel,video,image,audio
 * @param {string}- {value} 
 * @id {number}-
 * @text {string}-
 * @moodLabel {string}- neutral, happy, sad, cool
 * @video {video} file-
 * @image {image} file-
 * @audio {audio} file-
 * @returns 
 */
export async function putTodayCardText(value) {
    let access_token = getItem('token')
    let userId = getItem('userId')
    try {
        const response = await instance.put(`/user/${userId}/cards/today`, 
        { text: value }, 
        { headers: {
                'Authorization': `Bearer ${access_token}`,
            },
        }

        )
        console.log('essai de rectification auth', response)
        return response
    }
    catch (err) {
        console.log(err.response)
        return err.response;
    }
}
/**
 * 
 * @param {string}- id,text,moodLabel,video,image,audio
 * @param {string}- {value} 
 * @id {number}-
 * @text {string}-
 * @moodLabel {string}- neutral, happy, sad, cool
 * @video {video} file-
 * @image {image} file-
 * @audio {audio} file-
 * @returns 
 */
export async function putTodayCardMood(value) {
    let access_token = getItem('token')
    let userId = getItem('userId')
    try {
        const response = await instance.put(`/user/${userId}/cards/today`, { moodLabel: value }, {
            headers: {
                'Authorization': `Bearer ${access_token}`,
            },
        }
           
        )
        console.log('essai de rectification auth', response)
        return response
    }
    catch (err) {
        console.log(err.response)
        return err.response;
    }
}


export async function patchTodayCardFiles(type, value) {
    let userId = localStorage.getItem('userId')
    let access_token = localStorage.getItem('token')
    const formData = new FormData();
    formData.append(type, value)
    const res = await instance.patch(`/user/${userId}/cards/${type}`,
        formData, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        },
    })
    console.log(res)
    return res


}

export async function deleteCard(cardId) {
    let access_token = getItem('token')
    let userId = getItem('userId')
    try {
        const response = await instance.delete(`/user/${userId}/cards/${cardId}`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            },
        })
        console.log(response)
        return response
    }
    catch (err) {
        console.log(err.response)
        return err.response;
    }
}