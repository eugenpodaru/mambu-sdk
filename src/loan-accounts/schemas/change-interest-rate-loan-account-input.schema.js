/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","type":"object","title":"ChangeInterestRateLoanAccountInput","description":"Represents the request payload for performing an interest rate change action","properties":{"interestRate":{"type":"number","title":"interestRate","description":"The new interest rate to be available on the account"},"interestSpread":{"type":"number","title":"interestSpread","description":"The new interest spread to be available on the account"},"valueDate":{"type":"string","title":"valueDate","description":"The date when to change the interest rate (as Organization Time)","format":"date-time"},"notes":{"type":"string","title":"notes","description":"The notes for the change interest rate action performed on the loan account"}},"required":["valueDate"],"additionalProperties":false};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if((data.valueDate === undefined) && (missing0 = "valueDate")){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!((((key0 === "interestRate") || (key0 === "interestSpread")) || (key0 === "valueDate")) || (key0 === "notes"))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.interestRate !== undefined){let data0 = data.interestRate;const _errs2 = errors;if(!((typeof data0 == "number") && (isFinite(data0)))){validate10.errors = [{instancePath:instancePath+"/interestRate",schemaPath:"#/properties/interestRate/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.interestSpread !== undefined){let data1 = data.interestSpread;const _errs4 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate10.errors = [{instancePath:instancePath+"/interestSpread",schemaPath:"#/properties/interestSpread/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.valueDate !== undefined){const _errs6 = errors;if(errors === _errs6){if(errors === _errs6){if(!(typeof data.valueDate === "string")){validate10.errors = [{instancePath:instancePath+"/valueDate",schemaPath:"#/properties/valueDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs8 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;