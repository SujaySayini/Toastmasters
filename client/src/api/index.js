import axios from 'axios';

const baseAPI = axios.create({baseURL:'http://localhost:5000/'})
const url = 'http://localhost:5000/speech';
const url2 = 'http://localhost:5000/deletespeech'
const url3 = 'http://localhost:5000/timer'
const url4 = 'http://localhost:5000/commentcard'
const url5 = 'http://localhost:5000/evaluation'

export const fetchSpeech = () => axios.get(url)
export const createSpeech = (newSpeech) => axios.post(url, newSpeech)
export const deleteSpeech = (speech) =>axios.post(url2, speech)
<<<<<<< HEAD

export const fetchPage=() =>baseAPI.get('/');
export const fetchPostsBySearch =(searchQuery) => baseAPI.get(`/search?searchQuery=${searchQuery.search || 'none'}`)
=======
export const setTime = (data) => axios.post(url3, data)
export const addCommentCards = (data) => axios.post(url4, data)
export const createEvaluation = (data) => axios.post(url5, data)
>>>>>>> 166e8639dcccf52b2ca23b8af79d9c16afd79ec1
