import axios from 'axios'

  export default function LoginAxios(email, password ){
 const instance = axios.create({
     BaseURL: 'https://dyl-api.herokuapp.com'
 })
 console.log('trying to login')
 let refreshToken;
 instance.post('/login', {
     email: email,
     password: password
 }).then((response) => {
     console.log('auth success');
 instance.defaults.headers.common["authorization"] = `Bearer ${response.data.accessToken}`;
 refreshToken = response.data.refreshToken;
 loadUserInfos()
 }).catch((err)=> {
     console.log(err.response.status);
 });
 function loadUserInfos() {
     instance.get('/login').then((response) => {
         console.log(response.data);
     }).catch((err) => {
         console.log(err.response.status)
     })
 }
 instance.interceptors.response.use((response) => {
     return response;
 },async (error) =>{
     const originalRequest = error.config;
     if (error.config.url != '/refreshToken' && error.response.status === 401 && originalRequest._retry !== true){
         if ( refreshToken && refreshToken!= '') {
             instance.defaults.headers.common['authorization'] = `Bearer ${refreshToken}`;
             console.log('refresh token');
             await instance.post('/refreshToken').then((response) => {
                 instance.defaults.headers.common['authorization'] = `Bearer ${response.data.accessToken}`;
                 originalRequest.headers['authorization'] = `Bearer ${response.data.accessToken}`
             })
         }
     }
 }
 )}

// export default function LoginAxios(email, password) {
//     axios.post('https://dyl-api.herokuapp.com/login',{
//         email:email,
//         password: password,
//      })
//          .then(function (response) {
//              console.log(response);
//          })
//          .catch(function (error) {
//              console.log(error);
//          });
//  }