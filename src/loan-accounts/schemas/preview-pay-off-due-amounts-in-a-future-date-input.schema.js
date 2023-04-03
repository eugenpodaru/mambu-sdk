/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"PreviewPayOffDueAmountsInAFutureDateInput","type":"object","description":"Represents the payload request to preview the pay off due amounts in a future date","properties":{"valueDate":{"type":"string","title":"valueDate","description":"The date until which the amounts due for pay off should be calculated","format":"date-time"}},"required":["valueDate"],"additionalProperties":true};function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){let missing0;if(data.valueDate===void 0&&(missing0="valueDate")){validate10.errors=[{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false}else{if(data.valueDate!==void 0){const _errs2=errors;if(errors===_errs2){if(errors===_errs2){if(!(typeof data.valueDate==="string")){validate10.errors=[{instancePath:instancePath+"/valueDate",schemaPath:"#/properties/valueDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};
