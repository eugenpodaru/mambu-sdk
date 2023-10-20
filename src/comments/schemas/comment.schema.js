/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const validate=validate10;var stdin_default=validate10;const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"Comment","type":"object","description":"Represents information about the comment data transfer object.","properties":{"ownerType":{"title":"ownerType","description":"The type of the entity that owns this comment.","enum":["CLIENT","GROUP","LOAN_PRODUCT","SAVINGS_PRODUCT","CENTRE","BRANCH","USER","LOAN_ACCOUNT","DEPOSIT_ACCOUNT","ID_DOCUMENT","LINE_OF_CREDIT","GL_JOURNAL_ENTRY"]},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last date when this comment was modified.","format":"date-time"},"encodedKey":{"type":"string","title":"encodedKey","description":"The comments's encoded key, which is auto-generated and unique."},"text":{"type":"string","title":"text","description":"The message in the comment."},"creationDate":{"type":"string","title":"creationDate","description":"The creation date of the comment.","format":"date-time"},"ownerKey":{"type":"string","title":"ownerKey","description":"The encoded key of the entity that owns this comment."},"userKey":{"type":"string","title":"userKey","description":"The user's key."}},"additionalProperties":true};const func0=require("ajv/dist/runtime/equal").default;function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){if(data.ownerType!==void 0){const _errs2=errors;let valid1;valid1=false;for(const v0 of schema11.properties.ownerType.enum){if(func0(data.ownerType,v0)){valid1=true;break}}if(!valid1){validate10.errors=[{instancePath:instancePath+"/ownerType",schemaPath:"#/properties/ownerType/enum",keyword:"enum",params:{allowedValues:schema11.properties.ownerType.enum},message:"must be equal to one of the allowed values"}];return false}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.lastModifiedDate!==void 0){const _errs3=errors;if(errors===_errs3){if(errors===_errs3){if(!(typeof data.lastModifiedDate==="string")){validate10.errors=[{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs3===errors}else{var valid0=true}if(valid0){if(data.encodedKey!==void 0){const _errs5=errors;if(typeof data.encodedKey!=="string"){validate10.errors=[{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs5===errors}else{var valid0=true}if(valid0){if(data.text!==void 0){const _errs7=errors;if(typeof data.text!=="string"){validate10.errors=[{instancePath:instancePath+"/text",schemaPath:"#/properties/text/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs7===errors}else{var valid0=true}if(valid0){if(data.creationDate!==void 0){const _errs9=errors;if(errors===_errs9){if(errors===_errs9){if(!(typeof data.creationDate==="string")){validate10.errors=[{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs9===errors}else{var valid0=true}if(valid0){if(data.ownerKey!==void 0){const _errs11=errors;if(typeof data.ownerKey!=="string"){validate10.errors=[{instancePath:instancePath+"/ownerKey",schemaPath:"#/properties/ownerKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs11===errors}else{var valid0=true}if(valid0){if(data.userKey!==void 0){const _errs13=errors;if(typeof data.userKey!=="string"){validate10.errors=[{instancePath:instancePath+"/userKey",schemaPath:"#/properties/userKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs13===errors}else{var valid0=true}}}}}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate.schema=schema11;export{stdin_default as default,validate};
