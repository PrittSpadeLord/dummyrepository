const express=require('express');
const router=express.Router();
const Subscription = require('../models/subscription.js');
const SubscriptionInfo=require('../models/subscriptionInfo.js')
const getSubscriptionById=require('../middleware/getSubscription.js')


router.get('/subscriptionListing',async (req,res)=>{
    try{
        const subscriptions=await Subscription.find();
        res.json({ "accessDenied": false,
        "successful": true,
        "locale": null,
        "clientValidationErrorInfo":[] ,
        "clientSubscriptionInfoList":subscriptions
        });
    }
    catch{
        res.status(500).json({message:err.message});
    }
})

router.get('/getsubscription/:id',getSubscriptionById,(req,res)=>{
    res.send(res.subscriptionInfo);
})











//Input data
router.post('/',async (req,res)=>{
    const subscription=new Subscription({
        "accessDenied": req.body.accessDenied,
            "successful": req.body.successful,
            "locale": req.body.locale,
            "clientValidationErrorInfo": req.body.clientValidationErrorInfo,
            "charge": req.body.charge,
            "activationStart": req.body.activationStart,
            "renewDate": req.body.renewDate,
            "activationEnd": req.body.activationEnd,
            "identifier": req.body.identifier,
            "subsServiceInstanceId": req.body.subsServiceInstanceId,
            "subscriptionType": req.body.subscriptionType,
            "productDescription": req.body.productDescription,
            "productImage":req.body.productImage,
            "quantity": req.body.quantity,
            "currencySymbol": req.body.currencySymbol,
            "statusString": req.body.statusString,
            "serviceTypeId": req.body.serviceTypeId,
            "bundleSubscriptionInstances": req.body.bundleSubscriptionInstances,
            "bundled":req.body.bundled
    
    });
    try{
        const newSubscription= await subscription.save();
        res.send(201,newSubscription);
    }catch(err){
        res.status(400).json({message:err.message});
    }
    
})

router.post('/subServiceInstance',async (req,res)=>{
    const subscriptionInfo=new SubscriptionInfo({
        "productName": req.body.productName,
        "priceplanName": req.body.priceplanName,
        "identifier": req.body.identifier,
        "productImage": req.body.productImage,
        "quantity": req.body.quantity,
        "status": req.body.status,
        "chargingFrequency": req.body.chargingFrequency,
        "amount": req.body.amount,
        "lastChargeDate": req.body.lastChargeDate,
        "nextChargeDate": req.body.nextChargeDate,
        "expirationDate": req.body.expirationDate,
        "activationStartDate": req.body.activationStartDate,
        "clientSubscriptionAttributesList":req.body.clientSubscriptionAttributesList,
        "statusString": req.body.statusString,
        "currencySymbol": req.body.currencySymbol,
        "productId": req.body.productId,
        "addOnSubscriptionOffers": req.body.addOnSubscriptionOffers,
        "addOnLink": req.body.addOnLink,
        "markup": req.body.markup,
        "usagePresent": req.body.usagePresent,
        "subServiceInstanceId":req.body.subServiceInstanceId
    
    });
    try{
        const newSubscriptionInfo= await subscriptionInfo.save();
        res.send(201,newSubscriptionInfo);
    }catch(err){
        res.status(400).json({message:err.message});
    }
    
})


module.exports=router;