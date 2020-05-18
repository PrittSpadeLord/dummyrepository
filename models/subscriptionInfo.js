const mongoose = require('mongoose');
const addOnSubscriptionOffersSchema=new mongoose.Schema({
 
        "id":String,
        "accId":String,
        "offerId":String,
        "renewDate":Number,
        "chargingFrequency":String,
        "activationStart":Number,
        "activationEnd":Number,
        "recStart":Number,
        "recEnd":Number,
        "status":Number,
        "ovrdDiscountFixed":Number,
        "ovrdDiscountVar":Number,
        "discountExclusive":Number,
        "priceEffectiveDate":Number,
        "quantity":Number,
        "groupId":String,
        "subsOfferType":String,
        "actionType":String,
        "renewalMode":Boolean,
        "couponId":String,
        "applicableCharges":Number,
        "subsType":String,
        "productId":String,
        "reasonId":String,
        "pricePlanName":String,
        "productName":String,
        "offerAttributeses":String
     
   })

const cvsi=new mongoose.Schema({
        "productName":String,
        "priceplanName":String,
        "identifier":String,
        "productImage":String,
        "quantity":Number,
        "status":Number,
        "chargingFrequency":String,
        "amount":Number,
        "lastChargeDate":Number,
        "nextChargeDate":Number,
        "expirationDate":Number,
        "activationStartDate":Number,
        "clientSubscriptionAttributesList":[
  
        ],
        "statusString":String,
        "currencySymbol":String,
        "productId":String,
        "addOnSubscriptionOffers":[addOnSubscriptionOffersSchema ],
        "addOnLink":String,
        "usagePresent":Boolean,
        "markup":Boolean
})



   const clientReasonsDtoSchema =new mongoose.Schema({
    
        "accessDenied":Boolean,
        "successful":Boolean,
        "locale":String,
        "clientValidationErrorInfo":[],
        "id":String,
        "reasonInfoId":String,
        "reason":String,
        "reasonCode":String
    
   })
   
   const subscriptionInfoSchema = new mongoose.Schema({
   
       "accessDenied":Boolean,
       "successful":Boolean,
       "locale":String,
       "subServiceInstanceId":Number,
       "clientValidationErrorInfo":[],
       "clientViewSubscriptionInfo":cvsi,
       "clientReasonsDtoList":[clientReasonsDtoSchema ]
   })
   
   
   

module.exports=mongoose.model('SubscriptionInfo',subscriptionInfoSchema);