import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../../models/userModel.js";
import { systemLogs } from "../../utils/Logger.js";

///$-title
///$-path POST /api/v1/auth/login
///$-auth Public


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

	if (!email || !password) {
		res.status(400);
		throw new Error("Please provide an email and password");
	}


    
})