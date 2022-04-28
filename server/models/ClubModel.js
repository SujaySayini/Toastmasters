import mongoose from "mongoose";

const clubSchema = mongoose.Schema({
    clubID: Number,
    clubName: String,
    description: String,
    location: String,
    meetingTime: String, // need to have specific format
    email: String,
    website: String,
    extraContactInfo: String,
    announcement: String,
    active: String,
     //may need to have more fields (zipcode, etc)
});

const ClubModel = mongoose.model('ClubModel', clubSchema);

export default ClubModel;