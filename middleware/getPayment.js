const PaymentInfo=require('../models/paymentInfo.js')

async function getPaymentByNumber(req, res, next){
    let paymentInfo;

    try{
        console.log(req.params.number);
        paymentInfo = await PaymentInfo.find({receiptNumber:req.params.number});
        if(paymentInfo==null){
            return res.status(404).json({message: 'Cannot find receipt'});
        }
    }
    catch(err){
        retutn res.status(500).json({message: err.message});
    }

    res.paymentInfo = {
        "accessDenied": false,
        "successful": true,
        "locale": null,
        "clientValidationErrorInfo": [],
        "paymentViewHtml" : paymentInfo.html
    }

    next();
}

module.exports = getPaymentByNumber;
