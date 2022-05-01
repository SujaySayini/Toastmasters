import axios from 'axios';
const devURL = 'http://localhost:5000'
const publicURL = 'https://nick-toastmasters-app.herokuapp.com'
let theURL = ''
if(true){
  theURL = devURL
} else {
  theURL = publicURL
}
export const getPages = async (clubsData) => {
    try {
        const res = await axios.post(theURL + '/pages', clubsData).then(
            (response) => { return response },
            (error) => {console.log(error)}
        )
        return res;
    } catch (error) {
        console.log(error.message);
    }

}
export const getPageBySearch = async (searchQuery) => {
    try{
        const res = await axios.get(theURL + '/pages/search?searchQuery=Club')
        return res
    }catch(error){
        console.log(error);
    }
}
export const createPages = async(page) => {
    try {
        const res = await axios.post(theURL + '/pages', page)
        return res  
    } catch (error) {
        console.log(error.message);
    }
}

export const getClubs = async (data) =>{
    try {
        const res = await axios.post(theURL + '/pages/getClub', data).then(
            (response) => { return response.data },
            (error) => {console.log(error)}
        )
        return res;
    } catch (error) {
        console.log(error.message);
    }

}

export const setClubActive = async (data) => {
    try {
        const res = await axios.post(theURL + '/pages/setActive', data).then(
            (response) => { return response.data },
            (error) => {console.log(error)}
        )
        return res;
    } catch (error) {
        console.log(error.message);   
    }
}

export const findOneClub = async (data) => {
    try {
        const res = await axios.post(theURL + '/pages/getOneClub', data).then(
            (response) => { return response.data },
            (error) => {console.log(error)}
        )
        return res;
    } catch (error) {
        console.log(error.message);
        
    }
}

export const setUserClub = async(data)=>{
    try {
        const res = await axios.post(theURL + '/pages/setUserClub', data).then(
            (response) => { return response.data },
            (error) => {console.log(error)}
        )
        return res;
    } catch (error) {
        console.log(error.message);
        
    }
}
