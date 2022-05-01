import axios from 'axios';
const devURL = 'http://localhost:5000'
const publicURL = 'https://nick-toastmasters-app.herokuapp.com'
let theURL = ''
if(true){
  theURL = devURL
} else {
  theURL = publicURL
}
//functions that return actions
 
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
 
//create the user using newUser input and export the user
////send to the api createUser
export const createUser = async(data) => {
   try {
       const res = await axios.post(theURL+'/signup', data)
       return res
   } catch (error) {
       console.log(error);
   }
}

export const changeUserRole = async (data) => {
    try {
        const res = await axios.post(theURL+'/user/changeUserRole', data)
        return res
    } catch (error) {
        console.log(error);
    }
 }

export const removeUserClub = async (data) => {
    try {
        const res =  await axios.post(theURL+'/user/removeUserClub', data)
        return res
    } catch (error) {
        console.log(error);
    }
 }

 export const admin = async (data) =>  {
    try {
        const res = await axios.post(theURL+'/user/admin', data)
        return res
    } catch (error) {
        console.log(error);
    }
 }
