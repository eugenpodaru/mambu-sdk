/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"GetCreditArrangementsByGroupIdOrKeyResponse","type":"array","items":{"$ref":"#/$defs/CreditArrangement"},"$defs":{"CreditArrangement":{"type":"object","description":"Represents a credit arrangement.","properties":{"amount":{"type":"number","description":"The maximum credit amount the client can be exposed to."},"approvedDate":{"type":"string","description":"The date when the credit arrangement was approved.","format":"date-time"},"availableCreditAmount":{"type":"number","description":"The available amount of the credit arrangement."},"closedDate":{"type":"string","description":"The date when the credit arrangement was closed.","format":"date-time"},"consumedCreditAmount":{"type":"number","description":"The consumed amount of the credit arrangement, which is calculated as the difference between the amount and available amount."},"creationDate":{"type":"string","description":"The date when the credit arrangement was created.","format":"date-time"},"currency":{"$ref":"#/$defs/Currency"},"encodedKey":{"type":"string","description":"The encoded key of the credit arrangement, it is auto generated, and unique."},"expireDate":{"type":"string","description":"The date when the credit arrangement expires.","format":"date-time"},"exposureLimitType":{"description":"The type of exposure limit calculation method used for the credit arrangement.","enum":["APPROVED_AMOUNT","OUTSTANDING_AMOUNT"]},"holderKey":{"type":"string","description":"The encoded key of the credit arrangement holder (individual client or group)."},"holderType":{"description":"The type of the credit arrangement holder (individual client or group).","enum":["CLIENT","GROUP"]},"id":{"type":"string","description":"The ID of credit arrangement, can be generated and customized, and must be unique."},"lastModifiedDate":{"type":"string","description":"The last date when the credit arrangement was modified.","format":"date-time"},"notes":{"type":"string","description":"The notes or description of the credit arrangement."},"startDate":{"type":"string","description":"The start date from which the credit arrangement became active.","format":"date-time"},"state":{"description":"The state of the credit arrangement.","enum":["PENDING_APPROVAL","APPROVED","ACTIVE","CLOSED","WITHDRAWN","REJECTED"]},"subState":{"description":"The substate of credit arrangement.","enum":["PENDING_APPROVAL","APPROVED","ACTIVE","CLOSED","WITHDRAWN","REJECTED"]}},"required":["amount","expireDate","holderType","startDate"],"additionalProperties":true},"Currency":{"type":"object","description":"Represents a currency eg. USD, EUR.","properties":{"code":{"description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZIG","ZMK","ZWL","ZMW","SSP","NON_FIAT"]},"currencyCode":{"type":"string","description":"Currency code for NON_FIAT currency."}},"additionalProperties":true}}};const schema12 = {"type":"object","description":"Represents a credit arrangement.","properties":{"amount":{"type":"number","description":"The maximum credit amount the client can be exposed to."},"approvedDate":{"type":"string","description":"The date when the credit arrangement was approved.","format":"date-time"},"availableCreditAmount":{"type":"number","description":"The available amount of the credit arrangement."},"closedDate":{"type":"string","description":"The date when the credit arrangement was closed.","format":"date-time"},"consumedCreditAmount":{"type":"number","description":"The consumed amount of the credit arrangement, which is calculated as the difference between the amount and available amount."},"creationDate":{"type":"string","description":"The date when the credit arrangement was created.","format":"date-time"},"currency":{"$ref":"#/$defs/Currency"},"encodedKey":{"type":"string","description":"The encoded key of the credit arrangement, it is auto generated, and unique."},"expireDate":{"type":"string","description":"The date when the credit arrangement expires.","format":"date-time"},"exposureLimitType":{"description":"The type of exposure limit calculation method used for the credit arrangement.","enum":["APPROVED_AMOUNT","OUTSTANDING_AMOUNT"]},"holderKey":{"type":"string","description":"The encoded key of the credit arrangement holder (individual client or group)."},"holderType":{"description":"The type of the credit arrangement holder (individual client or group).","enum":["CLIENT","GROUP"]},"id":{"type":"string","description":"The ID of credit arrangement, can be generated and customized, and must be unique."},"lastModifiedDate":{"type":"string","description":"The last date when the credit arrangement was modified.","format":"date-time"},"notes":{"type":"string","description":"The notes or description of the credit arrangement."},"startDate":{"type":"string","description":"The start date from which the credit arrangement became active.","format":"date-time"},"state":{"description":"The state of the credit arrangement.","enum":["PENDING_APPROVAL","APPROVED","ACTIVE","CLOSED","WITHDRAWN","REJECTED"]},"subState":{"description":"The substate of credit arrangement.","enum":["PENDING_APPROVAL","APPROVED","ACTIVE","CLOSED","WITHDRAWN","REJECTED"]}},"required":["amount","expireDate","holderType","startDate"],"additionalProperties":true};const schema13 = {"type":"object","description":"Represents a currency eg. USD, EUR.","properties":{"code":{"description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZIG","ZMK","ZWL","ZMW","SSP","NON_FIAT"]},"currencyCode":{"type":"string","description":"Currency code for NON_FIAT currency."}},"additionalProperties":true};const formats0 = require("ajv-formats/dist/formats").fullFormats["date-time"];const func0 = require("ajv/dist/runtime/equal").default;function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((((data.amount === undefined) && (missing0 = "amount")) || ((data.expireDate === undefined) && (missing0 = "expireDate"))) || ((data.holderType === undefined) && (missing0 = "holderType"))) || ((data.startDate === undefined) && (missing0 = "startDate"))){validate11.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.amount !== undefined){let data0 = data.amount;const _errs2 = errors;if(!((typeof data0 == "number") && (isFinite(data0)))){validate11.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.approvedDate !== undefined){let data1 = data.approvedDate;const _errs4 = errors;if(errors === _errs4){if(errors === _errs4){if(typeof data1 === "string"){if(!(formats0.validate(data1))){validate11.errors = [{instancePath:instancePath+"/approvedDate",schemaPath:"#/properties/approvedDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/approvedDate",schemaPath:"#/properties/approvedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.availableCreditAmount !== undefined){let data2 = data.availableCreditAmount;const _errs6 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate11.errors = [{instancePath:instancePath+"/availableCreditAmount",schemaPath:"#/properties/availableCreditAmount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.closedDate !== undefined){let data3 = data.closedDate;const _errs8 = errors;if(errors === _errs8){if(errors === _errs8){if(typeof data3 === "string"){if(!(formats0.validate(data3))){validate11.errors = [{instancePath:instancePath+"/closedDate",schemaPath:"#/properties/closedDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/closedDate",schemaPath:"#/properties/closedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.consumedCreditAmount !== undefined){let data4 = data.consumedCreditAmount;const _errs10 = errors;if(!((typeof data4 == "number") && (isFinite(data4)))){validate11.errors = [{instancePath:instancePath+"/consumedCreditAmount",schemaPath:"#/properties/consumedCreditAmount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){let data5 = data.creationDate;const _errs12 = errors;if(errors === _errs12){if(errors === _errs12){if(typeof data5 === "string"){if(!(formats0.validate(data5))){validate11.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.currency !== undefined){let data6 = data.currency;const _errs14 = errors;const _errs15 = errors;if(errors === _errs15){if(data6 && typeof data6 == "object" && !Array.isArray(data6)){if(data6.code !== undefined){const _errs18 = errors;let valid3;valid3 = false;for(const v0 of schema13.properties.code.enum){if(func0(data6.code, v0)){valid3 = true;break;}}if(!valid3){validate11.errors = [{instancePath:instancePath+"/currency/code",schemaPath:"#/$defs/Currency/properties/code/enum",keyword:"enum",params:{allowedValues: schema13.properties.code.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs18 === errors;}else {var valid2 = true;}if(valid2){if(data6.currencyCode !== undefined){const _errs19 = errors;if(typeof data6.currencyCode !== "string"){validate11.errors = [{instancePath:instancePath+"/currency/currencyCode",schemaPath:"#/$defs/Currency/properties/currencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs19 === errors;}else {var valid2 = true;}}}else {validate11.errors = [{instancePath:instancePath+"/currency",schemaPath:"#/$defs/Currency/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs21 = errors;if(typeof data.encodedKey !== "string"){validate11.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs21 === errors;}else {var valid0 = true;}if(valid0){if(data.expireDate !== undefined){let data10 = data.expireDate;const _errs23 = errors;if(errors === _errs23){if(errors === _errs23){if(typeof data10 === "string"){if(!(formats0.validate(data10))){validate11.errors = [{instancePath:instancePath+"/expireDate",schemaPath:"#/properties/expireDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/expireDate",schemaPath:"#/properties/expireDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs23 === errors;}else {var valid0 = true;}if(valid0){if(data.exposureLimitType !== undefined){let data11 = data.exposureLimitType;const _errs25 = errors;if(!((data11 === "APPROVED_AMOUNT") || (data11 === "OUTSTANDING_AMOUNT"))){validate11.errors = [{instancePath:instancePath+"/exposureLimitType",schemaPath:"#/properties/exposureLimitType/enum",keyword:"enum",params:{allowedValues: schema12.properties.exposureLimitType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs25 === errors;}else {var valid0 = true;}if(valid0){if(data.holderKey !== undefined){const _errs26 = errors;if(typeof data.holderKey !== "string"){validate11.errors = [{instancePath:instancePath+"/holderKey",schemaPath:"#/properties/holderKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs26 === errors;}else {var valid0 = true;}if(valid0){if(data.holderType !== undefined){let data13 = data.holderType;const _errs28 = errors;if(!((data13 === "CLIENT") || (data13 === "GROUP"))){validate11.errors = [{instancePath:instancePath+"/holderType",schemaPath:"#/properties/holderType/enum",keyword:"enum",params:{allowedValues: schema12.properties.holderType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs28 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){const _errs29 = errors;if(typeof data.id !== "string"){validate11.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs29 === errors;}else {var valid0 = true;}if(valid0){if(data.lastModifiedDate !== undefined){let data15 = data.lastModifiedDate;const _errs31 = errors;if(errors === _errs31){if(errors === _errs31){if(typeof data15 === "string"){if(!(formats0.validate(data15))){validate11.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs31 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs33 = errors;if(typeof data.notes !== "string"){validate11.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs33 === errors;}else {var valid0 = true;}if(valid0){if(data.startDate !== undefined){let data17 = data.startDate;const _errs35 = errors;if(errors === _errs35){if(errors === _errs35){if(typeof data17 === "string"){if(!(formats0.validate(data17))){validate11.errors = [{instancePath:instancePath+"/startDate",schemaPath:"#/properties/startDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""}];return false;}}else {validate11.errors = [{instancePath:instancePath+"/startDate",schemaPath:"#/properties/startDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs35 === errors;}else {var valid0 = true;}if(valid0){if(data.state !== undefined){const _errs37 = errors;let valid4;valid4 = false;for(const v1 of schema12.properties.state.enum){if(func0(data.state, v1)){valid4 = true;break;}}if(!valid4){validate11.errors = [{instancePath:instancePath+"/state",schemaPath:"#/properties/state/enum",keyword:"enum",params:{allowedValues: schema12.properties.state.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs37 === errors;}else {var valid0 = true;}if(valid0){if(data.subState !== undefined){const _errs38 = errors;let valid5;valid5 = false;for(const v2 of schema12.properties.subState.enum){if(func0(data.subState, v2)){valid5 = true;break;}}if(!valid5){validate11.errors = [{instancePath:instancePath+"/subState",schemaPath:"#/properties/subState/enum",keyword:"enum",params:{allowedValues: schema12.properties.subState.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs38 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){const _errs1 = errors;if(!(validate11(data[i0], {instancePath:instancePath+"/" + i0,parentData:data,parentDataProperty:i0,rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;