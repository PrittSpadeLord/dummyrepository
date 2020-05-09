const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    "accessDenied": Boolean,
    "successful": Boolean,
    "locale": String,
    "clientValidationErrorInfo": [],
    "paymentDate": Number,
    "receiptNumber": String,
    "paymentType": String,
    "paymentAmount": String,
    "accountId": String,
    "currencySymbol": String,
    "paymentSourceType": String,
    "downloadReceiptLabel": String,
    "paymentStatus": String,
    "fileName": String,
    "fileContent": String
});

module.exports=mongoose.model('Payment', paymentSchema);
