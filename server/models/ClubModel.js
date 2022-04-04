import mongoose from "mongoose";

const clubSchema = mongoose.Schema({
    clubID: Number,
    clubName: String,
    description: String,
    meetingTime: String,
    announcement: String,
    location: String,
    picture: String,//Base64
    theme:{
        type: Number,
        default:0
    }
});

const ClubModel = mongoose.model('ClubModel', clubSchema);

export default ClubModel;