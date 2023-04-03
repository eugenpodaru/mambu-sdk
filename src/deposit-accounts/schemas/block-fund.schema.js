/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"BlockFund","type":"object","description":"Blocks an amount on deposit account that can be later seized","properties":{"externalReferenceId":{"type":"string","title":"externalReferenceId","description":"The external reference ID to be used to reference the block fund in subsequent requests"},"amount":{"type":"number","title":"amount","description":"The amount to be blocked"},"seizedAmount":{"type":"number","title":"seizedAmount","description":"The amount that has been seized"},"notes":{"type":"string","title":"notes","description":"Notes about this block fund"},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The date at which the block fund was created","format":"date-time"},"state":{"title":"state","description":"The state of the block fund","enum":["PENDING","SEIZED","REMOVED","PARTIALLY_SEIZED"]},"creationDate":{"type":"string","title":"creationDate","description":"The date at which the block fund was created","format":"date-time"},"accountKey":{"type":"string","title":"accountKey","description":"The key of the account which block fund belongs to"}},"required":["externalReferenceId","amount"],"additionalProperties":true};function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){let missing0;if(data.externalReferenceId===void 0&&(missing0="externalReferenceId")||data.amount===void 0&&(missing0="amount")){validate10.errors=[{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false}else{if(data.externalReferenceId!==void 0){const _errs2=errors;if(typeof data.externalReferenceId!=="string"){validate10.errors=[{instancePath:instancePath+"/externalReferenceId",schemaPath:"#/properties/externalReferenceId/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.amount!==void 0){let data1=data.amount;const _errs4=errors;if(!(typeof data1=="number"&&isFinite(data1))){validate10.errors=[{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid0=_errs4===errors}else{var valid0=true}if(valid0){if(data.seizedAmount!==void 0){let data2=data.seizedAmount;const _errs6=errors;if(!(typeof data2=="number"&&isFinite(data2))){validate10.errors=[{instancePath:instancePath+"/seizedAmount",schemaPath:"#/properties/seizedAmount/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid0=_errs6===errors}else{var valid0=true}if(valid0){if(data.notes!==void 0){const _errs8=errors;if(typeof data.notes!=="string"){validate10.errors=[{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs8===errors}else{var valid0=true}if(valid0){if(data.lastModifiedDate!==void 0){const _errs10=errors;if(errors===_errs10){if(errors===_errs10){if(!(typeof data.lastModifiedDate==="string")){validate10.errors=[{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs10===errors}else{var valid0=true}if(valid0){if(data.state!==void 0){let data5=data.state;const _errs12=errors;if(!(data5==="PENDING"||data5==="SEIZED"||data5==="REMOVED"||data5==="PARTIALLY_SEIZED")){validate10.errors=[{instancePath:instancePath+"/state",schemaPath:"#/properties/state/enum",keyword:"enum",params:{allowedValues:schema11.properties.state.enum},message:"must be equal to one of the allowed values"}];return false}var valid0=_errs12===errors}else{var valid0=true}if(valid0){if(data.creationDate!==void 0){const _errs13=errors;if(errors===_errs13){if(errors===_errs13){if(!(typeof data.creationDate==="string")){validate10.errors=[{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs13===errors}else{var valid0=true}if(valid0){if(data.accountKey!==void 0){const _errs15=errors;if(typeof data.accountKey!=="string"){validate10.errors=[{instancePath:instancePath+"/accountKey",schemaPath:"#/properties/accountKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs15===errors}else{var valid0=true}}}}}}}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};
