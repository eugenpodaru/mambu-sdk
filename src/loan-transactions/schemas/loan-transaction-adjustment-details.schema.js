/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"LoanTransactionAdjustmentDetails","description":"Contains the details of the transaction adjustment","properties":{"bookingDate":{"type":"string","title":"bookingDate","description":"Date when the adjustment transaction is logged into accounting. Can be null. Available only for REPAYMENT, PAYMENT_MADE and FEE","format":"date-time"},"notes":{"type":"string","title":"notes","description":"Notes detailing why the transaction is adjusted"},"installments":{"type":"array","title":"installments","description":"Details of installments with their corresponding amounts to be added to the reduced fee/penalty","items":{"description":"Details of installments with their corresponding amounts to be added to the reduced fee/penalty","$ref":"#/$defs/AdjustTransactionInstallmentDetailsDtoaf30"}}},"required":["notes"],"additionalProperties":false,"$defs":{"AdjustTransactionInstallmentDetailsDtoaf30":{"type":"object","title":"AdjustTransactionInstallmentDetailsDTO","description":"Contains the details for the spread of the adjusted amount over the installments","properties":{"installmentKey":{"type":"string","title":"installmentKey","description":"The encoded key of the installment"},"amountToAdd":{"type":"number","title":"amountToAdd","description":"The amount to be added on the fee/penalty due amounts (depending on transaction type), on the corresponding installment"}},"additionalProperties":false}}};const schema12 = {"type":"object","title":"AdjustTransactionInstallmentDetailsDTO","description":"Contains the details for the spread of the adjusted amount over the installments","properties":{"installmentKey":{"type":"string","title":"installmentKey","description":"The encoded key of the installment"},"amountToAdd":{"type":"number","title":"amountToAdd","description":"The amount to be added on the fee/penalty due amounts (depending on transaction type), on the corresponding installment"}},"additionalProperties":false};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.notes === undefined) && (missing0 = "notes")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!(((key0 === "bookingDate") || (key0 === "notes")) || (key0 === "installments"))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.bookingDate !== undefined){const _errs2 = errors;if(errors === _errs2){if(errors === _errs2){if(!(typeof data.bookingDate === "string")){validate10.errors = [{instancePath:instancePath+"/bookingDate",schemaPath:"#/properties/bookingDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs4 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.installments !== undefined){let data2 = data.installments;const _errs6 = errors;if(errors === _errs6){if(Array.isArray(data2)){var valid1 = true;const len0 = data2.length;for(let i0=0; i0<len0; i0++){let data3 = data2[i0];const _errs8 = errors;const _errs9 = errors;if(errors === _errs9){if(data3 && typeof data3 == "object" && !Array.isArray(data3)){const _errs11 = errors;for(const key1 in data3){if(!((key1 === "installmentKey") || (key1 === "amountToAdd"))){validate10.errors = [{instancePath:instancePath+"/installments/" + i0,schemaPath:"#/$defs/AdjustTransactionInstallmentDetailsDtoaf30/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"}];return false;break;}}if(_errs11 === errors){if(data3.installmentKey !== undefined){const _errs12 = errors;if(typeof data3.installmentKey !== "string"){validate10.errors = [{instancePath:instancePath+"/installments/" + i0+"/installmentKey",schemaPath:"#/$defs/AdjustTransactionInstallmentDetailsDtoaf30/properties/installmentKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs12 === errors;}else {var valid3 = true;}if(valid3){if(data3.amountToAdd !== undefined){let data5 = data3.amountToAdd;const _errs14 = errors;if(!((typeof data5 == "number") && (isFinite(data5)))){validate10.errors = [{instancePath:instancePath+"/installments/" + i0+"/amountToAdd",schemaPath:"#/$defs/AdjustTransactionInstallmentDetailsDtoaf30/properties/amountToAdd/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid3 = _errs14 === errors;}else {var valid3 = true;}}}}else {validate10.errors = [{instancePath:instancePath+"/installments/" + i0,schemaPath:"#/$defs/AdjustTransactionInstallmentDetailsDtoaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs8 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/installments",schemaPath:"#/properties/installments/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs6 === errors;}else {var valid0 = true;}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;