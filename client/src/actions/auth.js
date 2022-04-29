//import {AUTH} from '../constants/actionTypes'
import {AUTH} from './user.js'
import * as api from '../api/index.js'


/**
    * Sends information from signin form to api signIn 
    *
    * @param  formData   Information from the sign in form.
    *   
    */
export const signin =(formData, navigate) => async(dispatch) => {
try{

    //console.log(formData);
    const data=await api.signIn(formData);
    return data


}
catch(error){
    //console.log(error)


}


}

/**
    * Sends information from signup form to api signUp 
    *
    * @param  formData   Information from the sign up form.
    *   
    */
export const signup =(formData, navigate) => async(dispatch) => {
    try{

        //console.log(formData);
    const data=await api.signUp(formData);
    return data
    
    }
    catch(error){
        //console.log(error)
    
    
    }
    
    }

    /**
    * Sends information from change password form to api changePassword
    *
    * @param  formData   Information from the change password form.
    *   
    */
    export const changepassword =(formData, navigate) => async(dispatch) => {
        try{
    
        const data=await api.changePassword(formData);
        return data
        
        }
        catch(error){
            //console.log(error)
        
        
        }
    
        
        
        }

    /**
    * Sends information from profile page to api clubDeregister
    *
    * @param  formData   email stored in cookie from profile page.
    *   
    */
    export const clubderegister =(email) => async(dispatch) => {
       
        try{
   

       const data=await api.clubDeregister(email);
        return data
        }
        catch(error){
            console.log(error)
       
       
        }
        }
        export const updateprofile =(formData,email) => async(dispatch) => {
            //user.email
            try{
               // console.log(email)
                //console.log({...formData, email: email});
            //const data=await api.changePassword(formData);
           const data=await api.updateProfile({...formData, email: email});
            return data
           
            }
            catch(error){
                console.log(error)
           
           
            }
           
       
       
       
        }
  
 