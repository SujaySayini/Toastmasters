import axios from 'axios';
const devURL = 'http://localhost:5000'
const publicURL = 'https://nick-toastmasters-app.herokuapp.com'
let theURL = ''
if(true){
  theURL = devURL
} else {
  theURL = publicURL
}

/**
    * Sends information from signin form to server's /users/signin page using axios. will login/fail depending on credentials 
    *
    * @param  formData   Information from the sign in form.
    *   
    */

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

/**
    * Sends information from signup form to server's /users/signup page using axios. will create a new user or return an error message if it fails 
    *
    * @param  formData   Information from the sign up form.
    *   
    */

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



/**
    * Sends information from change password form to server's /users/changePassword page which will change the user's password using axios
    *
    * @param  formData   Information from the change password form.
    *   
    */
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


 /**
    * Sends information from profile page to the route on the server which will deregister user using axios
    *
    * @param  email   email stored in cookie from profile page.
    *   
    */

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



 /**
    * Sends information from profile page to the route on the server which will change user's data using axios
    *
    * @param  email   email stored in cookie from profile page.
    *  @param  formData   new data that the user's profile will be updated to contain
    */

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