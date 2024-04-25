import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";


const checkAuth = asyncHandler(async (req, res, next) => {
    let jwt_token;


    const authHeader = req.headers.authorization || req.headers.Authorization;
    
})