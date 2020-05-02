const Profile=require('../models/profile.js')

async function authenticateUser(req,res,next){
    console.log(req.query.username);
    console.log(req.query.password);

    let profile;
  try{
        profile=await Profile.findOne({userName:req.query.username,password:req.query.password});
        if(profile==null){
            return res.status(404).json({message: 'Cannot find profile'});
        }
  }catch(err){
        return res.status(500).json({message: err.message});
  }
  res.profile=profile
  next();
}
module.exports=authenticateUser;