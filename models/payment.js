const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    "paymentDate": Number,
    "receiptNumber": String,
    "paymentType": String,
    "paymentAmount": String,
    "accountId": String,
    "currencySymbol": String,
    "paymentSourceType": String,
    "downloadReceiptLabel": String,
    "paymentStatus": String
});

module.exports=mongoose.model('Payment', paymentSchema);
