const InvoiceInfo=require('../models/invoiceInfo.js')

async function getInvoiceByNumber(req,res,next){
    let invoiceInfo;
    
    try{
        console.log(req.params.number);

        invoiceInfo = await InvoiceInfo.find({invoiceNumber:req.params.number});
        if(invoiceInfo==null){
            return res.status(404).json({message: 'Cannot find invoice'});
        }
    }
    catch(err) {
        return res.status(500).json({message: err.message});
    }

    res.invoiceInfo = {
        "accessDenied": false,
        "successful": true,
        "locale": null,
        "clientValidationErrorInfo": [],
        "invoiceViewHtml": invoiceInfo.html
    }

    next();
}

module.exports = getInvoiceByNumber;