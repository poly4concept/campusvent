import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModal  from "../models/user.js";
import dotenv from 'dotenv'


// const secret = 'test';
dotenv.config()
const secret = process.env.JWT_SECRET
export const signIn = async (req, res) => {
        const {email, password} = req.body
        try {
            const oldUser = await UserModal.findOne({ email });

            if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

            const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

            if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
            //use .env for the secret
            const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "30d" });
            res.status(200).json({ result: oldUser, token });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong" });
        }
}


export const signUp = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    try {
        const oldUser = await UserModal.findOne({ email });
        
        if (oldUser) return res.status(400).json({ message: "User already exists" });
        
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);
         
         const result = await UserModal.create({ email, password: hashedPassword, givenName: firstName, familyName: lastName});
         
         const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "30d" } );
         res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        
        console.log(error);
    }
}