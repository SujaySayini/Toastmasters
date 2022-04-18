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
    export const clubderegister =(email, navigate) => async(dispatch) => {
        //user.email
        try{
   
            console.log(email);
        //const data=await api.changePassword(formData);
       const data=await api.clubDeregister(email);
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
        export const updateprofile =(formData,email, navigate) => async(dispatch) => {
            //user.email
            try{
       
                console.log(formData, email);
            //const data=await api.changePassword(formData);
           const data=await api.updateProfile(formData, email);
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
  
 