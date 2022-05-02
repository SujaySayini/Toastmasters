import ClubModel from '../models/ClubModel.js';
import mongoose from 'mongoose';
import userModel from '../models/userModel.js';


/**
    * Finds data for a given club
    *
    * @param req Contains the request from the client side, req.params contains the params we will search the club collection for
    * @param res the response, we can use this to send a response back to the client
    */
export const getClubPageInfo = async(req,res)=>{
    const id = req.params
    try {
        const clubInfo  =await ClubModel.findOne(req.body);
        res.status(200).json(clubInfo);
    } catch (error) {
        res.status(404).json({message: error.message});
        
    }
}


/**
    * Updates the active field in a club (allows admins to make it active/inactive)
    *
    * @param req Contains the request from the client side, req.body contains the clubname we want to update as well as the value we want to set it's active field to
    * @param res the response, we can use this to send a response back to the client
    */

export const setActive = async(req, res) => {
    try {
        const clubInfo  =await ClubModel.updateOne({clubName: req.body.clubName}, {$set : {'active': req.body.active}});
        res.status(200).json(clubInfo);
    } catch (error) {
        res.status(404).json({message: error.message});
        
    }
}




export const createPage = async (req,res)=>{


    // userModel.updateOne({userEmail: req.body.userEmail}, {$set: {club: whatever the new clubname is, userLevel: 'Eboard', title: 'President'}})
    const page = req.body;
    const exists = await ClubModel.find({clubName : page.clubName})
    if(exists.length > 0){
        res.status(409).json({message: 'duplicate'});
        return 
    }
    const newPage = new ClubModel({...page, active: 'Yes'});
    try{
        await newPage.save();

        res.status(201).json(newPage);

    }catch(error){
        res.status(409).json({message: error.message});

    }
}

export const updatePage = async(req, res) =>{
    const{id: _id} = req.params;
    const targetPage = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("Cannot find the Page");
    const updatedPage = await ClubModel.findByIdAndUpdate(_id,targetPage,{new: true});
    res.json(updatedPage);
}
    
export const getClubs = async (req, res)=>{
    try {
        console.log('hello')
        console.log(req.body)
        let clubs = ''
        // clubs = await userModel.find({club: req.body.club});
        clubs = await ClubModel.find(req.body);
        //console.log(clubs)
        //console.log(clubs)
        res.status(200).json(clubs);
    } catch (error) {
        //console.log("fhere")
        res.status(404).json({message: error.message});
        
    }
}

export const setUserClub = async (req, res) => {
    const result = await userModel.updateOne({email: req.body.email}, {$set: {club: req.body.clubName}})
    res.status(200).json(result)
    return
}

