import * as api from '../api';

export const getPages = (clubsData) => async (dispatch) => {
    console.log("getting");
    try {
        console.log("close");
        const {data}  = await api.fetchAllPages(clubsData);
        console.log("should be ok?");
        dispatch({type: 'FETCH_ALL', payload:data});
        console.log(data);
        
    } catch (error) {
        console.log(error.message);
    }

}
export const getPageBySearch = (searchQuery) => async(dispatch) =>{
    try{
        const {data: data}= await api.fetchPageBySearch(searchQuery);
        console.log(data);

    }catch(error){
        console.log(error);

    }
}
export const createPages = (page) => async (dispatch) => {
    try {
        const { data } = await api.createPages(page);
        dispatch({type: 'CREATE', payload:data});
        
    } catch (error) {
        console.log(error.message);
    }

}

export const getClubs = () => async (dispatch) => {
    try {
        //const { data } = await api.fetchSpeech(date);
        const data2 = await api.getAllClubs();
        //console.log(data2)
        dispatch({type: 'FETCH', payload:data2});
        return data2;
    } catch (error) {
        console.log(error.message);
        
    }

}
