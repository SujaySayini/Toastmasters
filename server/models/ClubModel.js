import mongoose from "mongoose";

const clubSchema = mongoose.Schema({
    clubID: Number,
    clubName: String,
    description: String,
    meetingTime: String, // need to have specific format
    announcement: String,
    location: String,
    picture: String,//Base64
    theme:{
        type: Number,
        default:0
    }, 
    active: String
});

const ClubModel = mongoose.model('ClubModel', clubSchema);

export default ClubModel;