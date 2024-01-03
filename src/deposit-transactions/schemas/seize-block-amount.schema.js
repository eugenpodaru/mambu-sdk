/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"SeizeBlockAmount","type":"object","description":"Represents the information for seizing a block amount on a deposit account.","properties":{"amount":{"type":"number","title":"amount","description":"The amount of the block fund"},"blockId":{"type":"string","title":"blockId","description":"The id of the block fund"},"externalId":{"type":"string","title":"externalId","description":"The external id of the current transaction, customizable, unique"},"notes":{"type":"string","title":"notes","description":"Extra notes about the current transaction"},"transactionChannelId":{"type":"string","title":"transactionChannelId","description":"The id of the channel through which the transaction is done."}},"required":["blockId","transactionChannelId"],"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((data.blockId === undefined) && (missing0 = "blockId")) || ((data.transactionChannelId === undefined) && (missing0 = "transactionChannelId"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.amount !== undefined){let data0 = data.amount;const _errs2 = errors;if(!((typeof data0 == "number") && (isFinite(data0)))){validate10.errors = [{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.blockId !== undefined){const _errs4 = errors;if(typeof data.blockId !== "string"){validate10.errors = [{instancePath:instancePath+"/blockId",schemaPath:"#/properties/blockId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.externalId !== undefined){const _errs6 = errors;if(typeof data.externalId !== "string"){validate10.errors = [{instancePath:instancePath+"/externalId",schemaPath:"#/properties/externalId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs8 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.transactionChannelId !== undefined){const _errs10 = errors;if(typeof data.transactionChannelId !== "string"){validate10.errors = [{instancePath:instancePath+"/transactionChannelId",schemaPath:"#/properties/transactionChannelId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;