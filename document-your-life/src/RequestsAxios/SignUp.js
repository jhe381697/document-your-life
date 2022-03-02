import axios from 'axios'

/**
 * @param {*} email 
 * @param {*} firstName 
 * @param {*} lastName 
 * @param {*} password 
 * @param {*} passwordconf 
 */
 export default function SignupAxios(email, firstName, lastName, password, passwordConf) {
     axios.post('https://dyl-api.herokuapp.com/signup', {
         email: email,
         first_name: firstName,
         last_name: lastName,
         password: password,
         passwordConfirm: passwordConf,
     })
         .then(function (response) {
             console.log(response);
         })
         .catch(function (error) {
             console.log(error);
         });
 }

// export default  function SignupAxios() {
//    axios.post('https://dyl-api.herokuapp.com/signup', {
//         email: "fmip11111@gmail.com",
//         first_name: "firstName",
//         last_name: "lastName",
//         password: "P1!assword",
//         passwordConfirm: "P1!assword",
//     }).then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }
