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

export const getEvaluation = async (date) => {
    try {
        const res = await axios.post(theURL + '/evaluation/get', date).then(
            (response) => { return response.data },
            (error) => {console.log(error)}
        )
        return res;
    } catch (error) {
        console.log(error.message);   
    }
}

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