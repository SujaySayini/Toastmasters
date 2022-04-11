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
//const url8 = 'http://localhost:5000/users/signin'
//const url9 = 'http://localhost:5000/users/signup'
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

export const fetchEvaluation = async (date) => {
  let theData = []
  await axios.post('http://localhost:5000/evaluation/get', date).then((response) => {
  theData = response.data
}, (error) => {
  console.log(error);
});
return theData
}

export const getAllUsers = async (club) => {
  let theData = []
  await axios.post('http://localhost:5000/user/getUser', club).then((response) => {
  theData = response.data
}, (error) => {
  console.log(error);
});
console.log(theData);
return theData
}
export const setTime = async (data) => {
  let theData = []
  await axios.post(url3, data).then((response) => {
  theData = response.data
}, (error) => {
  console.log(error);
});
console.log("the data is " + theData);
return theData
}

export const postAhCounter = async (data) => {
  let theData = []
  await axios.post(url6, data).then((response) => {
  theData = response.data
}, (error) => {
  console.log(error);
});
console.log("the data for ah " + theData);
return theData
}



export const createSpeech = (newSpeech) => axios.post(url, newSpeech)
export const deleteSpeech = (speech) =>axios.post(url2, speech)
export const fetchPages = () =>axios.get(url8);
export const createPages = (newPage) =>axios.post(url8, newPage)


//export const fetchPage=() =>baseAPI.get('/');
//export const fetchPostsBySearch =(searchQuery) => baseAPI.get(`/search?searchQuery=${searchQuery.search || 'none'}`)
//export const setTime = (data) => axios.post(url3, data)
export const fetchPage=() =>baseAPI.get('/');
export const fetchPostsBySearch =(searchQuery) => baseAPI.get(`/search?searchQuery=${searchQuery.search || 'none'}`)
//export const setTime = (data) => axios.post(url3, data)
export const addCommentCards = (data) => axios.post(url4, data)
export const createEvaluation = (data) => axios.post(url5, data)
//export const postAhCounter = (data) => axios.post(url6, data)
export const createUser = (data) => axios.post(url7, data)
//export const AUTH='AUTH';
//export const LOGOUT='LOGOUT';
export const signIn=(formData)=>baseAPI.post('/users/signin', formData).then((response) => {
  const theData = response
  return theData
}, (error) => {
  console.log(error);
});;
export const signUp=(formData)=>baseAPI.post('/users/signup', formData).then((response) => {
  //const theData = response.status
  const theData = response
  return theData
}, (error) => {
  //this error function is called upon an error in the post. however it doesn't retain the data, just that an error happened. you can see this by console logging the error and seeing that its just blank
  console.log(error)
  return {status: 400, data: {message: 'Could Not Sign Up :('}};
});;
export const changePassword=(formData)=>baseAPI.post('/users/changePassword', formData).then((response) => {
  const theData = response.status
  return theData
}, (error) => {
  console.log(error);
});;

//export const signIn=(data)=>axios.post(url8, data);
//export const signUp=(data)=>axios.post(url9, data);

