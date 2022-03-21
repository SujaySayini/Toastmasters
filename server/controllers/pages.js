import express from "express";
import mongoose from "mongoose";

import ClubModel from "../models/ClubModel";

const router = express.Router();

export const getPage = async(req, res) =>{
    try{
        const clubModel = await ClubModel.find(); 
        res.status(200).json(clubModel);

    }catch(error){
        res.status(404).json({message: error.message})

    }
}
export const getPostsBySearch = async (req, res) => {
    const { searchQuery} = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const posts = await ClubModel.find({ title });

        res.json({ data: posts });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}