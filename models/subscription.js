const mongoose = require('mongoose');

const bundleSubscriptionInstancesSchema=new mongoose.Schema({

    "id":String,
    "subIdentifier":String,
    "quantity":Number,
    "bundleInstanceId":String,
    "subNextChargeDate":String,
    "status":Number
})

const clientSubscriptionSchema =new mongoose.Schema({
    "accessDenied":Boolean,
    "successful":Boolean,
    "locale":String,
    "clientValidationErrorInfo":[],
    "charge": String,
    "activationStart":Number,
    "renewDate":Number,
    "activationEnd":Number,
    "identifier": String,
    "subsServiceInstanceId":String,
    "subscriptionType":String,
    "productDescription":String,
    "productImage":String,
    "quantity": Number,
    "currencySymbol":String,
    "statusString":String,
    "serviceTypeId": String,
    "bundleSubscriptionInstances":[],
    "bundled": Boolean
})
const subscriptionSchema=new mongoose.Schema({
    "accessDenied":Boolean,
    "successful":Boolean,
    "locale":String,
    "clientValidationErrorInfo":[],
    "clientSubscriptionInfoList":[clientSubscriptionSchema]
 })


module.exports=mongoose.model('Subscription',subscriptionSchema);