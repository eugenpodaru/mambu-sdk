/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const validate=validate10;var stdin_default=validate10;const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"ChangeWithholdingTaxAction","type":"object","description":"Change deposit account withholding tax rate","properties":{"withholdingTaxSourceKey":{"type":"string","title":"withholdingTaxSourceKey","description":"The ID or encoded key of the new withholding tax to use for the account."}},"required":["withholdingTaxSourceKey"],"additionalProperties":true};function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){let missing0;if(data.withholdingTaxSourceKey===void 0&&(missing0="withholdingTaxSourceKey")){validate10.errors=[{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false}else{if(data.withholdingTaxSourceKey!==void 0){if(typeof data.withholdingTaxSourceKey!=="string"){validate10.errors=[{instancePath:instancePath+"/withholdingTaxSourceKey",schemaPath:"#/properties/withholdingTaxSourceKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate.schema=schema11;export{stdin_default as default,validate};
