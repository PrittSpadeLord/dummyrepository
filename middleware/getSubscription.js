const SubscriptionInfo=require('../models/subscriptionInfo.js')

async function getSubscriptionById(req,res,next){
    let subscriptionInfo;
  try{
        subscriptionInfo=await SubscriptionInfo.find({subServiceInstanceId:req.params.id});
        if(subscriptionInfo==null){
            return res.status(404).json({message: 'Cannot find subscription'});
        }
  }catch(err){
        return res.status(500).json({message: err.message});
  }
  res.subscriptionInfo={"accessDenied": false,
  "successful": true,
  "locale": null,
  "clientValidationErrorInfo": [],
  "clientViewSubscriptionInfo": subscriptionInfo}
  next();
}
module.exports=getSubscriptionById;