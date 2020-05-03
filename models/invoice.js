const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    "accessDenied": Boolean,
    "successful": Boolean,
    "locale": String,
    "clientValidationErrorInfo": [],
    "invoiceNumber": String,
    "currency": String,
    "status": String,
    "amount": 80.65,
    "dueAmount": 80.65,
    "displayDueAmount": Number,
    "usageExported": 0,
    "exportStatus": String,
    "invoiceId": Number,
    "templateContents": Object,
    "formattedData": Object,
    "cardType": String,
    "cardNumber": String,
    "dueFlag": Boolean,
    "invoiceDate": Date,
    "invoiceDueDate": Date,
    "isParentPaying": Boolean,
    "orderId": Number,
    "partyRoleId": Number,
    "subscriberId": Number,
    "fileContent": Object,
    "fileName": String,
    "savedInCloud": Boolean,
    "payTmEnabled": Boolean
});

module.exports=mongoose.model('Invoice', invoiceSchema);