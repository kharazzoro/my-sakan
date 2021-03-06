const axios = require('axios');
const apiUrl = process.env.REACT_APP_API_URI || 'http://localhost:4000';

const ApiClient={

    GetCountries:()=>{
        return axios.get(`${apiUrl}/api/countries/all`)
    },
    postReca:(data)=>{
        return axios.post(`${apiUrl}/api/countries/contact`,{data})
    },
    GetFlatCountryAndRentOrSale:(country,rentOrSale)=>{
        return axios.get(`${apiUrl}/api/flat/${country}/${rentOrSale}`)
    },
    GetSingleFlat:(flatId)=>{
        return axios.get(`${apiUrl}/api/flat/${flatId}`)
    },
    PostCreateAccount:(username,password)=>{
        return axios.post(`${apiUrl}/create-account`,{
            username:username,
            password:password
        })
    },
    PostLogin:(username,password)=>{
        return axios.post(`${apiUrl}/login/client-side`,{
            username:username,
            password:password
        })
    },
    getUserProfile:(user)=>{
        return axios.get(`${apiUrl}/api/users/${user.id}`)
    }
}

export default ApiClient;