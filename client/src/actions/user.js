import * as api from '../api';
 
//functions that return actions
 
/*export const getSpeech = () => async (dispatch) => {
   try {
       const { data } = await api.fetchSpeech();
       dispatch({type: 'FETCH', payload:data});
       return data;
   } catch (error) {
       console.log(error.message);
      
   }
} */
 
/*export const getUser = () => async (dispatch) => {
   try {
       //const { data } = await api.fetchSpeech();
       //dispatch({type: 'FETCH', payload:data});
       //return data;
   } catch (error) {
       console.log(error.message);
      
   }
 
}
*/
export const getUsers = (club) => async (dispatch) => {
    try {
        //const { data } = await api.fetchSpeech(date);
        const data2 = await api.getAllUsers(club);
        console.log(data2)
        dispatch({type: 'FETCH', payload:data2});
        return data2;
    } catch (error) {
        console.log(error.message);
        
    }

}
 
 
/*export const createSpeech = (speech) => async(dispatch) => {
   try {
       const { data } = await api.createSpeech(speech)
       dispatch({type:"CREATE", payload: data})
   } catch (error) {
       console.log(error);
   }
} */
//create the user using newUser input and export the user
////send to the api createUser
export const createUser = (newUser) => async(dispatch) => {
   try {
       const { data } = await api.createUser(newUser)
       dispatch({type:"CREATE", payload: data})
   } catch (error) {
       console.log(error);
   }
}
 
 
 
 
/*export const deleteSpeech = (speech) => async(dispatch) => {
   try {
       const { data } = await api.deleteSpeech(speech)
       dispatch({type:"DELETE", payload: data})
   } catch (error) {
       console.log(error);
   }
} */
 

export const AUTH='AUTH';
export const LOGOUT='LOGOUT';
