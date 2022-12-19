/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"CollateralAssetsReevaluationResponse","type":"object","description":"Holds the information about collateral assets reevaluation status.","properties":{"bulkProcessKey":{"type":"string","title":"bulkProcessKey","description":"The encoded key of the collateral assets reevaluation task"},"status":{"title":"status","description":"The collateral assets reevaluation status","enum":["QUEUED","IN_PROGRESS","COMPLETE","NOT_FOUND","CANCEL","TO_BE_CANCELED","TIMED_OUT","ERROR","TRANSIENT_ERROR","OVERRIDDEN"]}},"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.bulkProcessKey !== undefined){const _errs2 = errors;if(typeof data.bulkProcessKey !== "string"){validate10.errors = [{instancePath:instancePath+"/bulkProcessKey",schemaPath:"#/properties/bulkProcessKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.status !== undefined){const _errs4 = errors;let valid1;valid1 = false;for(const v0 of schema11.properties.status.enum){if(func0(data.status, v0)){valid1 = true;break;}}if(!valid1){validate10.errors = [{instancePath:instancePath+"/status",schemaPath:"#/properties/status/enum",keyword:"enum",params:{allowedValues: schema11.properties.status.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;