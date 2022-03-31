import * as api from '../api';

//functions that return actions

export const getSpeech = (date) => async (dispatch) => {
    try {
        //const { data } = await api.fetchSpeech(date);
        const  data2  = await api.fetchSpeech2(date);
        console.log(data2)
        dispatch({type: 'FETCH', payload:data2});
        return data2;
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
        const data2 = await api.setTime(data)
        dispatch({type:"SETTIME", payload: data2})
        return data2;
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

// export const createAhCounter = (data) =>async(dispatch) => {
//     const { res } = await api.postAhCounter(data)
//     dispatch({type:"ADDCOMMENTCARD", payload: res})
// }

export const createAhCounter = (data) => async(dispatch) => {
    try {
        console.log('called action')
        const data2 = await api.postAhCounter(data)
        dispatch({type:"ADDAHCOUNTER", payload: data2})
        return data2;
    } catch (error) {
        console.log(error)
    }
}
