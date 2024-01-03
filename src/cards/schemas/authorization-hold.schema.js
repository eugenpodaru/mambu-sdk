/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"AuthorizationHold","type":"object","description":"The authorization hold corresponding to a card token","properties":{"accountKey":{"type":"string","title":"accountKey","description":"The key of the account linked with the authorization hold."},"advice":{"type":"boolean","title":"advice","description":"Whether the given request should be accepted without balance validations."},"amount":{"type":"number","title":"amount","description":"The amount of money to be held as a result of the authorization hold request."},"balances":{"title":"balances","$ref":"#/$defs/AccountBalances"},"cardAcceptor":{"title":"cardAcceptor","$ref":"#/$defs/CardAcceptoraf30"},"cardToken":{"type":"string","title":"cardToken","description":"The reference token of the card."},"creationDate":{"type":"string","title":"creationDate","description":"The organization time when the authorization hold was created","format":"date-time"},"creditDebitIndicator":{"title":"creditDebitIndicator","description":"Indicates whether the authorization hold amount is credited or debited.If not provided, the default values is DBIT.","enum":["DBIT","CRDT"]},"currencyCode":{"type":"string","title":"currencyCode","description":"The ISO currency code in which the hold was created. The amounts are stored in the base currency, but the user could have enter it in a foreign currency."},"customExpirationPeriod":{"type":"integer","title":"customExpirationPeriod","description":"The custom expiration period for the hold which overwrites mcc and default expiration periods"},"exchangeRate":{"type":"number","title":"exchangeRate","description":"The exchange rate for the original currency."},"externalReferenceId":{"type":"string","title":"externalReferenceId","description":"The external reference ID to be used to reference the account hold in subsequent requests."},"originalAmount":{"type":"number","title":"originalAmount","description":"The original amount of money to be held as a result of the authorization hold request."},"originalCurrency":{"type":"string","title":"originalCurrency","description":"The original currency in which the hold was created."},"referenceDateForExpiration":{"type":"string","title":"referenceDateForExpiration","description":"The date to consider as start date when calculating the number of days passed until expiration","format":"date-time"},"source":{"title":"source","description":"Indicates the source of the authorization hold, the default values is CARD.","enum":["CARD","ACCOUNT"]},"status":{"title":"status","description":"The authorization hold status.","enum":["PENDING","REVERSED","SETTLED","EXPIRED"]},"userTransactionTime":{"type":"string","title":"userTransactionTime","description":"The formatted time at which the user made this authorization hold."}},"required":["advice","amount","externalReferenceId"],"additionalProperties":true,"$defs":{"AccountBalances":{"type":"object","title":"AccountBalances","description":"Account balances presented to inquirer such as card processor","properties":{"accountId":{"type":"string","title":"accountId","description":"The unique account identifier"},"availableBalance":{"type":"number","title":"availableBalance","description":"The available balance of a deposit or credit account"},"cardType":{"title":"cardType","description":"The card type either DEBIT or CREDIT","enum":["DEBIT","CREDIT"]},"creditLimit":{"type":"number","title":"creditLimit","description":"The overdraft limit of a deposit account or the loan amount in case of a credit account"},"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code used for the account"},"totalBalance":{"type":"number","title":"totalBalance","description":"The current balance of a deposit account or principal balance of a revolving credit"}},"additionalProperties":true},"CardAcceptoraf30":{"type":"object","title":"CardAcceptoraf30","description":"The details of the card acceptor (merchant) in a transaction hold.","properties":{"city":{"type":"string","title":"city","description":"The city in which the card acceptor has the business."},"country":{"type":"string","title":"country","description":"The country in which the card acceptor has the business."},"mcc":{"type":"integer","title":"mcc","description":"The Merchant Category Code of the card acceptor."},"name":{"type":"string","title":"name","description":"The name of the card acceptor."},"state":{"type":"string","title":"state","description":"The state in which the card acceptor has the business."},"street":{"type":"string","title":"street","description":"The street in which the card acceptor has the business."},"zip":{"type":"string","title":"zip","description":"The ZIP code of the location in which the card acceptor has the business."}},"additionalProperties":true}}};const schema12 = {"type":"object","title":"AccountBalances","description":"Account balances presented to inquirer such as card processor","properties":{"accountId":{"type":"string","title":"accountId","description":"The unique account identifier"},"availableBalance":{"type":"number","title":"availableBalance","description":"The available balance of a deposit or credit account"},"cardType":{"title":"cardType","description":"The card type either DEBIT or CREDIT","enum":["DEBIT","CREDIT"]},"creditLimit":{"type":"number","title":"creditLimit","description":"The overdraft limit of a deposit account or the loan amount in case of a credit account"},"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code used for the account"},"totalBalance":{"type":"number","title":"totalBalance","description":"The current balance of a deposit account or principal balance of a revolving credit"}},"additionalProperties":true};const schema13 = {"type":"object","title":"CardAcceptoraf30","description":"The details of the card acceptor (merchant) in a transaction hold.","properties":{"city":{"type":"string","title":"city","description":"The city in which the card acceptor has the business."},"country":{"type":"string","title":"country","description":"The country in which the card acceptor has the business."},"mcc":{"type":"integer","title":"mcc","description":"The Merchant Category Code of the card acceptor."},"name":{"type":"string","title":"name","description":"The name of the card acceptor."},"state":{"type":"string","title":"state","description":"The state in which the card acceptor has the business."},"street":{"type":"string","title":"street","description":"The street in which the card acceptor has the business."},"zip":{"type":"string","title":"zip","description":"The ZIP code of the location in which the card acceptor has the business."}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((((data.advice === undefined) && (missing0 = "advice")) || ((data.amount === undefined) && (missing0 = "amount"))) || ((data.externalReferenceId === undefined) && (missing0 = "externalReferenceId"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.accountKey !== undefined){const _errs2 = errors;if(typeof data.accountKey !== "string"){validate10.errors = [{instancePath:instancePath+"/accountKey",schemaPath:"#/properties/accountKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.advice !== undefined){const _errs4 = errors;if(typeof data.advice !== "boolean"){validate10.errors = [{instancePath:instancePath+"/advice",schemaPath:"#/properties/advice/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.amount !== undefined){let data2 = data.amount;const _errs6 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate10.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.balances !== undefined){let data3 = data.balances;const _errs8 = errors;const _errs9 = errors;if(errors === _errs9){if(data3 && typeof data3 == "object" && !Array.isArray(data3)){if(data3.accountId !== undefined){const _errs12 = errors;if(typeof data3.accountId !== "string"){validate10.errors = [{instancePath:instancePath+"/balances/accountId",schemaPath:"#/$defs/AccountBalances/properties/accountId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs12 === errors;}else {var valid2 = true;}if(valid2){if(data3.availableBalance !== undefined){let data5 = data3.availableBalance;const _errs14 = errors;if(!((typeof data5 == "number") && (isFinite(data5)))){validate10.errors = [{instancePath:instancePath+"/balances/availableBalance",schemaPath:"#/$defs/AccountBalances/properties/availableBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs14 === errors;}else {var valid2 = true;}if(valid2){if(data3.cardType !== undefined){let data6 = data3.cardType;const _errs16 = errors;if(!((data6 === "DEBIT") || (data6 === "CREDIT"))){validate10.errors = [{instancePath:instancePath+"/balances/cardType",schemaPath:"#/$defs/AccountBalances/properties/cardType/enum",keyword:"enum",params:{allowedValues: schema12.properties.cardType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs16 === errors;}else {var valid2 = true;}if(valid2){if(data3.creditLimit !== undefined){let data7 = data3.creditLimit;const _errs17 = errors;if(!((typeof data7 == "number") && (isFinite(data7)))){validate10.errors = [{instancePath:instancePath+"/balances/creditLimit",schemaPath:"#/$defs/AccountBalances/properties/creditLimit/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs17 === errors;}else {var valid2 = true;}if(valid2){if(data3.currencyCode !== undefined){const _errs19 = errors;if(typeof data3.currencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/balances/currencyCode",schemaPath:"#/$defs/AccountBalances/properties/currencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs19 === errors;}else {var valid2 = true;}if(valid2){if(data3.totalBalance !== undefined){let data9 = data3.totalBalance;const _errs21 = errors;if(!((typeof data9 == "number") && (isFinite(data9)))){validate10.errors = [{instancePath:instancePath+"/balances/totalBalance",schemaPath:"#/$defs/AccountBalances/properties/totalBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs21 === errors;}else {var valid2 = true;}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/balances",schemaPath:"#/$defs/AccountBalances/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.cardAcceptor !== undefined){let data10 = data.cardAcceptor;const _errs23 = errors;const _errs24 = errors;if(errors === _errs24){if(data10 && typeof data10 == "object" && !Array.isArray(data10)){if(data10.city !== undefined){const _errs27 = errors;if(typeof data10.city !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/city",schemaPath:"#/$defs/CardAcceptoraf30/properties/city/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs27 === errors;}else {var valid4 = true;}if(valid4){if(data10.country !== undefined){const _errs29 = errors;if(typeof data10.country !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/country",schemaPath:"#/$defs/CardAcceptoraf30/properties/country/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs29 === errors;}else {var valid4 = true;}if(valid4){if(data10.mcc !== undefined){let data13 = data10.mcc;const _errs31 = errors;if(!(((typeof data13 == "number") && (!(data13 % 1) && !isNaN(data13))) && (isFinite(data13)))){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/mcc",schemaPath:"#/$defs/CardAcceptoraf30/properties/mcc/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid4 = _errs31 === errors;}else {var valid4 = true;}if(valid4){if(data10.name !== undefined){const _errs33 = errors;if(typeof data10.name !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/name",schemaPath:"#/$defs/CardAcceptoraf30/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs33 === errors;}else {var valid4 = true;}if(valid4){if(data10.state !== undefined){const _errs35 = errors;if(typeof data10.state !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/state",schemaPath:"#/$defs/CardAcceptoraf30/properties/state/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs35 === errors;}else {var valid4 = true;}if(valid4){if(data10.street !== undefined){const _errs37 = errors;if(typeof data10.street !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/street",schemaPath:"#/$defs/CardAcceptoraf30/properties/street/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs37 === errors;}else {var valid4 = true;}if(valid4){if(data10.zip !== undefined){const _errs39 = errors;if(typeof data10.zip !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/zip",schemaPath:"#/$defs/CardAcceptoraf30/properties/zip/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs39 === errors;}else {var valid4 = true;}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/cardAcceptor",schemaPath:"#/$defs/CardAcceptoraf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs23 === errors;}else {var valid0 = true;}if(valid0){if(data.cardToken !== undefined){const _errs41 = errors;if(typeof data.cardToken !== "string"){validate10.errors = [{instancePath:instancePath+"/cardToken",schemaPath:"#/properties/cardToken/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs41 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs43 = errors;if(errors === _errs43){if(errors === _errs43){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs43 === errors;}else {var valid0 = true;}if(valid0){if(data.creditDebitIndicator !== undefined){let data20 = data.creditDebitIndicator;const _errs45 = errors;if(!((data20 === "DBIT") || (data20 === "CRDT"))){validate10.errors = [{instancePath:instancePath+"/creditDebitIndicator",schemaPath:"#/properties/creditDebitIndicator/enum",keyword:"enum",params:{allowedValues: schema11.properties.creditDebitIndicator.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs45 === errors;}else {var valid0 = true;}if(valid0){if(data.currencyCode !== undefined){const _errs46 = errors;if(typeof data.currencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/currencyCode",schemaPath:"#/properties/currencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs46 === errors;}else {var valid0 = true;}if(valid0){if(data.customExpirationPeriod !== undefined){let data22 = data.customExpirationPeriod;const _errs48 = errors;if(!(((typeof data22 == "number") && (!(data22 % 1) && !isNaN(data22))) && (isFinite(data22)))){validate10.errors = [{instancePath:instancePath+"/customExpirationPeriod",schemaPath:"#/properties/customExpirationPeriod/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs48 === errors;}else {var valid0 = true;}if(valid0){if(data.exchangeRate !== undefined){let data23 = data.exchangeRate;const _errs50 = errors;if(!((typeof data23 == "number") && (isFinite(data23)))){validate10.errors = [{instancePath:instancePath+"/exchangeRate",schemaPath:"#/properties/exchangeRate/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs50 === errors;}else {var valid0 = true;}if(valid0){if(data.externalReferenceId !== undefined){const _errs52 = errors;if(typeof data.externalReferenceId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalReferenceId",schemaPath:"#/properties/externalReferenceId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs52 === errors;}else {var valid0 = true;}if(valid0){if(data.originalAmount !== undefined){let data25 = data.originalAmount;const _errs54 = errors;if(!((typeof data25 == "number") && (isFinite(data25)))){validate10.errors = [{instancePath:instancePath+"/originalAmount",schemaPath:"#/properties/originalAmount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs54 === errors;}else {var valid0 = true;}if(valid0){if(data.originalCurrency !== undefined){const _errs56 = errors;if(typeof data.originalCurrency !== "string"){validate10.errors = [{instancePath:instancePath+"/originalCurrency",schemaPath:"#/properties/originalCurrency/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs56 === errors;}else {var valid0 = true;}if(valid0){if(data.referenceDateForExpiration !== undefined){const _errs58 = errors;if(errors === _errs58){if(errors === _errs58){if(!(typeof data.referenceDateForExpiration === "string")){validate10.errors = [{instancePath:instancePath+"/referenceDateForExpiration",schemaPath:"#/properties/referenceDateForExpiration/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs58 === errors;}else {var valid0 = true;}if(valid0){if(data.source !== undefined){let data28 = data.source;const _errs60 = errors;if(!((data28 === "CARD") || (data28 === "ACCOUNT"))){validate10.errors = [{instancePath:instancePath+"/source",schemaPath:"#/properties/source/enum",keyword:"enum",params:{allowedValues: schema11.properties.source.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs60 === errors;}else {var valid0 = true;}if(valid0){if(data.status !== undefined){let data29 = data.status;const _errs61 = errors;if(!((((data29 === "PENDING") || (data29 === "REVERSED")) || (data29 === "SETTLED")) || (data29 === "EXPIRED"))){validate10.errors = [{instancePath:instancePath+"/status",schemaPath:"#/properties/status/enum",keyword:"enum",params:{allowedValues: schema11.properties.status.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs61 === errors;}else {var valid0 = true;}if(valid0){if(data.userTransactionTime !== undefined){const _errs62 = errors;if(typeof data.userTransactionTime !== "string"){validate10.errors = [{instancePath:instancePath+"/userTransactionTime",schemaPath:"#/properties/userTransactionTime/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs62 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;