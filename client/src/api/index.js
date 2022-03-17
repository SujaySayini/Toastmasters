import axios from 'axios';

const url = 'http://localhost:5000/speech';
const url2 = 'http://localhost:5000/deletespeech'
const url3 = 'http://localhost:5000/timer'

export const fetchSpeech = () => axios.get(url)
export const createSpeech = (newSpeech) => axios.post(url, newSpeech)
export const deleteSpeech = (speech) =>axios.post(url2, speech)
export const setTime = (data) => axios.post(url3, data)

