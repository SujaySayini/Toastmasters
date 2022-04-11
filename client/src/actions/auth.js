//import {AUTH} from '../constants/actionTypes'
import {AUTH} from './user.js'
import * as api from '../api/index.js'

//import dispatch from ''


export const signin =(formData, navigate) => async(dispatch) => {
try{

    console.log(formData);
    const data=await api.signIn(formData);
    return data
   // console.log(data);
    dispatch({type:AUTH,  payload: data});
    //login the user 
    //navigate to the home page 

    //navigate.push('/');
    navigate('/');


}
catch(error){
    console.log(error)


}




}

export const signup =(formData, navigate) => async(dispatch) => {
    try{

        console.log(formData);
    const data=await api.signUp(formData);
    console.log('---------------------')
    console.log(data)
    return data
        ////const {data}=await api.signUp(formData);
    ////dispatch({type:AUTH, data});
        //login the user 
        //navigate to the home page 
    
        //history.push('/');
        navigate('/');
    
    
    }
    catch(error){
        console.log(error)
    
    
    }
    
    
    
    
    }

    export const changepassword =(formData, navigate) => async(dispatch) => {
        try{
    
            console.log(formData);
        const data=await api.changePassword(formData);
        return data
            ////const {data}=await api.signUp(formData);
        ////dispatch({type:AUTH, data});
            //login the user 
            //navigate to the home page 
        
            //history.push('/');
            navigate('/');
        
        
        }
        catch(error){
            console.log(error)
        
        
        }
        
        
        
        
        }

    //const res = await dispatch(changePassword(formData, navigate))