const mongoose = require('mongoose');

const paymentInfoSchema = new mongoose.Schema({
    "accessDenied": Boolean,
    "successful": Boolean,
    "locale": String,
    "clientValidationErrorInfo": [],
    "clientPaymentInfo": Object,
    "fileName": String,
    "fileContent": String,
    "receiptNumber": String
});

module.exports = mongoose.model('PaymentInfo', paymentInfoSchema);
