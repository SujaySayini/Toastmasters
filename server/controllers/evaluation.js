import evaluationModel from "../models/evaluationModel.js"
import speechModel from "../models/speechModel.js"

export const getEvaluation = async (req, res)=>{
    try {
        console.log(req.body)
        let evaluations = ''    
        evaluations = await evaluationModel.find(req.body);
        console.log(evaluations);
        res.status(200).json(evaluations);
    } catch (error) {
        res.status(404).json({message: error.message});
        
    }
}

export const createEvaluation = async (req, res)=>{
    
    const evaluation = req.body;
    console.log(req.body)
    const existingSpeech = await speechModel.findOne({speechType: evaluation.speechType, speechDate: evaluation.speechDate, speechGiver: evaluation.speechGiver});
    if(existingSpeech){
        const newEvaluation = new evaluationModel(evaluation);
        console.log(newEvaluation)
        try {
            await newEvaluation.save();
            res.status(201).json(newEvaluation)
        } catch (error) {
            console.log(error)

            res.status(409).json({message: error.message});
        
        }
    }
}