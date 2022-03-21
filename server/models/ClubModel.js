import mongoose from "mongoose";

const clubSchema = mongoose.Schema({
    clubID: Number,
    clubName: String,
    description: String,
    meetingTime: String,
    announcement: String,
    location: String,
});

const ClubModel = mongoose.model('ClubModel', clubSchema);

export default ClubModel;