/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"LoanAccountPayOffInput","description":"Allows specifying the input for loan account pay off","properties":{"transactionDetails":{"title":"transactionDetails","$ref":"#/$defs/TransactionDetailsaf30"},"externalId":{"type":"string","title":"externalId","description":"External id for Repayment transaction"},"notes":{"type":"string","title":"notes","description":"Extra notes for Repayment transaction logged for Pay Off action"},"payOffAdjustableAmounts":{"title":"payOffAdjustableAmounts","$ref":"#/$defs/PayOffAdjustableAmountsaf30"}},"additionalProperties":false,"$defs":{"TransactionDetailsaf30":{"type":"object","title":"TransactionDetails","description":"Contains the details about transaction including fields like transaction channel key and channel id","properties":{"transactionChannelId":{"type":"string","title":"transactionChannelId","description":"The id of the transaction channel associated with the transaction details."},"transactionChannelKey":{"type":"string","title":"transactionChannelKey","description":"The encoded key of the transaction channel associated with the transaction details."}},"additionalProperties":false},"PayOffAdjustableAmountsaf30":{"type":"object","title":"PayOffAdjustableAmounts","description":"Adjustable amounts to be paid for Pay Off action","properties":{"feesPaid":{"type":"number","title":"feesPaid","description":"The fee amount to be paid for Pay Off action"},"penaltyPaid":{"type":"number","title":"penaltyPaid","description":"The penalty amount to be paid for Pay Off action"},"interestPaid":{"type":"number","title":"interestPaid","description":"The interest amount to be paid for Pay Off action"}},"additionalProperties":false}}};const schema12 = {"type":"object","title":"TransactionDetails","description":"Contains the details about transaction including fields like transaction channel key and channel id","properties":{"transactionChannelId":{"type":"string","title":"transactionChannelId","description":"The id of the transaction channel associated with the transaction details."},"transactionChannelKey":{"type":"string","title":"transactionChannelKey","description":"The encoded key of the transaction channel associated with the transaction details."}},"additionalProperties":false};const schema13 = {"type":"object","title":"PayOffAdjustableAmounts","description":"Adjustable amounts to be paid for Pay Off action","properties":{"feesPaid":{"type":"number","title":"feesPaid","description":"The fee amount to be paid for Pay Off action"},"penaltyPaid":{"type":"number","title":"penaltyPaid","description":"The penalty amount to be paid for Pay Off action"},"interestPaid":{"type":"number","title":"interestPaid","description":"The interest amount to be paid for Pay Off action"}},"additionalProperties":false};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){const _errs1 = errors;for(const key0 in data){if(!((((key0 === "transactionDetails") || (key0 === "externalId")) || (key0 === "notes")) || (key0 === "payOffAdjustableAmounts"))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.transactionDetails !== undefined){let data0 = data.transactionDetails;const _errs2 = errors;const _errs3 = errors;if(errors === _errs3){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){const _errs5 = errors;for(const key1 in data0){if(!((key1 === "transactionChannelId") || (key1 === "transactionChannelKey"))){validate10.errors = [{instancePath:instancePath+"/transactionDetails",schemaPath:"#/$defs/TransactionDetailsaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"}];return false;break;}}if(_errs5 === errors){if(data0.transactionChannelId !== undefined){const _errs6 = errors;if(typeof data0.transactionChannelId !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionDetails/transactionChannelId",schemaPath:"#/$defs/TransactionDetailsaf30/properties/transactionChannelId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs6 === errors;}else {var valid2 = true;}if(valid2){if(data0.transactionChannelKey !== undefined){const _errs8 = errors;if(typeof data0.transactionChannelKey !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionDetails/transactionChannelKey",schemaPath:"#/$defs/TransactionDetailsaf30/properties/transactionChannelKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}}}}else {validate10.errors = [{instancePath:instancePath+"/transactionDetails",schemaPath:"#/$defs/TransactionDetailsaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.externalId !== undefined){const _errs10 = errors;if(typeof data.externalId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalId",schemaPath:"#/properties/externalId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs12 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.payOffAdjustableAmounts !== undefined){let data5 = data.payOffAdjustableAmounts;const _errs14 = errors;const _errs15 = errors;if(errors === _errs15){if(data5 && typeof data5 == "object" && !Array.isArray(data5)){const _errs17 = errors;for(const key2 in data5){if(!(((key2 === "feesPaid") || (key2 === "penaltyPaid")) || (key2 === "interestPaid"))){validate10.errors = [{instancePath:instancePath+"/payOffAdjustableAmounts",schemaPath:"#/$defs/PayOffAdjustableAmountsaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key2},message:"must NOT have additional properties"}];return false;break;}}if(_errs17 === errors){if(data5.feesPaid !== undefined){let data6 = data5.feesPaid;const _errs18 = errors;if(!((typeof data6 == "number") && (isFinite(data6)))){validate10.errors = [{instancePath:instancePath+"/payOffAdjustableAmounts/feesPaid",schemaPath:"#/$defs/PayOffAdjustableAmountsaf30/properties/feesPaid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs18 === errors;}else {var valid4 = true;}if(valid4){if(data5.penaltyPaid !== undefined){let data7 = data5.penaltyPaid;const _errs20 = errors;if(!((typeof data7 == "number") && (isFinite(data7)))){validate10.errors = [{instancePath:instancePath+"/payOffAdjustableAmounts/penaltyPaid",schemaPath:"#/$defs/PayOffAdjustableAmountsaf30/properties/penaltyPaid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs20 === errors;}else {var valid4 = true;}if(valid4){if(data5.interestPaid !== undefined){let data8 = data5.interestPaid;const _errs22 = errors;if(!((typeof data8 == "number") && (isFinite(data8)))){validate10.errors = [{instancePath:instancePath+"/payOffAdjustableAmounts/interestPaid",schemaPath:"#/$defs/PayOffAdjustableAmountsaf30/properties/interestPaid/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs22 === errors;}else {var valid4 = true;}}}}}else {validate10.errors = [{instancePath:instancePath+"/payOffAdjustableAmounts",schemaPath:"#/$defs/PayOffAdjustableAmountsaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs14 === errors;}else {var valid0 = true;}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;