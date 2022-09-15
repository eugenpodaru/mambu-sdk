/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"AddCreditArrangementAccountInput","type":"object","description":"Represents the input for the credit arrangement account addition.","properties":{"accountId":{"type":"string","title":"accountId","description":"The encoded key of the account"},"accountType":{"title":"accountType","description":"The type of the account. Can be LOAN or DEPOSIT","enum":["LOAN","DEPOSIT"]}},"required":["accountId","accountType"],"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((data.accountId === undefined) && (missing0 = "accountId")) || ((data.accountType === undefined) && (missing0 = "accountType"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.accountId !== undefined){const _errs2 = errors;if(typeof data.accountId !== "string"){validate10.errors = [{instancePath:instancePath+"/accountId",schemaPath:"#/properties/accountId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.accountType !== undefined){let data1 = data.accountType;const _errs4 = errors;if(!((data1 === "LOAN") || (data1 === "DEPOSIT"))){validate10.errors = [{instancePath:instancePath+"/accountType",schemaPath:"#/properties/accountType/enum",keyword:"enum",params:{allowedValues: schema11.properties.accountType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;