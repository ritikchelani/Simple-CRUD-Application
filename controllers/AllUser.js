const User=require("../models/User");

exports.AllUsers = async(req,res) => {

    try {
        const user = await User.find();
        res.status(200).json({
            data:user,
            status:true,
            message:"Users List"
        })
        
    } catch (error) {
        res.status(500).json({
            data:null,
            status:false,
            message:"Oops! Something went wrong"
        })
    }


}