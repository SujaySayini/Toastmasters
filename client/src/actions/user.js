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
    * Sends data to server and tells it to retrieve all users matching input params
    *
    * @param club contains the club we want to get users from
    */
 
export const getUsers = async (club) => {
    try {
        const res = await axios.post(theURL+'/user/getUser', club).then(
            (response) => {return response.data},
            (error) => {return error}
        );
        return res
    } catch (error) {
        console.log(error.message);
        
    }

}
 

/**
    * Sends data to server and tells it to update the role for the specified user
    *
    * @param  data contains both the user data and the role that the user should now have
    */
export const changeUserRole = async (data) => {
    try {
        const res = await axios.post(theURL+'/user/changeUserRole', data)
        return res
    } catch (error) {
        console.log(error);
    }
 }

 /**
    * Sends data to server and tells it to set user's club to '' (none)
    *
    * @param  data contains the user data
    */
export const removeUserClub = async (data) => {
    try {
        const res =  await axios.post(theURL+'/user/removeUserClub', data)
        return res
    } catch (error) {
        console.log(error);
    }
 }

 /**
    * tells server to make user an admin 
    *
    * @param  data contains the user who should become an admin
    */

 export const admin = async (data) =>  {
    try {
        const res = await axios.post(theURL+'/user/admin', data)
        return res
    } catch (error) {
        console.log(error);
    }
 }
