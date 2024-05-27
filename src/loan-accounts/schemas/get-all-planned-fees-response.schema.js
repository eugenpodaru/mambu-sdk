/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"GetAllPlannedFeesResponse","type":"array","items":{"$ref":"#/$defs/PlannedInstallmentFee"},"$defs":{"PlannedInstallmentFee":{"type":"object","description":"The planned fee details holds the information related to the installment key, predefined fee key and amount","properties":{"amount":{"type":"number","description":"The amount of the planned fee."},"applyOnDate":{"type":"string","description":"The date when a planned fee should be applied, overriding installment's due date. It should match the interval of the installment. If it belong to first installment, it should be between disbursement date and installment due date.","format":"date-time"},"encodedKey":{"type":"string","description":"The encoded key of the planned installment fee, auto generated, unique."},"installmentKey":{"type":"string","description":"The encoded key of the installment on which the predefined fee is planned."},"installmentNumber":{"type":"integer","description":"The number of the installment on which the predefined fee is planned. It is used only in the case when fees are created at the same time with the loan account creation or during preview schedule, before account creation, otherwise this should be empty and installmentKey will be used to identify an installment."},"predefinedFeeKey":{"type":"string","description":"The encoded key of the predefined fee which is planned."}},"required":["predefinedFeeKey"],"additionalProperties":true}}};const schema12 = {"type":"object","description":"The planned fee details holds the information related to the installment key, predefined fee key and amount","properties":{"amount":{"type":"number","description":"The amount of the planned fee."},"applyOnDate":{"type":"string","description":"The date when a planned fee should be applied, overriding installment's due date. It should match the interval of the installment. If it belong to first installment, it should be between disbursement date and installment due date.","format":"date-time"},"encodedKey":{"type":"string","description":"The encoded key of the planned installment fee, auto generated, unique."},"installmentKey":{"type":"string","description":"The encoded key of the installment on which the predefined fee is planned."},"installmentNumber":{"type":"integer","description":"The number of the installment on which the predefined fee is planned. It is used only in the case when fees are created at the same time with the loan account creation or during preview schedule, before account creation, otherwise this should be empty and installmentKey will be used to identify an installment."},"predefinedFeeKey":{"type":"string","description":"The encoded key of the predefined fee which is planned."}},"required":["predefinedFeeKey"],"additionalProperties":true};const formats0 = require("ajv-formats/dist/formats").fullFormats["date-time"];function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs1 = errors;const _errs2 = errors;if(errors === _errs2){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing0;if((data0.predefinedFeeKey === undefined) && (missing0 = "predefinedFeeKey")){validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/PlannedInstallmentFee/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data0.amount !== undefined){let data1 = data0.amount;const _errs5 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/amount",schemaPath:"#/$defs/PlannedInstallmentFee/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid2 = _errs5 === errors;}else {var valid2 = true;}if(valid2){if(data0.applyOnDate !== undefined){let data2 = data0.applyOnDate;const _errs7 = errors;if(errors === _errs7){if(errors === _errs7){if(typeof data2 === "string"){if(!(formats0.validate(data2))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/applyOnDate",schemaPath:"#/$defs/PlannedInstallmentFee/properties/applyOnDate/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""}];return false;}}else {validate10.errors = [{instancePath:instancePath+"/" + i0+"/applyOnDate",schemaPath:"#/$defs/PlannedInstallmentFee/properties/applyOnDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid2 = _errs7 === errors;}else {var valid2 = true;}if(valid2){if(data0.encodedKey !== undefined){const _errs9 = errors;if(typeof data0.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/encodedKey",schemaPath:"#/$defs/PlannedInstallmentFee/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs9 === errors;}else {var valid2 = true;}if(valid2){if(data0.installmentKey !== undefined){const _errs11 = errors;if(typeof data0.installmentKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/installmentKey",schemaPath:"#/$defs/PlannedInstallmentFee/properties/installmentKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs11 === errors;}else {var valid2 = true;}if(valid2){if(data0.installmentNumber !== undefined){let data5 = data0.installmentNumber;const _errs13 = errors;if(!(((typeof data5 == "number") && (!(data5 % 1) && !isNaN(data5))) && (isFinite(data5)))){validate10.errors = [{instancePath:instancePath+"/" + i0+"/installmentNumber",schemaPath:"#/$defs/PlannedInstallmentFee/properties/installmentNumber/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid2 = _errs13 === errors;}else {var valid2 = true;}if(valid2){if(data0.predefinedFeeKey !== undefined){const _errs15 = errors;if(typeof data0.predefinedFeeKey !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/predefinedFeeKey",schemaPath:"#/$defs/PlannedInstallmentFee/properties/predefinedFeeKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs15 === errors;}else {var valid2 = true;}}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/PlannedInstallmentFee/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;