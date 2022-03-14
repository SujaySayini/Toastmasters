import * as api from '../api';

//functions that return actions

export const getSpeech = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSpeech();
        dispatch({type: 'FETCH', payload:data});
        return data;
    } catch (error) {
        console.log(error.message);
        
    }

}

export const createSpeech = (speech) => async(dispatch) => {
    try {
        const { data } = await api.createSpeech(speech)
        dispatch({type:"CREATE", payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteSpeech = (speech) => async(dispatch) => {
    try {
        const { data } = await api.deleteSpeech(speech)
        dispatch({type:"DELETE", payload: data})
    } catch (error) {
        console.log(error);
    }
}