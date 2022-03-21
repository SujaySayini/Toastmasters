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

export const setTimer = (data) => async(dispatch) => {
    try {
        console.log('called action')
        const { res } = await api.setTime(data)
        dispatch({type:"SETTIME", payload: res})
    } catch (error) {
        console.log(error)
    }
}

export const createCommentCard = (data) => async(dispatch) => {
    try {
        const { res } = await api.addCommentCards(data)
        dispatch({type:"ADDCOMMENTCARD", payload: res})
    } catch (error) {
        console.log(error)
        
    }
}
