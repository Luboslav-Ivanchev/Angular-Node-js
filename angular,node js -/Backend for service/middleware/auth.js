const jwt=require('jsonwebtoken')
const userModel=require('../Mongo-Model/userModel.js')
const isAuthenticated=async (req,res,next)=>{

    try{

        const {token}=req.cookies;

         if(!token){
             return next('Login to access data!')
         }

         const verify=await jwt.verify(token,process.env.SECRET_KEY)

         req.user=await userModel.findById(verify.id)
        next()

    }catch (e) {
        return next(e)
    }

}

module.exports=isAuthenticated;