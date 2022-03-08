/* eslint-disable no-undef */
import axios from "axios";
import { getItem } from "../service/LocaleStorage";

let access_token = getItem('token')
let userId = getItem('userId')

const instance = axios.create({
    baseURL: 'https://dyl-api.herokuapp.com',
    timeout: 1000
});

export default async function getAllCards() {
    try {
        const res = await instance.get(`/user/${userId}/cards/${cardId}`, {
            text: "text",
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
    try {
        const response = await instance.get(`/user/${userId}/dashboard`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            },
        })
        return response
    }
    catch (err) {
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
export async function putTodayCard(type,value) {
    const formData = new FormData();
    formData.append(type, value)
    try {
        const res = await instance.put(`/user/${userId}/cards/today`, 
            formData, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            },
        }

        )
        return res
    }
    catch (err) {
        return err.res;
    }
}