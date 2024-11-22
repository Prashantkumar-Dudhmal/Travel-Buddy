const ProfileModel = require('../models/profileModel');


const getProfile = async(req,res)=>{
    const userid = req.params.id;
    let usr = await ProfileModel.findById(userid);
    res.json(usr);
}

const updateProfile = async(req,res)=>{
    const userid = req.params.id;
    const data = req.body;
    const Update = data.toUpdate;
    let usr = await ProfileModel.findById(userid);
    if (!usr) {
        return res.status(404).json({ message: 'User not found' });
    }
    console.log(data);

    usr.name = data.name;
    usr.email = data.email;
    usr.phoneNumber = data.phoneNumber;
    usr.rating = data.rating;
    usr.totalRatings = data.totalRatings;
    usr.isDriver = data.isDriver;

    await usr.save();
  
    return res.status(200).json({ message: 'Profile updated successfully',
        toUpdate: Update
    });
}

const createProfile = async(req,res)=>{
    const data = req.body;
    let user = await profileModel.create({
        name:data.name,
        email:data.email,
        phoneNumber:data.phoneNumber,
        profilePhoto:data.profilePhoto,
        rating:data.rating,
        totalRatings:data.totalRatings,
        isDriver:data.isDriver 
    });
    console.log(user);
    res.json(user);
}

module.exports = {getProfile,updateProfile,createProfile};