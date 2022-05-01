import mongoose from "mongoose";

const clubSchema = mongoose.Schema({
    clubName:{
        type:String,
        require: true,
    },
    
    description: String,
    location: String,
    meetingTime: String, // need to have specific format
    email: String,
    website: String,
    extraContactInfo: String,
    announcement: String,
    active: String,
<<<<<<< HEAD
    location: String, //may need to have more fields (zipcode, etc)
    picture: String
=======
     //may need to have more fields (zipcode, etc)
>>>>>>> fefd86085b73d86ebc4fc50687beb59ae5d92b4e
});

const ClubModel = mongoose.model('ClubModel', clubSchema);

export default ClubModel;