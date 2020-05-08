const OrderInfo = require('../models/orderInfo.js');

async function getOrderByNumber(req, res, next) {
    let orderInfo;

    try{
        console.log(req.params.number);

        orderInfo = await OrderInfo.find({orderNumber: req.params.number});
        if(orderInfo==null){
            return res.status(404).json({message: 'Cannot find order'});
        }
    }
    catch(err) {
        return res.status(500).json({message: err.message});
    }

    res.orderInfo = {
        "accessDenied": false,
        "successful": true,
        "locale": null,
        "clientValidationErrorInfo": [],
        "clientOrderInfoList": orderInfo
    }

    next();
}

module.exports = getOrderByNumber;