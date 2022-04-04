import axios from 'axios';

const baseAPI = axios.create({baseURL:'http://localhost:5000/'})
const url = 'http://localhost:5000/speech';
const url2 = 'http://localhost:5000/deletespeech'
const url3 = 'http://localhost:5000/timer'
const url4 = 'http://localhost:5000/commentcard'
const url5 = 'http://localhost:5000/evaluation'
const url6 = 'http://localhost:5000/ahcounter'
const url7 = 'http://localhost:5000/signup'
const url8 = 'http://localhost:5000/pages'

//export const fetchSpeech = (date) => axios.get(url)
export const fetchSpeech2 = async (date) => {
    let theData = []
    await axios.post('http://localhost:5000/speech/test', date).then((response) => {
    theData = response.data
  }, (error) => {
    console.log(error);
  });
  return theData
}
export const createSpeech = (newSpeech) => axios.post(url, newSpeech)
export const deleteSpeech = (speech) =>axios.post(url2, speech)
export const fetchPages = () =>axios.get(url8);
export const createPages = (newPage) =>axios.post(url8, newPage)


//export const fetchPage=() =>baseAPI.get('/');
//export const fetchPostsBySearch =(searchQuery) => baseAPI.get(`/search?searchQuery=${searchQuery.search || 'none'}`)
export const setTime = (data) => axios.post(url3, data)
export const addCommentCards = (data) => axios.post(url4, data)
export const createEvaluation = (data) => axios.post(url5, data)
export const postAhCounter = (data) => axios.post(url6, data)
export const createUser = (data) => axios.post(url7, data)

