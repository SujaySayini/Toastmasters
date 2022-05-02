import evaluationModel from "../models/evaluationModel.js";
import speechModel from "../models/speechModel.js"

/**
    * gets speeches matching input params
    *
    * @param req Contains the request from the client side, req.body contains params for the speech to match
    * @param res the response, we can use this to send a response back to the client
    */

export const getSpeech = async (req, res)=>{
    try {
        let speeches = await speechModel.find(req.body);
        res.status(200).json(speeches);
    } catch (error) {
        res.status(404).json({message: error.message});
        
    }
}

/**
    * Creates a new speech with the given data
    *
    * @param req Contains the request from the client side, req.body contains the data of the new speech
    * @param res the response, we can use this to send a response back to the client
    */

export const createSpeech = async (req, res)=>{
    
    const speech = req.body;
    const newSpeech = new speechModel(speech);
    try {
        await newSpeech.save();
        res.status(201).json(newSpeech)
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


/**
    * Deletes speeches (including evals)
    *
    * @param req Contains the request from the client side, req.body contains the data of the speech to delete
    * @param res the response, we can use this to send a response back to the client
    */


export const deleteSpeech = async (req, res)=>{
    try {
        const speech = req.body;
        let speeches = []
        if (req.body.speechType === 'Evaluator' ){
            speeches = await evaluationModel.deleteOne({speechDate: req.body.speechDate, speechType: req.body.speechType, speechEvaluator: req.body.speechGiver});
        }else if(req.body.speechType !== 'Pathways Speech'){
            //non-pathways speeches dont have title therefore don't need to match the title when deleting like we do with pathways speeches
            speeches = await speechModel.deleteOne({speechDate: req.body.speechDate, speechType: req.body.speechType, speechGiver: req.body.speechGiver});
        } else {
            speeches = await speechModel.deleteOne({speechDate: req.body.speechDate, speechType: req.body.speechType, speechGiver: req.body.speechGiver, speechTitle: req.body.speechTitle});
        } 
        res.status(200).json(speeches);
    } catch (error) {
        console.log(error)
        res.status(404).json({message: error.message});
        
    }
}

/**
    * Sets time data for given speech
    *
    * @param req Contains the request from the client side, req.body contains the speech + time data
    * @param res the response, we can use this to send a response back to the client
    */


export const setTime = async (req, res) => {
    try{
        //get current date in correct format
        let today = new Date()
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;



        const { time, speaker, type } = req.body;
        if(type === 'Evaluator'){
            const update = await evaluationModel.updateOne({speechDate: today, speechType: type ,speechEvaluator: speaker}, {$set: {'time': time}});
            if(update.matchedCount === 0){
            // happens if eval we wanted to update doesnt exist 
                res.status(200).send({ ifExists: 'No' });
            } else {
                res.status(200).send({ifExists: 'Yes'})
            }
            return
        } else{
            const update = await speechModel.updateOne({speechDate: today, speechType: type ,speechGiver: speaker}, {$set: {time: time}});
            if(update.matchedCount === 0){
                // for table topics, it is fine if the speech doesnt exist since you dont sign up to participate
                //therefore we just create it even if it doesnt exist
                if(type === 'Table Topics'){
                    const newSpeech = new speechModel({speechType: type, speechGiver: speaker, speechDate: today, time: time, fillerWords : 
                        {
                        Ah: 0,
                        Um: 0, 
                        Er: 0, 
                        Well: 0, 
                        So: 0,
                        Like: 0,
                        But: 0,
                        Repeats: 0, 
                        Other:  0
                        }
                    })
                    await newSpeech.save()
                
                    res.status(200).send({ ifExists: 'Yes' });
                    return
                }
            res.status(200).send({ ifExists: 'No' });
            return
            }
        } 
        res.status(200);
    } catch(error){
        console.log(error)
        res.status(404).json({message:error.message})
    }
}

/**
    * Adds comment card to array for specified speech
    *
    * @param req Contains the request from the client side, req.body contains the speech + comment card data
    * @param res the response, we can use this to send a response back to the client
    */


export const addCommentCard = async (req, res) => {
    try {
        // get date in correct format
        let today = new Date()
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;


        const {clubName, speaker, positive1, positive2, negative1} = req.body
        //format data so that it can be pushed into list
        const commentcard = {positive1: positive1, negative1: negative1, positive2: positive2}
        
        const update = await speechModel.updateOne(
            {clubName: clubName, speechDate: today, speechType: 'Pathways Speech', speechGiver: speaker}, 
            {$push: {commentCards : commentcard}})

        //if it didnt get pushed (matchedCount === 0), speech didnt exist
        if(update.matchedCount === 0){
            res.status(200).send({ifExists: 'No'})
        } else {
            res.status(200).send({ifExists: 'Yes'})
        }
    } catch (error) {
        res.status(404).json({message:error.message})
    }
    

}

/**
    * Adds filler word data to a given speech
    *
    * @param req Contains the request from the client side, req.body contains the filler word data and speech to add it to
    * @param res the response, we can use this to send a response back to the client
    */


export const addAhCounterData = async (req, res) => {
    try {
        //format current date correctly 
        let today = new Date()
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;


        const {speaker, type, counts} = req.body
        if(type === 'Evaluator'){
            const update = await evaluationModel.updateOne(
                {speechDate: today, speechType: type, speechEvaluator: speaker}, 
                {$set: 
                    {fillerWords : 
                        {
                            Ah: counts[0],
                            Um: counts[1], 
                            Er: counts[2], 
                            Well: counts[3], 
                            So: counts[4],
                            Like: counts[5],
                            But: counts[6],
                            Repeats: counts[7], 
                            Other: counts[8]
                        }
                    }
                })
                
            if(update.matchedCount === 0){
                //entry doesnt exist 
                res.status(200).send({ ifExists: 'No' });
            } else {
                res.status(200).send({ ifExists: 'Yes' });
                return
            }
        }
        const update = await speechModel.updateOne(
            {speechDate: today, speechType: type, speechGiver: speaker}, 
            {$set: 
                {fillerWords : 
                    {
                        Ah: counts[0],
                        Um: counts[1], 
                        Er: counts[2], 
                        Well: counts[3], 
                        So: counts[4],
                        Like: counts[5],
                        But: counts[6],
                        Repeats: counts[7], 
                        Other: counts[8]
                    }
                }
            })
            if(update.matchedCount === 0){
                //if table topics doesnt exist that is ok since you dont sign up for it, therefore create a new speech instead of letting client know it doesn't exist
                if(type==='Table Topics'){
                    const newSpeech = new speechModel(
                        {speechDate: today, speechType: type, speechGiver: speaker}, 
                            {fillerWords : 
                                {
                                    Ah: counts[0],
                                    Um: counts[1], 
                                    Er: counts[2], 
                                    Well: counts[3], 
                                    So: counts[4],
                                    Like: counts[5],
                                    But: counts[6],
                                    Repeats: counts[7], 
                                    Other: counts[8]
                                }
                            
                        })
                        await newSpeech.save()
                    
                    res.status(200).send({ ifExists: 'Yes' });
                    return
                }
                // if entry doesnt exist 
                res.status(200).send({ ifExists: 'No' });
            }

        console.log(update)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
    

}
