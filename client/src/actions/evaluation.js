import * as api from '../api';

//functions that return actions

export const getEvaluation = (date) => async (dispatch) => {
    try {
        const  data2  = await api.fetchEvaluation(date);
        console.log(data2)
        dispatch({type: 'FETCH', payload:data2});
        return data2;
    } catch (error) {
        console.log(error.message);
        
    }

}

export const createEvaluation = (evaluation) => async(dispatch) => {
    try {
        const  data  = await api.createEvaluation(evaluation)
        return data
        dispatch({type:"CREATE", payload: data})
    } catch (error) {
        console.log(error);
    }
}