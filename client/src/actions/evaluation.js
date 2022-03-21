import * as api from '../api';

//functions that return actions

export const createEvaluation = (evaluation) => async(dispatch) => {
    try {
        const { data } = await api.createEvaluation(evaluation)
        dispatch({type:"CREATE", payload: data})
    } catch (error) {
        console.log(error);
    }
}