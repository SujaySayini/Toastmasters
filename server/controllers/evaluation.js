import evaluationModel from "../models/evaluationModel.js"
import speechModel from "../models/speechModel.js"


/**
    * Gets all evaluations matching given conditions from the database
    *
    * @param req Contains the request from the client side, req.body contains the specific params we search the evals for
    * @param res the response, we can use this to send a response back to the client
    */
export const getEvaluation = async (req, res)=>{
    try {
        let evaluations = ''    
        evaluations = await evaluationModel.find(req.body);
        res.status(200).json(evaluations);
    } catch (error) {
        res.status(404).json({message: error.message});
        
    }
}

/**
    * Creates a new evaluation in the database
    *
    * @param req Contains the request from the client side, req.body eval data we can use to create the eval/search for a speech
    * @param res the response, we can use this to send a response back to the client
    */
export const createEvaluation = async (req, res)=>{
    const evaluation = req.body;
    const existingSpeech = await speechModel.findOne({clubName: evaluation.clubName, speechType: 'Pathways Speech', speechDate: evaluation.speechDate, speechGiver: evaluation.speechGiver});
    // checking to make sure that we are creating an evaluation for a valid speech, cannot evaluate a speech that doesnt exist
    if(existingSpeech){

        // if the improvement field exists, that means someone actually filled out an evaluation and sent it in
        // since you need to sign up for an eval before giving one, we update the eval rather than creating a new one
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

        //if someone was instead signing up for an eval, we simply create it and save it to the db
        const newEvaluation = new evaluationModel(evaluation);
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