import axios from 'axios';

const baseAPI = axios.create({baseURL:'http://localhost:5000/'})
const url = 'http://localhost:5000/speech';
const url2 = 'http://localhost:5000/deletespeech'

export const fetchSpeech = () => axios.get(url)
export const createSpeech = (newSpeech) => axios.post(url, newSpeech)
export const deleteSpeech = (speech) =>axios.post(url2, speech)

export const fetchPage=() =>baseAPI.get('/');
export const fetchPostsBySearch =(searchQuery) => baseAPI.get(`/search?searchQuery=${searchQuery.search || 'none'}`)
