const InvoiceInfo=require('../models/invoiceInfo.js')

async function getSubscriptionById(req,res,next){
    let invoiceInfo;
    try{
        //I have no idea!
    }
    catch(err) {
        return res.status(500).json({message: err.message});
    }
    res.subscriptionInfo = {
        "accessDenied": false,
        "successful": true,
        "locale": null,
        "clientValidationErrorInfo": [],
        "invoiceViewHtml": invoiceInfo
    }

  next();
}

module.exports = getInvoiceByNumber;