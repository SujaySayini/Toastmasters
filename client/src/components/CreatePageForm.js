import React,{useState} from 'react'
import {TextField, Button, Typography, Paper} from "@material-ui/core"
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPages } from '../actions/clubpage'
const CreatePageForm = () => {
 

  /*clubID: Number,
    clubName: String,
    description: String,
    meetingTime: String,
    announcement: String,
    location: String,
    picture: String,//Base64*/
  const [pageData, setPageData] = useState({
    createPageInfo: "", 
    clubID:"",
    clubName:"",
     description:"", 
     meetingTime:"", 
     announcement:"",
     location:"", 
     picture:""
  });
  const dispatch = useDispatch();
  const handleSubmit = async (e) =>{
    

      e.preventDefault();
    // add in user data, pass in the user's email as well
    const res = await dispatch(createPages(pageData));
    //console.log(res)
    if(res){
    alert("Club has been created!");
    
    clear()
    } else {
      alert("Name is taken")
    }


  }
  const clear = () =>{
    setPageData({createPageInfo: "", clubID:"",clubName:"",
    description:"", meetingTime:"", email: "", extraContactInfo: "", website: "", announcement:"",
    location:"", picture:""})
  }
  return (

    
    <div>
      <form autoCapitalize='off' noValidate onSubmit={handleSubmit} style={{marginBottom: '10px', marginTop: '20px'}}>
        <Typography variant = "h6" style = {{textAlign: 'left', marginBottom: '10px'}}>
          General Info
        </Typography>
        <TextField name="clubName" variant='outlined' fullWidth label="Club name"
        value={pageData.clubName}
        onChange={(e)=> setPageData({...pageData, clubName: e.target.value})} style={{marginBottom: '10px'}}/>
        <TextField name="description" variant='outlined' fullWidth label="Description"
        value={pageData.description} 
        onChange={(e)=> setPageData({...pageData, description: e.target.value})} style={{marginBottom: '10px'}}/>

        <Typography variant = "h6" style = {{textAlign: 'left', marginBottom: '10px'}}>
          Meeting Info
        </Typography>
        <TextField name="location" variant='outlined' fullWidth label="Location"
        value={pageData.location}
        onChange={(e)=> setPageData({...pageData, location: e.target.value})} style={{marginBottom: '10px'}}/>

        <TextField name="meetingTime" variant='outlined' fullWidth label="Time (i.e 8:00 PM - 9:00 PM)"
        value={pageData.meetingTime}
        onChange={(e)=> setPageData({...pageData, meetingTime: e.target.value})} style={{marginBottom: '10px'}}/>

        <Typography variant = "h6" style = {{textAlign: 'left', marginBottom: '10px'}}>
          Contact Info
        </Typography>
        
        <TextField name="email" variant='outlined' fullWidth label="Email"
        value={pageData.email}
        onChange={(e)=> setPageData({...pageData, email: e.target.value})} style={{marginBottom: '10px'}}/>

        <TextField name="website" variant='outlined' fullWidth label="Website (optional)"
        value={pageData.website}
        onChange={(e)=> setPageData({...pageData, webiste: e.target.value})} style={{marginBottom: '10px'}}/>

        <TextField name="extraContactInfo" variant='outlined' fullWidth label="Additional Contact Info (social media, phone, etc.)"
        value={pageData.extraContactInfo}
        onChange={(e)=> setPageData({...pageData, extraContactInfo: e.target.value})} style={{marginBottom: '10px'}}/>

        <div>
          <FileBase type="picture" multiple={false} onDone={({base64})=> setPageData({ ... pageData, picture: base64})}>
            Upload a Photo
            </FileBase>
        </div>
        <Button style={{display: 'inline-block'}}className='submitBut' variant='contained' size='large' type="submit" >Create</Button>
        <p></p>
        <Button style={{display: 'inline-block'}}className='clearBut' variant='contained' size='large' onClick={clear} >Clear</Button>
      </form>

    </div>
  )
}

export default CreatePageForm