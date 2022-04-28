import axios from 'axios';



const devURL = 'http://localhost:5000'
const publicURL = 'https://nick-toastmasters-app.herokuapp.com'
let theURL = ''
if(true){
  theURL = devURL
} else {
  theURL = publicURL
}
const baseAPI = axios.create({baseURL: theURL})
const url = theURL+'/speech';
const url2 = theURL+'/deletespeech'
const url3 = theURL + '/timer'
const url4 = theURL+'/commentcard'
const url5 = theURL+'/evaluation'
const url6 = theURL+'/ahcounter'
const url7 = theURL+'/signup'
const url8 = theURL+'/pages'
const url9 = theURL + '/user/admin'

export const setAdmin = async (data) => {
  //console.log('setadmin!')
  axios.post(url9, data)
}
//const url8 = 'theURLusers/signin'
//const url9 = 'theURLusers/signup'
//export const fetchSpeech = (date) => axios.get(url)
export const fetchSpeech2 = async (date) => {
    let theData = []
    await axios.post(theURL+'/speech/test', date).then((response) => {
    theData = response.data
  }, (error) => {
    //console.log(error);
  });
  return theData
}

export const fetchEvaluation = async (date) => {
  let theData = []
  await axios.post(theURL+'/evaluation/get', date).then((response) => {
  theData = response.data
}, (error) => {
  //console.log(error);
});
return theData
}

export const getAllUsers = async (club) => {
  let theData = []
  await axios.post(theURL+'/user/getUser', club).then((response) => {
  theData = response.data
}, (error) => {
  //console.log(error);
});
////console.log(theData);
return theData
}

export const getAllClubs = async (data) => {
  let theData = []
  await axios.post(theURL + '/pages/getClub', data).then((response) => {
  theData = response.data
}, (error) => {
  //console.log(error);
});
////console.log(theData);
return theData
}


export const setTime = async (data) => {
  let theData = []
  await axios.post(url3, data).then((response) => {
  theData = response.data
}, (error) => {
  //console.log(error);
});
//console.log("the data is " + theData);
return theData
}

export const postAhCounter = async (data) => {
  let theData = []
  await axios.post(url6, data).then((response) => {
  theData = response.data
}, (error) => {
  //console.log(error);
});
//console.log("the data for ah " + theData);
return theData
}

export const createSpeech = (newSpeech) => axios.post(url, newSpeech)
export const deleteSpeech = (speech) =>axios.post(url2, speech)

export const createPages = (newPage) =>axios.post(url8, newPage)
export const fetchAllPages = async (clubsData) => {
  let theData = []
  await axios.get(url8,clubsData).then((response) => {
  theData = response.data
}, (error) => {
  //console.log(error);
});
//console.log("Got it");
////console.log(theData);
return theData
}




//export const fetchPage=() =>baseAPI.get('/');
export const fetchPageBySearch =(searchQuery) => baseAPI.get(`/pages/search?searchQuery=Club`)
//export const setTime = (data) => axios.post(url3, data)
//export const fetchPage=() =>baseAPI.get('/');
//export const fetchPostsBySearch =(searchQuery) => baseAPI.get(`/search?searchQuery=${searchQuery.search || 'none'}`)
//export const setTime = (data) => axios.post(url3, data)
export const addCommentCards = (data) => axios.post(url4, data)
export const createEvaluation = (data) => axios.post(url5, data)
//export const postAhCounter = (data) => axios.post(url6, data)
export const createUser = (data) => axios.post(url7, data)
export const changeUserRole = (data) => axios.post(theURL+'/user/changeUserRole', data)
export const removeUserClub = (data) => axios.post(theURL+'/user/removeUserClub', data)
//export const AUTH='AUTH';
//export const LOGOUT='LOGOUT';
export const signIn=(formData)=>baseAPI.post('/users/signin', formData).then((response) => {
  const theData = response
  return theData
}, (error) => {
  //console.log(error);
});;
export const signUp=(formData)=>baseAPI.post('/users/signup', formData).then((response) => {
  //const theData = response.status
  const theData = response
  return theData
}, (error) => {
  //this error function is called upon an error in the post. however it doesn't retain the data, just that an error happened. you can see this by //console logging the error and seeing that its just blank
  //console.log(error)
  return {status: 400, data: {message: 'Could Not Sign Up :('}};
});;
export const changePassword=(formData)=>baseAPI.post('/users/changePassword', formData).then((response) => {
  const theData = response
  return theData
}, (error) => {
  //console.log(error);
});;

//export const signIn=(data)=>axios.post(url8, data);
//export const signUp=(data)=>axios.post(url9, data);
export const clubDeregister=(email)=>baseAPI.post('/users/clubDeregister', email).then((response) => {
  const theData = response.status
  return theData
 }, (error) => {
  //console.log(error);
 });;
 export const updateProfile=(formData)=>baseAPI.post('/users/updateProfile', formData).then((response) => {
  const theData = response
  return theData
 }, (error) => {
  //console.log(error);
 });;



 export const setClubActive = async (data) => {
  let theData = []
  await axios.post(theURL + '/pages/setActive', data).then((response) => {
  theData = response.data
}, (error) => {
  //console.log(error);
});
////console.log(theData);
return theData
}
  

export const findOneClub =async(data) => {
  let theData = []
  await axios.post(theURL + '/pages/getOneClub', data).then((response) => {
    theData = response.data
  }, (error) => {
    //console.log(error);
  });
  ////console.log(theData);
  return theData
}
 //export const signIn=(data)=>axios.post(url8, data);
 //export const signUp=(data)=>axios.post(url9, data);
  
  
 

