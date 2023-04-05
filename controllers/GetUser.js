const User=require("../models/User");

exports.GetUser = async(req,res) => {

    try {
        const user = await User.findById(req.params.id);

        res.status(200).json({
            data:user,
            status:true,
            message:"user Details"
        })
        
    } catch (error) {
        res.status(500).json({
            data:null,
            status:false,
            message:"Oops! Something went wrong"
        })
    }


}