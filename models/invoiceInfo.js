const mongoose = require('mongoose');

const invoiceInfoSchema = new mongoose.Schema(String);

module.exports = mongoose.model('InvoiceInfo', invoiceInfoSchema);