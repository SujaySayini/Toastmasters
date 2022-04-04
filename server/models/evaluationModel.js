import mongoose from "mongoose";

const evaluationSchema = mongoose.Schema({
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
    additionalComments: String
});

const evaluationModel = mongoose.model('EvaluationModel', evaluationSchema);

export default evaluationModel;