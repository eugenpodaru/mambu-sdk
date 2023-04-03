/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"PlannedFeeKeys","type":"object","description":"The planned installment fees encoded keys list","properties":{"encodedKeys":{"type":"array","title":"encodedKeys","description":"The list of encoded keys of the planned installment fees.","items":{"type":"string"}}},"required":["encodedKeys"],"additionalProperties":true};function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){let missing0;if(data.encodedKeys===void 0&&(missing0="encodedKeys")){validate10.errors=[{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false}else{if(data.encodedKeys!==void 0){let data0=data.encodedKeys;const _errs2=errors;if(errors===_errs2){if(Array.isArray(data0)){var valid1=true;const len0=data0.length;for(let i0=0;i0<len0;i0++){const _errs4=errors;if(typeof data0[i0]!=="string"){validate10.errors=[{instancePath:instancePath+"/encodedKeys/"+i0,schemaPath:"#/properties/encodedKeys/items/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid1=_errs4===errors;if(!valid1){break}}}else{validate10.errors=[{instancePath:instancePath+"/encodedKeys",schemaPath:"#/properties/encodedKeys/type",keyword:"type",params:{type:"array"},message:"must be array"}];return false}}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};
