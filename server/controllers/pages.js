import ClubModel from '../models/ClubModel.js';
import express from 'express';
import mongoose from 'mongoose';


export const getPage = async (req,res) =>{
    const{id} = req.params;
    try{
        const ClubPage = await ClubModel.findById(id);
        console.log(ClubPage);
        res.status(200).json(postMessage);

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

