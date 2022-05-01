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
    * Sends info to server to get all speeches matching the given params
    *
    * @param  data contains params to restrict results to only those we want
    */
export const getSpeech = async (data) => {
    try {
        const res = await axios.post(theURL+'/speech/test', data).then(
            (response) => {return response.data}, 
            (error) => {console.log(error);});
        return res
    } catch (error) {
        console.log(error.message); 
    }
}

/**
    * Sends data to server and tells it to create a speech with said data
    *
    * @param  speech the data of the speech we want to create
    */
export const createSpeech = async (speech) => {
    try {
        const data = await axios.post(theURL+'/speech', speech)
        return data
    } catch (error) {
        console.log(error);
    }
}

/**
    * Sends data to server and tells it to delete the speech which matches said data
    *
    * @param  speech the data of the speech we want to delete
    */
export const deleteSpeech = async (speech) =>  {
    try {
        const  data  = await axios.post(theURL+'/deletespeech', speech)
        return data
    } catch (error) {
        console.log(error);
    }
}


/**
    * Sends data to server and tells it to update the time for a given speech
    *
    * @param  data contains both the timer data and the speech that should be updated
    */
export const setTimer = async (data) => {
    try {
        const res = await axios.post(theURL + '/timer', data).then(
            (response) => {return response.data}, 
            (error) => {console.log(error);}
        );
        return res
    } catch (error) {
        console.log(error)
    }
}

/**
    * Sends data to server and tells it to update the comment cards for a given speech
    *
    * @param  data contains both the comment card data and the speech that should be updated
    */

export const createCommentCard = async (data) =>  {
    try {
        const res = await axios.post(theURL+'/commentcard', data).then(
            (response) => {return response},
            (error) => {return error}
        );
        return res
    } catch (error) {
        console.log(error)    
    }
}

/**
    * Sends data to server and tells it to update the fillerwords for a given speech
    *
    * @param  data contains both the ahcounter data and the speech that should be updated
    */
export const createAhCounter = async (data) => {
    try {
        const res = await axios.post(theURL+'/ahcounter', data).then(
            (response) => {return response.data},
            (error) => {return error}
        );
        return res
    } catch (error) {
        console.log(error)
    }
}
