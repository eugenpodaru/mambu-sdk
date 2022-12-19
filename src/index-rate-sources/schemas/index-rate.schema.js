/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"IndexRate","type":"object","description":"An index rate object with a rate and a start date when it becomes valid","properties":{"notes":{"type":"string","title":"notes","description":"Any custom text to be associated with this index rate"},"rate":{"type":"number","title":"rate","description":"The percentage value of the index rate"},"assignedIndexRateSourceKey":{"type":"string","title":"assignedIndexRateSourceKey","description":"The interest index rate source to which this rate is associated"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the index rate, auto generated, unique"},"id":{"type":"string","title":"id","description":"The id of the index rate, can be generated and customized, unique"},"userKey":{"type":"string","title":"userKey","description":"The user key"},"startDate":{"type":"string","title":"startDate","description":"The date when this index rate starts being the active rate for its source","format":"date-time"}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.notes !== undefined){const _errs2 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.rate !== undefined){let data1 = data.rate;const _errs4 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate10.errors = [{instancePath:instancePath+"/rate",schemaPath:"#/properties/rate/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.assignedIndexRateSourceKey !== undefined){const _errs6 = errors;if(typeof data.assignedIndexRateSourceKey !== "string"){validate10.errors = [{instancePath:instancePath+"/assignedIndexRateSourceKey",schemaPath:"#/properties/assignedIndexRateSourceKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs8 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){const _errs10 = errors;if(typeof data.id !== "string"){validate10.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.userKey !== undefined){const _errs12 = errors;if(typeof data.userKey !== "string"){validate10.errors = [{instancePath:instancePath+"/userKey",schemaPath:"#/properties/userKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.startDate !== undefined){const _errs14 = errors;if(errors === _errs14){if(errors === _errs14){if(!(typeof data.startDate === "string")){validate10.errors = [{instancePath:instancePath+"/startDate",schemaPath:"#/properties/startDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs14 === errors;}else {var valid0 = true;}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;