const User=require("../models/User");

exports.UpdateUser = async(req,res) => {

    const {Name,Mobile,Hometown,Current_City}=req.body;
    try {
        const user = await User.findByIdAndUpdate(req.params.id);
        user.Name=Name;
        user.Mobile=Mobile;
        user.Hometown=Hometown;
        user.Current_City=Current_City;
        user.save();

        res.status(200).json({
            data:user,
            status:true,
            message:"user Updated successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            data:null,
            status:false,
            message:"Oops! Something went wrong"
        })
    }


}