/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"ApiKeyRotationResult","type":"object","description":"Represents the result of an apikey rotation, by providing the new apiKey and the new secretKey","properties":{"id":{"type":"string","title":"id","description":"The api key ID"},"apiKey":{"type":"string","title":"apiKey","description":"The new apiKey resulted by rotating an existing one"},"secretKey":{"type":"string","title":"secretKey","description":"The new secretKey resulted by rotating an existing apiKey"}},"additionalProperties":true};function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){if(data.id!==void 0){const _errs2=errors;if(typeof data.id!=="string"){validate10.errors=[{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.apiKey!==void 0){const _errs4=errors;if(typeof data.apiKey!=="string"){validate10.errors=[{instancePath:instancePath+"/apiKey",schemaPath:"#/properties/apiKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs4===errors}else{var valid0=true}if(valid0){if(data.secretKey!==void 0){const _errs6=errors;if(typeof data.secretKey!=="string"){validate10.errors=[{instancePath:instancePath+"/secretKey",schemaPath:"#/properties/secretKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs6===errors}else{var valid0=true}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};
