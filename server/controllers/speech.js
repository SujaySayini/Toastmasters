import e from "express";
import { toNamespacedPath } from "path";
import evaluationModel from "../models/evaluationModel.js";
import speechModel from "../models/speechModel.js"

export const getSpeech = async (req, res)=>{
    try {
        /*console.log('HELLO:')
        console.log(req.body)
        let today = new Date()
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
    
        today = mm + '/' + dd + '/' + yyyy;
        today = '03/21/2022'*/
        console.log(req.body)
        let speeches = await speechModel.find(req.body);
        /*let speeches = ''
        if(req.body.date){   
            speeches = await speechModel.find({speechDate: req.body.date});
        } else {
            speeches = await speechModel.find({speechGiver: req.body.user});
        }*/
        console.log(speeches);
        res.status(200).json(speeches);
    } catch (error) {
        res.status(404).json({message: error.message});
        
    }
}

export const createSpeech = async (req, res)=>{
    
    const speech = req.body;
    console.log(req.body)
    const newSpeech = new speechModel(speech);
    console.log(newSpeech)
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
        console.log('-------------')
        console.log(req.body)
        let speeches = []
        if (req.body.speechType === 'Evaluator' ){
            speeches = await evaluationModel.deleteOne({speechDate: req.body.speechDate, speechType: req.body.speechType, speechEvaluator: req.body.speechGiver});
        }else if(req.body.speechType !== 'Pathways Speech'){
            speeches = await speechModel.deleteOne({speechDate: req.body.speechDate, speechType: req.body.speechType, speechGiver: req.body.speechGiver});
        } else {
            speeches = await speechModel.deleteOne({speechDate: req.body.speechDate, speechType: req.body.speechType, speechGiver: req.body.speechGiver, speechTitle: req.body.speechTitle});
        } 
        //console.log(speeches);
        res.status(200).json(speeches.op);
    } catch (error) {
        console.log(error)
        res.status(404).json({message: error.message});
        
    }
}

export const setTime = async (req, res) => {
    try{
        console.log('hello')
        let today = new Date()
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        const { time, speaker, type } = req.body;
        console.log('test')
        console.log(time)
        console.log('--'+speaker+'--')
        console.log(type)
        console.log(today)
        if(type === 'Evaluator'){
            console.log('evaluation')
            const update = await evaluationModel.updateOne({speechDate: today, speechType: type ,speechEvaluator: speaker}, {$set: {'time': time}});
            console.log(update)
            if(update.matchedCount === 0){
            // if entry doesnt exist 
                res.status(200).send({ ifExists: 'No' });
            } else {
                res.status(200).send({ifExists: 'Yes'})
            }
            return
        } else{
        //const update = await speechModel.find({speechDate: today, speechGiver: speaker}) 
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
            // throw error
            // const newSpeech = new speechModel({speechDate: today, speechType: type, speechGiver:speaker, time: time});
            // await newSpeech.save()
        }
        }
        //} 
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
        const {speaker, positive1, positive2, negative1} = req.body
        const commentcard = {positive1: positive1, negative1: negative1, positive2: positive2}
        console.log(speaker)
        console.log(today)
        
        const update = await speechModel.updateOne(
            {speechDate: today, speechType: 'Pathways Speech', speechGiver: speaker}, 
            {$push: {commentCards : commentcard}})

        console.log(update)
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
        console.log(speaker)
        console.log(today)
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
