const mongoose = require('mongoose');

const invoiceInfoSchema = new mongoose.Schema({
    html: String,
    number: Number
});

module.exports = mongoose.model('InvoiceInfo', invoiceInfoSchema);