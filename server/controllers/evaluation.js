import evaluationModel from "../models/evaluationModel.js"

export const createEvaluation = async (req, res)=>{
    
    const evaluation = req.body;
    console.log(req.body)
    const newEvaluation = new evaluationModel(evaluation);
    console.log(newEvaluation)
    try {
        await newEvaluation.save();
        res.status(201).json(newEvaluation)
    } catch (error) {

        res.status(409).json({message: error.message});
        
    }
}