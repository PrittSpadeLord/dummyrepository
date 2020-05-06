const express=require('express');
const router=express.Router();
const Subscription = require('../models/subscription.js');
const SubscriptionInfo=require('../models/subscriptionInfo.js')
const getSubscriptionById=require('../middleware/getSubscription.js')
const Invoice = require('../models/invoice.js')
const InvoieInfo = require('../models/invoiceInfo.js');
const getInvoiceByNumber = require('../middleware/getInvoice.js')
const getProfile=require('../middleware/getProfile.js')
const authenticateUser=require('../middleware/authenticateUser.js')
const Profile=require('../models/profile.js')

router.get('/subscriptionListing', async (req,res)=>{
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

router.get('/invoiceListing',async (req,res)=>{
    try{
        const invoices=await Invoice.find();
        res.json({
            "accessDenied": false,
            "successful": true,
            "locale": null,
            "clientValidationErrorInfo": [],
            "clientInvoiceInfoList": invoices,
            "paymentProfRefKey": null,
            "currencyCode": null,
            "opgEnabled": false
        });
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})

router.get('/getinvoice/:number', getInvoiceByNumber, (req,res)=>{
    res.send(res.invoiceInfo);
})

router.get('/profileDetails/:username',getProfile,(req,res)=>{
    res.send(res.profile);

})

router.get('/j_spring_security_check',authenticateUser,(req,res)=>{
    res.send(res.profile);
})









//Input data
router.post('/',async (req,res)=>{
    const subscription=new Subscription(req.body);
    try{
        const newSubscription= await subscription.save();
        res.send(201,newSubscription);
    }catch(err){
        res.status(400).json({message:err.message});
    }
    
})

router.post('/subServiceInstance',async (req,res)=>{
    const subscriptionInfo=new SubscriptionInfo(req.body);
    try{
        const newSubscriptionInfo= await subscriptionInfo.save();
        res.send(201,newSubscriptionInfo);
    }catch(err){
        res.status(400).json({message:err.message});
    }
    
})


router.post('/profileDetails',async (req,res)=>{
    const profile=new Profile(req.body);
    try{
        const newProfile= await profile.save();
        res.send(201,newProfile);
    }catch(err){
        res.status(400).json({message:err.message});
    }
    
})

router.post('/invoiceListing',async (req,res)=>{
    const invoice=new Invoice(req.body);
    try{
        const newInvoice= await invoice.save();
        res.send(201,newInvoice);
    }catch(err){
        res.status(500).json({message:err.message});
    }
})


module.exports=router;