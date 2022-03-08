import React, { useState } from "react";
 
const UploadAndDisplayImage = () => {
 const [selectedImage, setSelectedImage] = useState(null);
 
 return (
     <center>
   <div>
     <h8>Upload Profile Image</h8>
     {selectedImage && (
       <div>
       <img alt="not fount" width={"115px"} src={URL.createObjectURL(selectedImage)} />
     <br/>
       <button onClick={()=>setSelectedImage(null)}>Remove</button>
       </div>
     )}
     <br />
   
     <br />
     <input
       type="file"
       name="myImage"
       onChange={(event) => {
         console.log(event.target.files[0]);
         setSelectedImage(event.target.files[0]);
       }}
     />
   </div>
   </center>
 );
};
 
export default UploadAndDisplayImage;
