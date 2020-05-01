const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({

    "accessDenied": {
        type:Boolean,
        required:false,
        default:false
    },
    "successful":{
        type:Boolean,
        required:false,
        default:true
    },
    "locale": {
        type:String,
        required:false,
        default:null
    },
    "clientValidationErrorInfo":[],
    "charge": {
        type:String,
        required:false,
        default:null
    },
    "activationStart":  {
        type:Number,
        required:true,
        default:1520361000000
    },
    "renewDate": {
        type:Number,
        required:true,
        default:1522521000000
    }, 
    "activationEnd":  {
        type:Number,
        required:false,
        default:null
    }, 
    "identifier": {
        type:String,
        required:true,
    },
    "subsServiceInstanceId": {
        type:Number,
        required:true
    }, 
    "subscriptionType": {
        type:String,
        required:true
    }, 
    "productDescription": {
        type:String,
        required:true
    }, 
    "productImage": {
        type:String,
        required:false
    }, 
    "quantity": {
        type:Number,
        required:true
    }, 
    "currencySymbol": {
        type:String,
        required:true
    },
    "statusString": {
        type:String,
        required:true
    },
    "serviceTypeId": {
        type:Number,
        required:true
    }, 
    "bundleSubscriptionInstances":{
        type:String,
        required:false
    },
    "bundled": {
        type:Boolean,
        required:true
    }
})

module.exports=mongoose.model('Subscription',subscriptionSchema);