const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    "accessDenied": Boolean,
    "successful": Boolean,
    "locale": String,
    "clientValidationErrorInfo": [],
    "orderId": String,
    "orderName": String,
    "orderNumber": String,
    "createdDate": Number,
    "itemCount": Number,
    "currencySymbol": String,
    "orderAmount": Number,
    "fulFilledDate": Number,
    "stateString": String,
    "fulFilledDateString": String
});

module.exports=mongoose.model('Order', orderSchema);