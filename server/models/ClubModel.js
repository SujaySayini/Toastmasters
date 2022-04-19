import mongoose from "mongoose";

const clubSchema = mongoose.Schema({
    clubName:{
        type:String,
        require: true,
    },
    
    description: String,
    meetingTime: String, // need to have specific format
    announcement: String,
    location: String, //may need to have more fields (zipcode, etc)
    picture: String
});

const ClubModel = mongoose.model('ClubModel', clubSchema);

export default ClubModel;