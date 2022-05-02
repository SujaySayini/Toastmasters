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
    * Tells server to get evaluations that match given params
    *
    * @param  data params which the evals we want must match 
    */

export const getEvaluation = async (data) => {
    try {
        const res = await axios.post(theURL + '/evaluation/get', data).then(
            (response) => { return response.data },
            (error) => {console.log(error)}
        )
        return res;
    } catch (error) {
        console.log(error.message);   
    }
}

/**
    * Sends info to server to create a new eval
    *
    * @param  evaluation contains all data that to store the new eval
    */

export const createEvaluation = async (evaluation) => {
    try {
        const res = await axios.post(theURL + '/evaluation', evaluation).then(
            (response) => { return response},
            (error) => {console.log(error)}
        )
        return res;
    } catch (error) {
        console.log(error);
    }
}