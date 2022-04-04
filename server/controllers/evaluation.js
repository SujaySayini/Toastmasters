import evaluationModel from "../models/evaluationModel.js"

export const getSpeech = async (req, res)=>{
    try {
        console.log(req.body)
        let evaluations = ''
        if(req.body.date){   
            evaluations = await evaluationModel.find({speechDate: req.body.date});
        } else {
            evaluations = await evaluationModel.find({speechGiver: req.body.user});
        }
        console.log(evaluations);
        res.status(200).json(evaluations);
    } catch (error) {
        res.status(404).json({message: error.message});
        
    }
}

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