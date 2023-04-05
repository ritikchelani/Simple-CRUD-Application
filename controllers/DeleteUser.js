const User=require("../models/User");

exports.DeleteUser = async(req,res) => {

    try {
        const user = await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            data:user,
            status:true,
            message:"user Deleted successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            data:null,
            status:false,
            message:"Oops! Something went wrong"
        })
    }


}