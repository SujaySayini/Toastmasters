import mongoose from "mongoose";

const clubSchema = mongoose.Schema({
    clubID: Number,
    clubName: String,
    description: String,
    meetingTime: String, // need to have specific format
    announcement: String,
<<<<<<< HEAD
    location: String,
    picture: String,//Base64
    theme:{
        type: Number,
        default:0
    }
=======
    location: String, //may need to have more fields (zipcode, etc)
>>>>>>> 9ec04c097cf2325da87f2adc7edc59286351c467
});

const ClubModel = mongoose.model('ClubModel', clubSchema);

export default ClubModel;