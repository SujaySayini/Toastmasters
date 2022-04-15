import * as api from '../api';

export const getPages = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPages();
        dispatch({type: 'FETCH', payload:{page: data}});
        
    } catch (error) {
        console.log(error.message);
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