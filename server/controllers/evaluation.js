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
    const existingSpeech = await speechModel.findOne({clubName: evaluation.clubName, speechType: 'Pathways Speech', speechDate: evaluation.speechDate, speechGiver: evaluation.speechGiver});
    if(existingSpeech){
        if(evaluation.improvement){
            await evaluationModel.updateOne({clubName: evaluation.clubName, speechGiver: evaluation.speechGiver, speechDate: evaluation.speechDate}, 
            {$set: {
               positive: evaluation.positive,
               challenge: evaluation.challenge,
               improvement: evaluation.improvement,
               clarity: evaluation.clarity,
               vocalVariety: evaluation.vocalVariety,
               eyeContact: evaluation.eyeContact,
               gestures: evaluation.gestures,
               audienceAwareness: evaluation.audienceAwareness,
               comfortLevel: evaluation.comfortLevel,
               interest: evaluation.interest,
               additionalComments: evaluation.additionalComments 
            }})
            res.status(201).send({ifExists: 'Yes'})
            return
        }
        console.log(existingSpeech)
        const newEvaluation = new evaluationModel(evaluation);
        console.log(newEvaluation)
        try {
            await newEvaluation.save();
            res.status(201).send({ifExists: 'Yes'})
        } catch (error) {
            console.log(error)

            res.status(409).json({message: error.message});
        
        }
    } else {
        res.status(201).send({ifExists: 'No'})

    }
}