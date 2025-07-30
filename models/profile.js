const mongoose = require('mongoose');
const clientCommunicationDTOSchema = new mongoose.Schema({
    
    "id": Number,
    "contactId": Number,
    "value": String,
    "type": String

   
})

const clientCustomerContactDTOSchema = new mongoose.Schema({
    "id": Number,
    "salutation": String,
    "firstName": String,
    "lastName": String,
    "contactType": String,
    "userName": String,
    "contactNumber": Number,
    "emailId": String,
    "faceBookUserName": String,
    "type": Number,
    "locale": String,
    "clientCommunicationDTOList": [clientCommunicationDTOSchema ],
    "cellContactNumber": Number,
    "alternateContactNumber": Number,
    "designation": String
           
})

const clientCCProfileInfoSchema=new mongoose.Schema({
    "paymentProfileId": Number,
        "referenceKey": Number,
        "cardNumber": String,
        "cardType": String,
        "cardExpiryMonth": Number,
        "cardExpiryYear": Number,
        "cardExpiryDate": Number,
        "firstName": String,
        "lastName": String,
        "expired": Boolean,
        "default": Boolean
})



const profileSchema = new mongoose.Schema({

    "accessDenied": Boolean,
    "successful": Boolean,
    "locale": String,
    "clientValidationErrorInfo": [],
    "partyId": Number,
    "sellerId": Number,
    "accountNumber": String,
    "name": String,
    "partyRoleId": Number,
    "primaryCurrencyId": Number,
    "firstName": String,
    "lastName": String,
    "emailId": String,
    "contactNumber": Number,
    "password": String,
    "confirmPassword": String,
    "userName": String,
    "currencySymbol": String,
    "accountCreatedDate": Number,
    "csrfToken": String,
    "contactType": String,
    "cellContactNumber": Number,
    "alternateContactNumber": Number,
    "designation": String,
    "addressLine1": String,
    "addressLine2": String,
    "city": String,
    "zipCode": Number,
    "state": String,
    "county": String,
    "country": String,
    "zipCodeExtension": Number,
    "profileImageName": String,
    "base64ProfileImage": String,
    "selfcareRegistrationConfig": Boolean,
    "clientAccountAttributeList": String,
    "clientCustomAttributeDTOs": String,
    "clientKYCAttributeDTOs": String,
    "accountId": Number,
    "partyType": Number,
    "partyTypeString": String,
    "partyRoleTypeString": String,
    "accImageByteStringURL": String,
    "lstAddresses": [],
    "clientCustomerContactDTO": clientCustomerContactDTOSchema ,
    "clientCustomerPayInfo": String,
    "clientCCProfileInfoList": [ clientCCProfileInfoSchema],
    "clientEcheckProfileInfoList": [],
    "isPayInfoModify": Boolean,
    "billingDom": Number,
    "authorizedPaymentLimit": Number,
    "dateFormat": String,
    "currencyId": String,
    "language": String,
    "timeZone": String,
    "dataFormatAllowedValues": String,
    "defaultCurrencyId": String,
    "defaultPaymentProfileId": String,
    "currentDateAsString": String,
    "primaryCurrency": Number,
    "precision": String,
    "clientAccountAttributesList": [],
    "notifyInvoice": String,
    "authenticationResponse": String,
    "cardNumberUpdateEnabled": Boolean,
    "parentSponsored": Boolean
    
})

module.exports=mongoose.model('Profile',profileSchema);