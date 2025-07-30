const Profile=require('../models/profile.js')

async function getProfile(req,res,next){
    console.log(req.params.username);
    let profile;
  try{
        profile=await Profile.findOne({userName:req.params.username});
        if(profile==null){
            return res.status(404).json({message: 'Cannot find profile'});
        }
  }catch(err){
        return res.status(500).json({message: err.message});
  }
  res.profile={"accessDenied": false,
  "successful": true,
  "locale": null,
  "clientValidationErrorInfo": [],
  "clientSubscriberInfo": profile}
  next();
}
module.exports=getProfile;