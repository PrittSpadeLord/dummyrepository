const mongoose = require('mongoose');

const subscriptionInfoSchema = new mongoose.Schema({

    "productName": String,
    "priceplanName": String,
    "identifier": String,
    "productImage": String,
    "quantity": Number,
    "status": Number,
    "chargingFrequency": String,
    "amount": Number,
    "lastChargeDate": Number,
    "nextChargeDate": Number,
    "expirationDate": Number,
    "activationStartDate": Number,
    "clientSubscriptionAttributesList": [],
    "statusString": String,
    "currencySymbol": String,
    "productId": String,
    "addOnSubscriptionOffers": [],
    "addOnLink": String,
    "markup": Boolean,
    "usagePresent": Boolean,
    "subServiceInstanceId":Number
    
})

module.exports=mongoose.model('SubscriptionInfo',subscriptionInfoSchema);