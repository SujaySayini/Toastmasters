import mongoose from "mongoose";

const speechSchema = mongoose.Schema({
    speechID: Number,
    speechType: String,
    speechDate: String,
    speechGiver: String,
    speechEvaluator: String,
    speechTitle: String,
    time: String,
});

const speechModel = mongoose.model('SpeechModel', speechSchema);

export default speechModel;