import mongoose from "mongoose";

const evaluationSchema = mongoose.Schema({
    speechDate: String,
    speechGiver: String,
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
    additionalComments: String
});

const speechModel = mongoose.model('EvaluationModel', evaluationSchema);

export default speechModel;