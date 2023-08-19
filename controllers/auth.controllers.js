import bycrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.models.js';

// registration

export const register = async (req, res) => {

    try{
        const{
            FirstName,
            LastName,
            Email,
            Password,
            PicturePath,
            Friends,
            location,
            occupation
        } = req.body;

        const saltrounds = 10;
        const salt = await bycrypt.genSalt(saltrounds);
        const hashedPassword = await bycrypt.hash(Password, salt);

        new User({
            FirstName,
            LastName,
            Email,
            Password: hashedPassword,
            PicturePath,
            Friends,
            location,
            occupation,
            viewedprofile: Math.floor(Math.random() * 100000),
            impressions: Math.floor(Math.random() * 100000),
        });
        const newUser = await User.save();
        res.status(201).json({
            FirstName: newUser.FirstName, 
            LastName: newUser.LastName, 
            Email: newUser.Email });



    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

// login

export const login = async(req, res) =>{
    try{

        const {
            Email,
            Password,
        } = req.body;

        const user = await User.findOne({Email : Email});
        if(!user) return res.status(404).json({message: "User does not exist"});

        const isPasswordCorrect = await bycrypt.compare(Password, user.Password);
        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid Email ID or Password"});

        const token = jwt.sign({Email: user.Email, id: user._id}, process.env.JWT_KEY);
        delete user.Password;

    res.status(200).json({
        user: user._id,
        secret: token});
    } catch (err) {
        res.status(500).json({error: err.message});
    }  
};