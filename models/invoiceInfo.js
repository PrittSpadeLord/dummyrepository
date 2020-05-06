const mongoose = require('mongoose');

const invoiceInfoSchema = new mongoose.Schema({
    html: String,
    number: String
});

module.exports = mongoose.model('InvoiceInfo', invoiceInfoSchema);