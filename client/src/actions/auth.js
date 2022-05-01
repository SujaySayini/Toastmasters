import axios from 'axios';
const devURL = 'http://localhost:5000'
const publicURL = 'https://nick-toastmasters-app.herokuapp.com'
let theURL = ''
if(true){
  theURL = devURL
} else {
  theURL = publicURL
}
export const signin = async (formData) => {
    try{
        const res = await axios.post(theURL + '/users/signin', formData).then(
            (response) => { return response },
            (error) => {console.log(error)}
        );
        return res
    }
    catch(error){
        console.log(error)
    }
}

export const signup = async(formData)  => {
    try{
        const res = await axios.post(theURL + '/users/signup', formData).then(
            (response) => {return response},
            (error) => { return {status: 400, data: {message: 'Could Not Sign Up :('}};}
        );
        return res
    }
    catch(error){
        console.log(error)
    }
}

export const changepassword = async (formData) => {
    try{
        const res = await axios.post(theURL + '/users/changePassword', formData).then(
            (response) => {return response},
            (error) => {console.log(error)}
        );
        return res
    }
    catch(error){
        console.log(error)
    }    
}

export const clubderegister = async(email) => {
    try{
        const res = await axios.post(theURL + '/users/clubDeregister', email).then(
            (response) => { return response.status },
            (error) => {console.log(error)}
        );
        return res
    }
    catch(error){
        console.log(error)   
    }
}

export const updateprofile = async (formData,email) => {
    try{
        const res = await axios.post(theURL + '/users/updateProfile', {...formData, email: email}).then(
            (response) => { return response },
            (error) => {console.log(error)}
        );
        return res
    }
    catch(error){
        console.log(error)
    }
}
  
 