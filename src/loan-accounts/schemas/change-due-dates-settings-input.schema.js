/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"ChangeDueDatesSettingsInput","type":"object","description":"Represents the request payload for performing change due dates settings action","properties":{"valueDate":{"type":"string","title":"valueDate","description":"The date when to change the due dates settings","format":"date-time"},"notes":{"type":"string","title":"notes","description":"The notes for the change due dates settings action performed on the loan account"},"entryDate":{"type":"string","title":"entryDate","description":"The date when to change the due dates settings - deprecated, use valueDate instead","format":"date-time"},"fixedDaysOfMonth":{"type":"array","title":"fixedDaysOfMonth","description":"The new fixed days of month to be used on the account","items":{"type":"integer"}}},"required":["fixedDaysOfMonth"],"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.fixedDaysOfMonth === undefined) && (missing0 = "fixedDaysOfMonth")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.valueDate !== undefined){const _errs2 = errors;if(errors === _errs2){if(errors === _errs2){if(!(typeof data.valueDate === "string")){validate10.errors = [{instancePath:instancePath+"/valueDate",schemaPath:"#/properties/valueDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs4 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.entryDate !== undefined){const _errs6 = errors;if(errors === _errs6){if(errors === _errs6){if(!(typeof data.entryDate === "string")){validate10.errors = [{instancePath:instancePath+"/entryDate",schemaPath:"#/properties/entryDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.fixedDaysOfMonth !== undefined){let data3 = data.fixedDaysOfMonth;const _errs8 = errors;if(errors === _errs8){if(Array.isArray(data3)){var valid1 = true;const len0 = data3.length;for(let i0=0; i0<len0; i0++){let data4 = data3[i0];const _errs10 = errors;if(!(((typeof data4 == "number") && (!(data4 % 1) && !isNaN(data4))) && (isFinite(data4)))){validate10.errors = [{instancePath:instancePath+"/fixedDaysOfMonth/" + i0,schemaPath:"#/properties/fixedDaysOfMonth/items/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid1 = _errs10 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/fixedDaysOfMonth",schemaPath:"#/properties/fixedDaysOfMonth/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs8 === errors;}else {var valid0 = true;}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;