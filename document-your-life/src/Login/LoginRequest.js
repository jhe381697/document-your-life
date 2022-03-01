import axios from 'axios'

/**
 * 
 * @param {*} email 
 * @param {*} firstName 
 * @param {*} lastName 
 * @param {*} password 
 * @param {*} passwordconf 
 */
export default function loginAxios() {
    axios.get('https://dyl-api.herokuapp.com/login')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}