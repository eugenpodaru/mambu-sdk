/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"CardTransactionOutput","type":"object","description":"A card transaction output after a financial transaction was performed.","properties":{"advice":{"type":"boolean","description":"Whether the given request should be accepted without balance validations."},"amount":{"type":"number","description":"The amount of money to be withdrawn in the financial transaction."},"balances":{"$ref":"#/$defs/AccountBalances"},"cardAcceptor":{"$ref":"#/$defs/CardAcceptor"},"cardToken":{"type":"string","description":"The reference token of the card."},"creditDebitIndicator":{"description":"If present, indicates that the card transaction is a refund, and whether is credited or debited","enum":["DBIT","CRDT"]},"currencyCode":{"type":"string","description":"The ISO currency code in which the card reversal transaction is posted. The amounts are stored in the base currency, but the transaction can be created with a foreign currency."},"encodedKey":{"type":"string","description":"The encoded key of the entity, generated, globally unique"},"externalAuthorizationReferenceId":{"type":"string","description":"The external authorization hold reference ID, which relates this card transaction to a previous authorization hold."},"externalReferenceId":{"type":"string","description":"The external reference ID to be used to reference the card transaction in subsequent requests."},"firstRepaymentDate":{"type":"string","description":"The date of the first repayment for the loan account (as Organization Time)","format":"date-time"},"increaseAmountIfNeeded":{"type":"boolean","description":"Increase available amount if needed"},"linkedTransaction":{"$ref":"#/$defs/LinkedTransaction"},"partial":{"type":"boolean","description":"Whether the given request should be a partial clearing or not."},"transactionChannelId":{"type":"string","description":"The ID of the channel through which the payment is done."},"userTransactionTime":{"type":"string","description":"The formatted time at which the user made this card transaction."}},"required":["advice","amount","externalReferenceId","transactionChannelId"],"additionalProperties":true,"$defs":{"AccountBalances":{"type":"object","description":"Account balances presented to inquirer such as card processor","properties":{"accountId":{"type":"string","description":"The unique account identifier"},"availableBalance":{"type":"number","description":"The available balance of a deposit or credit account"},"cardType":{"description":"The card type either DEBIT or CREDIT","enum":["DEBIT","CREDIT"]},"creditLimit":{"type":"number","description":"The overdraft limit of a deposit account or the loan amount in case of a credit account"},"currencyCode":{"type":"string","description":"Currency code used for the account"},"totalBalance":{"type":"number","description":"The current balance of a deposit account or principal balance of a revolving credit"}},"additionalProperties":true},"CardAcceptor":{"type":"object","description":"The details of the card acceptor (merchant) in a transaction hold.","properties":{"city":{"type":"string","description":"The city in which the card acceptor has the business."},"country":{"type":"string","description":"The country in which the card acceptor has the business."},"mcc":{"type":"integer","description":"The Merchant Category Code of the card acceptor."},"name":{"type":"string","description":"The name of the card acceptor."},"state":{"type":"string","description":"The state in which the card acceptor has the business."},"street":{"type":"string","description":"The street in which the card acceptor has the business."},"zip":{"type":"string","description":"The ZIP code of the location in which the card acceptor has the business."}},"additionalProperties":true},"LinkedTransaction":{"type":"object","description":"The details of the linked financial transaction triggered by the card transaction.","properties":{"linkedTransactionKey":{"type":"string","description":"The encodedKey of the linked financial transaction."},"linkedTransactionType":{"description":"The type of the linked transaction (Deposit / Loan).","enum":["LOAN","DEPOSIT"]}},"additionalProperties":true}}};const schema12 = {"type":"object","description":"Account balances presented to inquirer such as card processor","properties":{"accountId":{"type":"string","description":"The unique account identifier"},"availableBalance":{"type":"number","description":"The available balance of a deposit or credit account"},"cardType":{"description":"The card type either DEBIT or CREDIT","enum":["DEBIT","CREDIT"]},"creditLimit":{"type":"number","description":"The overdraft limit of a deposit account or the loan amount in case of a credit account"},"currencyCode":{"type":"string","description":"Currency code used for the account"},"totalBalance":{"type":"number","description":"The current balance of a deposit account or principal balance of a revolving credit"}},"additionalProperties":true};const schema13 = {"type":"object","description":"The details of the card acceptor (merchant) in a transaction hold.","properties":{"city":{"type":"string","description":"The city in which the card acceptor has the business."},"country":{"type":"string","description":"The country in which the card acceptor has the business."},"mcc":{"type":"integer","description":"The Merchant Category Code of the card acceptor."},"name":{"type":"string","description":"The name of the card acceptor."},"state":{"type":"string","description":"The state in which the card acceptor has the business."},"street":{"type":"string","description":"The street in which the card acceptor has the business."},"zip":{"type":"string","description":"The ZIP code of the location in which the card acceptor has the business."}},"additionalProperties":true};const schema14 = {"type":"object","description":"The details of the linked financial transaction triggered by the card transaction.","properties":{"linkedTransactionKey":{"type":"string","description":"The encodedKey of the linked financial transaction."},"linkedTransactionType":{"description":"The type of the linked transaction (Deposit / Loan).","enum":["LOAN","DEPOSIT"]}},"additionalProperties":true};const formats0 = require("ajv-formats/dist/formats").fullFormats["date-time"];function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((((data.advice === undefined) && (missing0 = "advice")) || ((data.amount === undefined) && (missing0 = "amount"))) || ((data.externalReferenceId === undefined) && (missing0 = "externalReferenceId"))) || ((data.transactionChannelId === undefined) && (missing0 = "transactionChannelId"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.advice !== undefined){const _errs2 = errors;if(typeof data.advice !== "boolean"){validate10.errors = [{instancePath:instancePath+"/advice",schemaPath:"#/properties/advice/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.amount !== undefined){let data1 = data.amount;const _errs4 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate10.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.balances !== undefined){let data2 = data.balances;const _errs6 = errors;const _errs7 = errors;if(errors === _errs7){if(data2 && typeof data2 == "object" && !Array.isArray(data2)){if(data2.accountId !== undefined){const _errs10 = errors;if(typeof data2.accountId !== "string"){validate10.errors = [{instancePath:instancePath+"/balances/accountId",schemaPath:"#/$defs/AccountBalances/properties/accountId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}if(valid2){if(data2.availableBalance !== undefined){let data4 = data2.availableBalance;const _errs12 = errors;if(!((typeof data4 == "number") && (isFinite(data4)))){validate10.errors = [{instancePath:instancePath+"/balances/availableBalance",schemaPath:"#/$defs/AccountBalances/properties/availableBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs12 === errors;}else {var valid2 = true;}if(valid2){if(data2.cardType !== undefined){let data5 = data2.cardType;const _errs14 = errors;if(!((data5 === "DEBIT") || (data5 === "CREDIT"))){validate10.errors = [{instancePath:instancePath+"/balances/cardType",schemaPath:"#/$defs/AccountBalances/properties/cardType/enum",keyword:"enum",params:{allowedValues: schema12.properties.cardType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs14 === errors;}else {var valid2 = true;}if(valid2){if(data2.creditLimit !== undefined){let data6 = data2.creditLimit;const _errs15 = errors;if(!((typeof data6 == "number") && (isFinite(data6)))){validate10.errors = [{instancePath:instancePath+"/balances/creditLimit",schemaPath:"#/$defs/AccountBalances/properties/creditLimit/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs15 === errors;}else {var valid2 = true;}if(valid2){if(data2.currencyCode !== undefined){const _errs17 = errors;if(typeof data2.currencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/balances/currencyCode",schemaPath:"#/$defs/AccountBalances/properties/currencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs17 === errors;}else {var valid2 = true;}if(valid2){if(data2.totalBalance !== undefined){let data8 = data2.totalBalance;const _errs19 = errors;if(!((typeof data8 == "number") && (isFinite(data8)))){validate10.errors = [{instancePath:instancePath+"/balances/totalBalance",schemaPath:"#/$defs/AccountBalances/properties/totalBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs19 === errors;}else {var valid2 = true;}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/balances",schemaPath:"#/$defs/AccountBalances/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.cardAcceptor !== undefined){let data9 = data.cardAcceptor;const _errs21 = errors;const _errs22 = errors;if(errors === _errs22){if(data9 && typeof data9 == "object" && !Array.isArray(data9)){if(data9.city !== undefined){const _errs25 = errors;if(typeof data9.city !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/city",schemaPath:"#/$defs/CardAcceptor/properties/city/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs25 === errors;}else {var valid4 = true;}if(valid4){if(data9.country !== undefined){const _errs27 = errors;if(typeof data9.country !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/country",schemaPath:"#/$defs/CardAcceptor/properties/country/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs27 === errors;}else {var valid4 = true;}if(valid4){if(data9.mcc !== undefined){let data12 = data9.mcc;const _errs29 = errors;if(!(((typeof data12 == "number") && (!(data12 % 1) && !isNaN(data12))) && (isFinite(data12)))){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/mcc",schemaPath:"#/$defs/CardAcceptor/properties/mcc/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid4 = _errs29 === errors;}else {var valid4 = true;}if(valid4){if(data9.name !== undefined){const _errs31 = errors;if(typeof data9.name !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/name",schemaPath:"#/$defs/CardAcceptor/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs31 === errors;}else {var valid4 = true;}if(valid4){if(data9.state !== undefined){const _errs33 = errors;if(typeof data9.state !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/state",schemaPath:"#/$defs/CardAcceptor/properties/state/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs33 === errors;}else {var valid4 = true;}if(valid4){if(data9.street !== undefined){const _errs35 = errors;if(typeof data9.street !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/street",schemaPath:"#/$defs/CardAcceptor/properties/street/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs35 === errors;}else {var valid4 = true;}if(valid4){if(data9.zip !== undefined){const _errs37 = errors;if(typeof data9.zip !== "string"){validate10.errors = [{instancePath:instancePath+"/cardAcceptor/zip",schemaPath:"#/$defs/CardAcceptor/properties/zip/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs37 === errors;}else {var valid4 = true;}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/cardAcceptor",schemaPath:"#/$defs/CardAcceptor/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs21 === errors;}else {var valid0 = true;}if(valid0){if(data.cardToken !== undefined){const _errs39 = errors;if(typeof data.cardToken !== "string"){validate10.errors = [{instancePath:instancePath+"/cardToken",schemaPath:"#/properties/cardToken/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs39 === errors;}else {var valid0 = true;}if(valid0){if(data.creditDebitIndicator !== undefined){let data18 = data.creditDebitIndicator;const _errs41 = errors;if(!((data18 === "DBIT") || (data18 === "CRDT"))){validate10.errors = [{instancePath:instancePath+"/creditDebitIndicator",schemaPath:"#/properties/creditDebitIndicator/enum",keyword:"enum",params:{allowedValues: schema11.properties.creditDebitIndicator.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs41 === errors;}else {var valid0 = true;}if(valid0){if(data.currencyCode !== undefined){const _errs42 = errors;if(typeof data.currencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/currencyCode",schemaPath:"#/properties/currencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs42 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs44 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs44 === errors;}else {var valid0 = true;}if(valid0){if(data.externalAuthorizationReferenceId !== undefined){const _errs46 = errors;if(typeof data.externalAuthorizationReferenceId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalAuthorizationReferenceId",schemaPath:"#/properties/externalAuthorizationReferenceId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs46 === errors;}else {var valid0 = true;}if(valid0){if(data.externalReferenceId !== undefined){const _errs48 = errors;if(typeof data.externalReferenceId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalReferenceId",schemaPath:"#/properties/externalReferenceId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs48 === errors;}else {var valid0 = true;}if(valid0){if(data.firstRepaymentDate !== undefined){let data23 = data.firstRepaymentDate;const _errs50 = errors;if(errors === _errs50){if(errors === _errs50){if(typeof data23 === "string"){if(!(formats0.validate(data23))){validate10.errors = [{instancePath:instancePath+"/firstRepaymentDate",schemaPath:"#/properties/firstRepaymentDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""}];return false;}}else {validate10.errors = [{instancePath:instancePath+"/firstRepaymentDate",schemaPath:"#/properties/firstRepaymentDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs50 === errors;}else {var valid0 = true;}if(valid0){if(data.increaseAmountIfNeeded !== undefined){const _errs52 = errors;if(typeof data.increaseAmountIfNeeded !== "boolean"){validate10.errors = [{instancePath:instancePath+"/increaseAmountIfNeeded",schemaPath:"#/properties/increaseAmountIfNeeded/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs52 === errors;}else {var valid0 = true;}if(valid0){if(data.linkedTransaction !== undefined){let data25 = data.linkedTransaction;const _errs54 = errors;const _errs55 = errors;if(errors === _errs55){if(data25 && typeof data25 == "object" && !Array.isArray(data25)){if(data25.linkedTransactionKey !== undefined){const _errs58 = errors;if(typeof data25.linkedTransactionKey !== "string"){validate10.errors = [{instancePath:instancePath+"/linkedTransaction/linkedTransactionKey",schemaPath:"#/$defs/LinkedTransaction/properties/linkedTransactionKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs58 === errors;}else {var valid6 = true;}if(valid6){if(data25.linkedTransactionType !== undefined){let data27 = data25.linkedTransactionType;const _errs60 = errors;if(!((data27 === "LOAN") || (data27 === "DEPOSIT"))){validate10.errors = [{instancePath:instancePath+"/linkedTransaction/linkedTransactionType",schemaPath:"#/$defs/LinkedTransaction/properties/linkedTransactionType/enum",keyword:"enum",params:{allowedValues: schema14.properties.linkedTransactionType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid6 = _errs60 === errors;}else {var valid6 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/linkedTransaction",schemaPath:"#/$defs/LinkedTransaction/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs54 === errors;}else {var valid0 = true;}if(valid0){if(data.partial !== undefined){const _errs61 = errors;if(typeof data.partial !== "boolean"){validate10.errors = [{instancePath:instancePath+"/partial",schemaPath:"#/properties/partial/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs61 === errors;}else {var valid0 = true;}if(valid0){if(data.transactionChannelId !== undefined){const _errs63 = errors;if(typeof data.transactionChannelId !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionChannelId",schemaPath:"#/properties/transactionChannelId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs63 === errors;}else {var valid0 = true;}if(valid0){if(data.userTransactionTime !== undefined){const _errs65 = errors;if(typeof data.userTransactionTime !== "string"){validate10.errors = [{instancePath:instancePath+"/userTransactionTime",schemaPath:"#/properties/userTransactionTime/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs65 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;