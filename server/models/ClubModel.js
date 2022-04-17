import mongoose from "mongoose";

const clubSchema = mongoose.Schema({
    clubID: Number,
    clubName: String,
    description: String,
    meetingTime: String, // need to have specific format
    announcement: String,
    active: String,
    location: String, //may need to have more fields (zipcode, etc)
});

const ClubModel = mongoose.model('ClubModel', clubSchema);

export default ClubModel;