import * as api from '../api';

export const getPages = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPages();
        dispatch({type: 'FETCH', payload:data});
        
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
