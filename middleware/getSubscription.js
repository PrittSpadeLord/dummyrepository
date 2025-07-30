const SubscriptionInfo=require('../models/subscriptionInfo.js')
const Subscription=require('../models/subscription.js')

async function getSubscriptionById(req,res,next){
    let subscriptionInfo;
    let subscription;
    try{
          subscription=await Subscription.findOne({ clientSubscriptionInfoList : { $elemMatch: {  subsServiceInstanceId : { $gte: req.params.id } } } } );
          //console.log(subscription)
          const sub=subscription.clientSubscriptionInfoList.filter(abc=>abc.subsServiceInstanceId==req.params.id)
          console.log(sub)
          const identifier=sub[0].identifier;   
          console.log(identifier)         
          subscriptionInfo=await SubscriptionInfo.findOne(  { "clientViewSubscriptionInfo.identifier":identifier} )
           console.log(subscriptionInfo.clientViewSubscriptionInfo.identifier)
          if(subscriptionInfo==null){
            return res.status(404).json({message: 'Cannot find subscription'});
      }
      }catch(err){
            return res.status(500).json({message: err.message});
      }
  res.subscriptionInfo= subscriptionInfo
  next();
}
module.exports=getSubscriptionById;