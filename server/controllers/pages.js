import ClubModel from '../models/ClubModel.js';
import express from 'express';
import mongoose from 'mongoose';


export const getClubPageInfo = async(req,res)=>{
    console.log(req.body);
    const id = req.params
    try {
        console.log(req.body)
        const clubInfo  =await ClubModel.findById(id);
        res.status(200).json(evaluations);
    } catch (error) {
        res.status(404).json({message: error.message});
        
    }
}



export const getPages = async (req,res) =>{
    //const{id} = req.params;
    
    try{
        //console.log("LOL LOL");
        const ClubPage = await ClubModel.find();
        //console.log(typeof(ClubPage));
        res.status(200).json(ClubPage);

    }catch(error){
        res.status(404).json({message: error.message});

    }
}
export const createPage = async (req,res)=>{
    const page = req.body;
    const newPage = new ClubModel(page);
    try{
        await newPage.save();

        res.status(201).json(newPage);

    }catch(error){
        res.status(409).json({message: error.message});

    }
}
export const getPageBySearch = async(req,res) =>{
    const searchQuery = req.query;
    console.log('hihi');

    try{
        const title  = new RegExp(searchQuery,'i');

        const page =await ClubModel.find({title});
        res.json({data: page});
        console.log(page);
        

    }catch(error){
        res.status(404).json({message: error.message});

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
        let clubs = ''
        // clubs = await userModel.find({club: req.body.club});
        clubs = await ClubModel.find({});
        //console.log(clubs)
        res.status(200).json(clubs);
    } catch (error) {
        //console.log("fhere")
        res.status(404).json({message: error.message});
        
    }
}

