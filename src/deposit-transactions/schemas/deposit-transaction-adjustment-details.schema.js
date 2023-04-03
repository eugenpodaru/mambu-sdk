/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"DepositTransactionAdjustmentDetails","type":"object","description":"Contains the details of the transaction adjustment","properties":{"bookingDate":{"type":"string","title":"bookingDate","description":"Date when the adjustment transaction is logged into accounting. Can be null. Available only for DEPOSIT and WITHDRAWAL","format":"date-time"},"notes":{"type":"string","title":"notes","description":"Notes detailing why the transaction is adjusted"}},"additionalProperties":true};function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){if(data.bookingDate!==void 0){const _errs2=errors;if(errors===_errs2){if(errors===_errs2){if(!(typeof data.bookingDate==="string")){validate10.errors=[{instancePath:instancePath+"/bookingDate",schemaPath:"#/properties/bookingDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.notes!==void 0){const _errs4=errors;if(typeof data.notes!=="string"){validate10.errors=[{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs4===errors}else{var valid0=true}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};
