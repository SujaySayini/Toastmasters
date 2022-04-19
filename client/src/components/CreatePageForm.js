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
    console.log(res)
    if(res){
    alert("Club Page has created");
    } else {
      alert("Name is taken")
    }

  }
  const clear = () =>{
    setPageData({createPageInfo: "", clubID:"",clubName:"",
    description:"", meetingTime:"", announcement:"",
    location:"", picture:""})
  }
  return (

    
    <div>
      <form autoCapitalize='off' noValidate onSubmit={handleSubmit} style={{marginBottom: '10px'}}>
        <Typography variant = "h6">
          Create a Club
        </Typography>
        <TextField name="clubName" variant='outlined' fullWidth label="Club name"
        value={pageData.clubName}
        onChange={(e)=> setPageData({...pageData, clubName: e.target.value})} style={{marginBottom: '10px'}}/>
        <TextField name="description" variant='outlined' fullWidth label="Description"
        value={pageData.description} 
        onChange={(e)=> setPageData({...pageData, description: e.target.value})} style={{marginBottom: '10px'}}/>
        <TextField name="announcement" variant='outlined' fullWidth label="Announcement"
        value={pageData.announcement}
        onChange={(e)=> setPageData({...pageData, announcement: e.target.value})} style={{marginBottom: '10px'}}/>
        <TextField name="location" variant='outlined' fullWidth label="Location"
        value={pageData.location}
        onChange={(e)=> setPageData({...pageData, location: e.target.value})} style={{marginBottom: '10px'}}/>
        <div>
          <FileBase type="picture" multiple={false} onDone={({base64})=> setPageData({ ... pageData, picture: base64})}>
            Upload a Photo
            </FileBase>
        </div>
        <Button className='submitBut' variant='container' size='large' type="submit" fullWidth>Create</Button>
        <Button className='clearBut' variant='container' size='large' onClick={clear} fullWidth>Clear</Button>
      </form>

    </div>
  )
}

export default CreatePageForm