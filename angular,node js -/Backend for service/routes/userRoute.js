
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const isAuthenticated = require('../middleware/auth.js');

const route = express.Router();


const userModel = require('../Mongo-Model/userModel.js');


route.post('/register',async(req,res)=>{

    try{
        const {name,email,password,repeatPassword}=req.body;

        if(! name || !email || !password || !repeatPassword ){
            return res.json('Please enter all details!')
        }

        let  emailFormat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!email.match(emailFormat))
        {
            return res.json(`Your email is not valid!`)
        }
        if(password!==repeatPassword){
            return  res.json('Password and Repeat password are not the same!');
        }

        const userExist=await userModel.findOne({email:req.body.email})

        if(userExist){
            return res.json('User exist with this email! Enter a different email address!')
        }

        const user = new userModel({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            repeatPassword:req.body.repeatPassword,
            personalInformation: {
                userName:req.body.personalInformation.userName,
                phoneNumber:req.body.personalInformation.phoneNumber,
                addressLine: req.body.personalInformation.addressLine,
                city: req.body.personalInformation.city,
                country: req.body.personalInformation.country,
                postcode: req.body.personalInformation.postcode,
                securityQuestion: req.body.personalInformation.securityQuestion,
                height:req.body.personalInformation.height,
                weight:req.body.personalInformation.weight
            }
        }
        );
        await user.save();
        const token = await jwt.sign({ id: user._id }, process.env.SECRET_KEY='secret', {
            expiresIn: "1h"
        });
        return res.cookie("token", token).json({ success: true, message: 'User registered successfully', data: user })
    }
    catch (e) {
        console.log(e)
    }

})

route.post('/login',async (req,res,next)=>{

    try{
        const {name,email,password,repeatPassword}=req.body;

        if (!name || !email || !password || !repeatPassword) {
            return res.json(  'Please enter all the details!' )
        }


        const userName=await  userModel.findOne({name:req.body.name});

        if(!userName){
            return res.json(  'Wrong name!' )
        }

        const userPassword=await  userModel.findOne({password:req.body.password});

        if(!userPassword){
            return res.json('Wrong password!')
        }

        const userRepeatPassword=await userModel.findOne({repeatPassword:req.body.repeatPassword});

        if(!userRepeatPassword){
            return res.json('Wrong repeat password!')
        }


        const userExist=await userModel.findOne({email:req.body.email});

        if(!userExist){
            return res.json( 'Wrong email!' )
        }

        const token =  jwt.sign({ id: userExist._id }, process.env.SECRET_KEY='secret', {
            expiresIn: "1h",
        });

        return res.cookie("token",token).json({ success: true, message: 'LoggedIn Successfully', token: token,data:userExist })
    }catch (e) {
        return res.json(e)
    }

})

route.post('/logout',async (req,res,next)=>{

    try{

        const {name,email,password,repeatPassword}=req.body;

        if (!name || !email || !password || !repeatPassword) {
            return res.json({ message: 'Please enter all the details' })
        }
        //Check if the user already exist or not
        const userExist = await userModel.findOne({ email: req.body.email });
        if (!userExist) {
            return res.json({ message: 'Wrong credentials' })
        }
        //Check password match
        //const isPasswordMatched = await bcrypt.compare(password, userExist.password);
        //         if (!isPasswordMatched) {
        //             return res.json({ message: 'Wrong credentials pass' });
        //         }
        const token =  jwt.sign({ id: userExist._id }, process.env.SECRET_KEY='secret', {
            expiresIn: "1h",
        });

        return res.cookie("token",token).json({ success: true, message: 'LoggedOut Successfully', token: token,data:userExist })

    }catch (e) {
        return res.json(e)
    }

})

route.get('/users', async (req, res) => {
    try {
        const user = await userModel.find({});
        if (!user) {
            return res.json({ message: 'No user found' })
        }
        return res.json({ user: user })
    } catch (error) {
        return res.json({ error: error });
    }
})




route.post('/update/:_id',async function (req,res) {


    let id=req.params;

    let  name=req.body.name;
    let email=req.body.email;
    let  password=req.body.password;
  let repeatPassword=req.body.repeatPassword;

    let userName=req.body.personalInformation.userName;
           let  phoneNumber=req.body.personalInformation.phoneNumber;
           let  addressLine= req.body.personalInformation.addressLine;
            let city=req.body.personalInformation.city;
            let country=req.body.personalInformation.country;
            let postcode=req.body.personalInformation.postcode;
           let  securityQuestion=req.body.personalInformation.securityQuestion;
            let height=req.body.personalInformation.height;
           let  weight=req.body.personalInformation.weight;

    let data=await userModel;

    data.updateOne({_id:id}, {
        $set: {
            name:name,
            email: email,
            password: password,
            repeatPassword:repeatPassword,
            personalInformation: {
                userName:userName,
                phoneNumber:phoneNumber,
                addressLine:addressLine,
                city: city,
                country: country,
                postcode:postcode,
                securityQuestion: securityQuestion,
                height:height,
                weight:weight
            }


        }
    },{new:true},(err,data)=>{

        if(data===null){
            res.send('Not found');
        }else{
            res.send(data);
        }
    })


})

route.get('/getUser/:_id',async (req,res,next)=>{

    try {
        let _id=req.params;
        const user = await userModel.findById(_id);
        if (!user) {
            return res.json({ message: 'No user found' })
        }
        return res.json({ user: user })
    } catch (error) {
        return res.json({ error: error });
    }



})


route.delete('/deleteProfile/:_id',async function (req,res) {
    let data=await userModel;
    let x=await data.deleteOne(req.params);
    return res.json('Delete!');
})



module.exports=route;