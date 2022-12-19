/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"PostGLJournalEntriesDTO","type":"object","description":"The representation of a payload for creating GL Journal Entries","properties":{"date":{"type":"string","title":"date","description":"Date/time stamp when the entries were recorded (Booking Date)","format":"date-time"},"branchId":{"type":"string","title":"branchId","description":"The id of the assigned branch for the journal entries"},"notes":{"type":"string","title":"notes","description":"Optional notes entered by the user when they performed the journal entry log"},"credits":{"type":"array","title":"credits","description":"The list of GL Accounts to be credited with the corresponding amounts","items":{"description":"The list of GL Accounts to be credited with the corresponding amounts","$ref":"#/$defs/GLAccountAmountaf30"}},"debits":{"type":"array","title":"debits","description":"The list of GL Accounts to be debited with the corresponding amounts","items":{"description":"The list of GL Accounts to be debited with the corresponding amounts","$ref":"#/$defs/GLAccountAmountaf30"}},"transactionId":{"type":"string","title":"transactionId","description":"An id for the transaction. Not unique. Will be auto generated if not provided."}},"required":["date"],"additionalProperties":true,"$defs":{"GLAccountAmountaf30":{"type":"object","title":"GLAccountAmountaf30","description":"The unit that represents the GL Account and Amount used in a GL Journal Entry record.","properties":{"amount":{"type":"number","title":"amount","description":"The amount which was debited or credited"},"glAccount":{"type":"string","title":"glAccount","description":"GL Account Code for the the GL Account that was debited or credited"}},"additionalProperties":true}}};const schema12 = {"type":"object","title":"GLAccountAmountaf30","description":"The unit that represents the GL Account and Amount used in a GL Journal Entry record.","properties":{"amount":{"type":"number","title":"amount","description":"The amount which was debited or credited"},"glAccount":{"type":"string","title":"glAccount","description":"GL Account Code for the the GL Account that was debited or credited"}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.date === undefined) && (missing0 = "date")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.date !== undefined){const _errs2 = errors;if(errors === _errs2){if(errors === _errs2){if(!(typeof data.date === "string")){validate10.errors = [{instancePath:instancePath+"/date",schemaPath:"#/properties/date/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.branchId !== undefined){const _errs4 = errors;if(typeof data.branchId !== "string"){validate10.errors = [{instancePath:instancePath+"/branchId",schemaPath:"#/properties/branchId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs6 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.credits !== undefined){let data3 = data.credits;const _errs8 = errors;if(errors === _errs8){if(Array.isArray(data3)){var valid1 = true;const len0 = data3.length;for(let i0=0; i0<len0; i0++){let data4 = data3[i0];const _errs10 = errors;const _errs11 = errors;if(errors === _errs11){if(data4 && typeof data4 == "object" && !Array.isArray(data4)){if(data4.amount !== undefined){let data5 = data4.amount;const _errs14 = errors;if(!((typeof data5 == "number") && (isFinite(data5)))){validate10.errors = [{instancePath:instancePath+"/credits/" + i0+"/amount",schemaPath:"#/$defs/GLAccountAmountaf30/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid3 = _errs14 === errors;}else {var valid3 = true;}if(valid3){if(data4.glAccount !== undefined){const _errs16 = errors;if(typeof data4.glAccount !== "string"){validate10.errors = [{instancePath:instancePath+"/credits/" + i0+"/glAccount",schemaPath:"#/$defs/GLAccountAmountaf30/properties/glAccount/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs16 === errors;}else {var valid3 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/credits/" + i0,schemaPath:"#/$defs/GLAccountAmountaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs10 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/credits",schemaPath:"#/properties/credits/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.debits !== undefined){let data7 = data.debits;const _errs18 = errors;if(errors === _errs18){if(Array.isArray(data7)){var valid4 = true;const len1 = data7.length;for(let i1=0; i1<len1; i1++){let data8 = data7[i1];const _errs20 = errors;const _errs21 = errors;if(errors === _errs21){if(data8 && typeof data8 == "object" && !Array.isArray(data8)){if(data8.amount !== undefined){let data9 = data8.amount;const _errs24 = errors;if(!((typeof data9 == "number") && (isFinite(data9)))){validate10.errors = [{instancePath:instancePath+"/debits/" + i1+"/amount",schemaPath:"#/$defs/GLAccountAmountaf30/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid6 = _errs24 === errors;}else {var valid6 = true;}if(valid6){if(data8.glAccount !== undefined){const _errs26 = errors;if(typeof data8.glAccount !== "string"){validate10.errors = [{instancePath:instancePath+"/debits/" + i1+"/glAccount",schemaPath:"#/$defs/GLAccountAmountaf30/properties/glAccount/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs26 === errors;}else {var valid6 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/debits/" + i1,schemaPath:"#/$defs/GLAccountAmountaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid4 = _errs20 === errors;if(!valid4){break;}}}else {validate10.errors = [{instancePath:instancePath+"/debits",schemaPath:"#/properties/debits/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.transactionId !== undefined){const _errs28 = errors;if(typeof data.transactionId !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionId",schemaPath:"#/properties/transactionId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs28 === errors;}else {var valid0 = true;}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;