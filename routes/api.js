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
const Payment = require('../models/payment.js');
const getPaymentByNumber = require('../middleware/getPayment.js');
const Order = require('../models/order.js');
const OrderInfo = require('../models/orderInfo.js');
const getOrderByNumber = require('../middleware/getOrder.js');

router.get('/', (req, res) => {
    res.send('Welcome to dummy API. This api with url link "http://localhost:3214/api/" mirrors the actual api "https://app.onebillsoftware.com/web/selfcare-rest/".');
})

router.get('/subscriptionListing', async (req,res)=>{
    try{
        const subscriptions=await Subscription.find();
        res.send(subscriptions);
    }
    catch{
        res.status(500).json({message:err.message});
    }
})

router.get('/getsubscription/:id',getSubscriptionById,(req,res)=>{
    res.send(res.subscriptionInfo);
})

router.get('/selfcareinvoicelisting',async (req,res)=>{
    try{
        const invoices=await Invoice.find();
        res.send(invoices)
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})

router.get('/invoicelisting/:number/false', getInvoiceByNumber, (req,res)=>{
    res.send(res.invoiceInfo);
})

router.get('/profileDetails/:username',getProfile,(req,res)=>{
    res.send(res.profile);

})

router.get('/j_spring_security_check',authenticateUser,(req,res)=>{
    res.send(res.profile);
})

router.get('/payments', async (req, res) => {
    try{
        const payments = await Payment.find();
        res.json({
            "accessDenied": false,
            "successful": true,
            "locale": null,
            "clientValidationErrorInfo": [],
            "clientPaymentInfo": payments,
            "fileName": null,
            "fileContent": null
        });
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('//payments/:number/:paymentSourceType', getPaymentByNumber, (req, res) => {
    res.send(res.paymentInfo);
})

router.get('/selfcareorderlisting',async (req,res)=>{
    try{
        const orders = await Order.find();
        res.json({
            "accessDenied": false,
            "successful": true,
            "locale": null,
            "clientValidationErrorInfo": [],
            "clientOrderInfoList": orders
        });
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})

router.get('/orderdetails/:number', async (req, res) => {
    res.send(res.orderInfo);
});

router.get('/nothing', (req, res) => {
    res.json([]);
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