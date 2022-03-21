import mongoose from "mongoose";

const speechSchema = mongoose.Schema({
    clubName: String,
    speechType: String,
    speechDate: String,
    speechGiver: String,
    speechEvaluator: String,
    speechTitle: String,
    time: String,
    fillerWords: {
        Ah: Number,
        Um: Number, 
        Er: Number, 
        Well: Number, 
        So: Number,
        Like: Number,
        But: Number,
        Other: Number
    },
    commentCards: [[String]]
});

const speechModel = mongoose.model('SpeechModel', speechSchema);

export default speechModel;