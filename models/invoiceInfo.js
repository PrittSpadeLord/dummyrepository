const mongoose = require('mongoose');

const invoiceInfoSchema = new mongoose.Schema({
    html: String,
    invoiceNumber: String
});

module.exports = mongoose.model('InvoiceInfo', invoiceInfoSchema);