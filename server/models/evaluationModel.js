import mongoose from "mongoose";

const evaluationSchema = mongoose.Schema({
    clubName: String,
    speechDate: String,
    speechGiver: String,
    speechType: String,
    speechEvaluator: String,
    positive: String,
    challenge: String,
    improvement: String,
    clarity: Number,
    vocalVariety: Number,
    eyeContact: Number,
    gestures: Number,
    audienceAwareness: Number,
    comfortLevel: Number,
    interest: Number,
    additionalComments: String, 
    time: String,
    fillerWords:  {
        Ah: Number,
        Um: Number, 
        Er: Number, 
        Well: Number, 
        So: Number,
        Like: Number,
        But: Number,
        Repeats: Number,
        Other: Number
    }
});

const evaluationModel = mongoose.model('EvaluationModel', evaluationSchema);

export default evaluationModel;