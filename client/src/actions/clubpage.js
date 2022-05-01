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
    * Sends data to server to create a club
    *
    * @param page contains the data for the new club (name, contact info, etc)
    */
export const createPages = async(page) => {
    try {
        const res = await axios.post(theURL + '/pages', page)
        return res  
    } catch (error) {
        console.log(error.message);
    }
}

/**
    * Used to get ALL clubs from the server that fit a certain condition
    *
    * @param data an object which specifies what conditions the clubs we are searching for must satisfy
    */

export const getClubs = async (data) =>{
    try {
        const res = await axios.post(theURL + '/pages/getClub', data).then(
            (response) => { return response.data },
            (error) => {console.log(error)}
        )
        return res;
    } catch (error) {
        console.log(error.message);
    }

}

/**
    * Sends info to server to tell it to update the active status of a club
    *
    * @param data contains both the club's name and the new value its active field should be set to
    */

export const setClubActive = async (data) => {
    try {
        const res = await axios.post(theURL + '/pages/setActive', data).then(
            (response) => { return response.data },
            (error) => {console.log(error)}
        )
        return res;
    } catch (error) {
        console.log(error.message);   
    }
}

/**
    * Used to find a singular club fitting params (in practice used to find a club by name)
    *
    * @param data params we want the club to match
    */

export const findOneClub = async (data) => {
    try {
        const res = await axios.post(theURL + '/pages/getOneClub', data).then(
            (response) => { return response.data },
            (error) => {console.log(error)}
        )
        return res;
    } catch (error) {
        console.log(error.message);
        
    }
}


/**
    * Sends data to server to tell it to change the user's club
    *
    * @param  data contains both the user as well as their new club
    */

export const setUserClub = async(data)=>{
    try {
        const res = await axios.post(theURL + '/pages/setUserClub', data).then(
            (response) => { return response.data },
            (error) => {console.log(error)}
        )
        return res;
    } catch (error) {
        console.log(error.message);
        
    }
}
