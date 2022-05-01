import evaluationModel from "../models/evaluationModel.js";
import speechModel from "../models/speechModel.js"

export const getSpeech = async (req, res)=>{
    try {
        let speeches = await speechModel.find(req.body);
        res.status(200).json(speeches);
    } catch (error) {
        res.status(404).json({message: error.message});
        
    }
}

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


export const deleteSpeech = async (req, res)=>{
    try {
        const speech = req.body;
        let speeches = []
        if (req.body.speechType === 'Evaluator' ){
            speeches = await evaluationModel.deleteOne({speechDate: req.body.speechDate, speechType: req.body.speechType, speechEvaluator: req.body.speechGiver});
        }else if(req.body.speechType !== 'Pathways Speech'){
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

export const setTime = async (req, res) => {
    try{
        let today = new Date()
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        const { time, speaker, type } = req.body;
        if(type === 'Evaluator'){
            const update = await evaluationModel.updateOne({speechDate: today, speechType: type ,speechEvaluator: speaker}, {$set: {'time': time}});
            if(update.matchedCount === 0){
            // if entry doesnt exist 
                res.status(200).send({ ifExists: 'No' });
            } else {
                res.status(200).send({ifExists: 'Yes'})
            }
            return
        } else{
        const update = await speechModel.updateOne({speechDate: today, speechType: type ,speechGiver: speaker}, {$set: {time: time}});
        console.log(update)
        if(update.matchedCount === 0){
            // if entry doesnt exist 
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

export const addCommentCard = async (req, res) => {
    try {
        let today = new Date()
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        const {clubName, speaker, positive1, positive2, negative1} = req.body
        const commentcard = {positive1: positive1, negative1: negative1, positive2: positive2}
        
        const update = await speechModel.updateOne(
            {clubName: clubName, speechDate: today, speechType: 'Pathways Speech', speechGiver: speaker}, 
            {$push: {commentCards : commentcard}})

        if(update.matchedCount === 0){
            res.status(200).send({ifExists: 'No'})
        } else {
            res.status(200).send({ifExists: 'Yes'})
        }
    } catch (error) {
        res.status(404).json({message:error.message})
    }
    

}

export const addAhCounterData = async (req, res) => {
    try {
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
                // if entry doesnt exist 
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
