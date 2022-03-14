import speechModel from "../models/speechModel.js"

export const getSpeech = async (req, res)=>{
    try {
        let today = new Date()
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
    
        today = mm + '/' + dd + '/' + yyyy;
        const speeches = await speechModel.find({speechDate: today, speechType: 'Pathways Speech'});
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