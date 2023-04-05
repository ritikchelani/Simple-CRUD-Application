const User=require("../models/User");

exports.createUser = async(req,res) => {

    try {
        const user = await new User(req.body);
        user.save();

        res.status(200).json({
            data:user,
            status:true,
            message:"user created successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            data:null,
            status:false,
            message:"Oops! Something went wrong"
        })
    }


}