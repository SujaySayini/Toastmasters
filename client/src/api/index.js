import axios from 'axios';

const url = 'http://localhost:5000/speech';
const url2 = 'http://localhost:5000/deletespeech'

export const fetchSpeech = () => axios.get(url)
export const createSpeech = (newSpeech) => axios.post(url, newSpeech)
export const deleteSpeech = (speech) =>axios.post(url2, speech)

