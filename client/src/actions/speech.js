import axios from 'axios';
const devURL = 'http://localhost:5000'
const publicURL = 'https://nick-toastmasters-app.herokuapp.com'
let theURL = ''
if(true){
  theURL = devURL
} else {
  theURL = publicURL
}

export const getSpeech = async (date) => {
    try {
        const res = await axios.post(theURL+'/speech/test', date).then(
            (response) => {return response.data}, 
            (error) => {console.log(error);});
        return res
    } catch (error) {
        console.log(error.message); 
    }
}

export const createSpeech = async (speech) => {
    try {
        const data = await axios.post(theURL+'/speech', speech)
        return data
    } catch (error) {
        console.log(error);
    }
}

export const deleteSpeech = async (speech) =>  {
    try {
        const  data  = await axios.post(theURL+'/deletespeech', speech)
        return data
    } catch (error) {
        console.log(error);
    }
}

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
