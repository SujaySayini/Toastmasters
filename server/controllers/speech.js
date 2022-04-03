import e from "express";
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
        let speeches = ''
        if(req.body.date){   
            speeches = await speechModel.find({speechDate: req.body.date});
        } else {
            speeches = await speechModel.find({speechGiver: req.body.user});
        }
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
        const speeches = await speechModel.deleteOne({speechDate: req.body.speechDate, speechType: req.body.speechType, speechGiver: req.body.speechGiver, speechTitle: req.body.speechTitle});
        console.log(speeches);
        res.status(200).json(speeches);
    } catch (error) {
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
        console.log(speaker)
        console.log(type)
        //if(type === 'Pathways Speech' || type === 'Evaluation'){
        const update = await speechModel.updateOne({speechDate: today, speechType: type ,speechGiver: speaker}, {$set: {'time': time}});
        if(update.matchedCount === 0){
            // if entry doesnt exist 
            res.status(200).send({ ifExists: 'No' });
            // throw error
            // const newSpeech = new speechModel({speechDate: today, speechType: type, speechGiver:speaker, time: time});
            // await newSpeech.save()
        }
        //} 
        res.status(200);
    } catch(error){
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
        const commentcard = [positive1, negative1, positive2]
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
                // if entry doesnt exist 
                res.status(200).send({ ifExists: 'No' });
            }

        console.log(update)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
    

}
