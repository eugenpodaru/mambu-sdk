/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"WithdrawalRedrawTransactionInput","description":"Represents the request payload for creating a transaction of type WITHDRAWAL_REDRAW","properties":{"transactionDetails":{"title":"transactionDetails","$ref":"#/$defs/LoanTransactionDetailsInputaf30"},"amount":{"type":"number","title":"amount","description":"The amount to be withdrawn from redraw balance"},"notes":{"type":"string","title":"notes","description":"Extra notes about the withdrawal transaction. Notes can have at most 255 characters in length."},"externalId":{"type":"string","title":"externalId","description":"The external id of the withdrawal transaction, customizable, unique"},"bookingDate":{"type":"string","title":"bookingDate","description":"The booking date of the withdrawal transaction (as Organization Time)","format":"date-time"},"valueDate":{"type":"string","title":"valueDate","description":"The value date of the withdrawal transaction (as Organization Time)","format":"date-time"},"originalCurrencyCode":{"type":"string","title":"originalCurrencyCode","description":"The currency code for the transaction"}},"required":["amount"],"additionalProperties":false,"$defs":{"LoanTransactionDetailsInputaf30":{"type":"object","title":"LoanTransactionDetailsInput","description":"Contains the details about transaction including fields like transaction channel key and channel ID","properties":{"transactionChannelId":{"type":"string","title":"transactionChannelId","description":"The id of the transaction channel associated with the transaction details input."},"transactionChannelKey":{"type":"string","title":"transactionChannelKey","description":"The encoded key of the transaction channel associated with the transaction details input."}},"additionalProperties":false}}};const schema12 = {"type":"object","title":"LoanTransactionDetailsInput","description":"Contains the details about transaction including fields like transaction channel key and channel ID","properties":{"transactionChannelId":{"type":"string","title":"transactionChannelId","description":"The id of the transaction channel associated with the transaction details input."},"transactionChannelKey":{"type":"string","title":"transactionChannelKey","description":"The encoded key of the transaction channel associated with the transaction details input."}},"additionalProperties":false};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.amount === undefined) && (missing0 = "amount")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!(((((((key0 === "transactionDetails") || (key0 === "amount")) || (key0 === "notes")) || (key0 === "externalId")) || (key0 === "bookingDate")) || (key0 === "valueDate")) || (key0 === "originalCurrencyCode"))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.transactionDetails !== undefined){let data0 = data.transactionDetails;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){const _errs5 = errors;for(const key1 in data0){if(!((key1 === "transactionChannelId") || (key1 === "transactionChannelKey"))){validate10.errors = [{instancePath:instancePath+"/transactionDetails",schemaPath:"#/$defs/LoanTransactionDetailsInputaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"}];return false;break;}}if(_errs5 === errors){if(data0.transactionChannelId !== undefined){const _errs6 = errors;if(typeof data0.transactionChannelId !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionDetails/transactionChannelId",schemaPath:"#/$defs/LoanTransactionDetailsInputaf30/properties/transactionChannelId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.transactionChannelKey !== undefined){const _errs8 = errors;if(typeof data0.transactionChannelKey !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionDetails/transactionChannelKey",schemaPath:"#/$defs/LoanTransactionDetailsInputaf30/properties/transactionChannelKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}}}}else {validate10.errors = [{instancePath:instancePath+"/transactionDetails",schemaPath:"#/$defs/LoanTransactionDetailsInputaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.amount !== undefined){let data3 = data.amount;const _errs10 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate10.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs12 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.externalId !== undefined){const _errs14 = errors;if(typeof data.externalId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalId",schemaPath:"#/properties/externalId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.bookingDate !== undefined){const _errs16 = errors;if(errors === _errs16){if(errors === _errs16){if(!(typeof data.bookingDate === "string")){validate10.errors = [{instancePath:instancePath+"/bookingDate",schemaPath:"#/properties/bookingDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.valueDate !== undefined){const _errs18 = errors;if(errors === _errs18){if(errors === _errs18){if(!(typeof data.valueDate === "string")){validate10.errors = [{instancePath:instancePath+"/valueDate",schemaPath:"#/properties/valueDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.originalCurrencyCode !== undefined){const _errs20 = errors;if(typeof data.originalCurrencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/originalCurrencyCode",schemaPath:"#/properties/originalCurrencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs20 === errors;}else {var valid0 = true;}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;