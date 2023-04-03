/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
import{createRequire}from"module";const require2=createRequire(import.meta.url);"use strict";const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"Task","type":"object","description":"Represents a human task that can be assigned by a user to another. When a Task is created, it's set to status OPEN","properties":{"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last date at which the task was modified","format":"date-time"},"createdByUserKey":{"type":"string","title":"createdByUserKey","description":"The key of the user that created this task. The value is not editable and it is populated at task creation with the current user key"},"dueDate":{"type":"string","title":"dueDate","description":"The due date of the task, at which the task has to be completed","format":"date"},"description":{"type":"string","title":"description","description":"Description of the task"},"creationDate":{"type":"string","title":"creationDate","description":"The date at which the task was created","format":"date-time"},"title":{"type":"string","title":"title","description":"Title of the task"},"taskLinkKey":{"type":"string","title":"taskLinkKey","description":"Who is the link of this task. If null, means nobody is linked to this task"},"createdByFullName":{"type":"string","title":"createdByFullName","description":"Name of the user who created the task"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the task, auto generated, unique"},"id":{"type":"integer","title":"id","description":"The id of the task, uniquely generated for the task"},"assignedUserKey":{"type":"string","title":"assignedUserKey","description":"Key of the user this task is assigned to"},"taskLinkType":{"title":"taskLinkType","description":"The type of the owner represented by the task link key","enum":["CLIENT","GROUP","LOAN_PRODUCT","SAVINGS_PRODUCT","CENTRE","BRANCH","USER","LOAN_ACCOUNT","DEPOSIT_ACCOUNT","ID_DOCUMENT","LINE_OF_CREDIT","GL_JOURNAL_ENTRY"]},"status":{"title":"status","description":"The status of this task, a new task is always OPEN","enum":["OPEN","COMPLETED"]},"templateKey":{"type":"string","title":"templateKey","description":"What template key was used to create the task"}},"required":["dueDate"],"additionalProperties":true};const func0=require2("ajv/dist/runtime/equal").default;function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){let missing0;if(data.dueDate===void 0&&(missing0="dueDate")){validate10.errors=[{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false}else{if(data.lastModifiedDate!==void 0){const _errs2=errors;if(errors===_errs2){if(errors===_errs2){if(!(typeof data.lastModifiedDate==="string")){validate10.errors=[{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.createdByUserKey!==void 0){const _errs4=errors;if(typeof data.createdByUserKey!=="string"){validate10.errors=[{instancePath:instancePath+"/createdByUserKey",schemaPath:"#/properties/createdByUserKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs4===errors}else{var valid0=true}if(valid0){if(data.dueDate!==void 0){const _errs6=errors;if(errors===_errs6){if(errors===_errs6){if(!(typeof data.dueDate==="string")){validate10.errors=[{instancePath:instancePath+"/dueDate",schemaPath:"#/properties/dueDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs6===errors}else{var valid0=true}if(valid0){if(data.description!==void 0){const _errs8=errors;if(typeof data.description!=="string"){validate10.errors=[{instancePath:instancePath+"/description",schemaPath:"#/properties/description/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs8===errors}else{var valid0=true}if(valid0){if(data.creationDate!==void 0){const _errs10=errors;if(errors===_errs10){if(errors===_errs10){if(!(typeof data.creationDate==="string")){validate10.errors=[{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs10===errors}else{var valid0=true}if(valid0){if(data.title!==void 0){const _errs12=errors;if(typeof data.title!=="string"){validate10.errors=[{instancePath:instancePath+"/title",schemaPath:"#/properties/title/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs12===errors}else{var valid0=true}if(valid0){if(data.taskLinkKey!==void 0){const _errs14=errors;if(typeof data.taskLinkKey!=="string"){validate10.errors=[{instancePath:instancePath+"/taskLinkKey",schemaPath:"#/properties/taskLinkKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs14===errors}else{var valid0=true}if(valid0){if(data.createdByFullName!==void 0){const _errs16=errors;if(typeof data.createdByFullName!=="string"){validate10.errors=[{instancePath:instancePath+"/createdByFullName",schemaPath:"#/properties/createdByFullName/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs16===errors}else{var valid0=true}if(valid0){if(data.encodedKey!==void 0){const _errs18=errors;if(typeof data.encodedKey!=="string"){validate10.errors=[{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs18===errors}else{var valid0=true}if(valid0){if(data.id!==void 0){let data9=data.id;const _errs20=errors;if(!(typeof data9=="number"&&(!(data9%1)&&!isNaN(data9))&&isFinite(data9))){validate10.errors=[{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type:"integer"},message:"must be integer"}];return false}var valid0=_errs20===errors}else{var valid0=true}if(valid0){if(data.assignedUserKey!==void 0){const _errs22=errors;if(typeof data.assignedUserKey!=="string"){validate10.errors=[{instancePath:instancePath+"/assignedUserKey",schemaPath:"#/properties/assignedUserKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs22===errors}else{var valid0=true}if(valid0){if(data.taskLinkType!==void 0){const _errs24=errors;let valid1;valid1=false;for(const v0 of schema11.properties.taskLinkType.enum){if(func0(data.taskLinkType,v0)){valid1=true;break}}if(!valid1){validate10.errors=[{instancePath:instancePath+"/taskLinkType",schemaPath:"#/properties/taskLinkType/enum",keyword:"enum",params:{allowedValues:schema11.properties.taskLinkType.enum},message:"must be equal to one of the allowed values"}];return false}var valid0=_errs24===errors}else{var valid0=true}if(valid0){if(data.status!==void 0){let data12=data.status;const _errs25=errors;if(!(data12==="OPEN"||data12==="COMPLETED")){validate10.errors=[{instancePath:instancePath+"/status",schemaPath:"#/properties/status/enum",keyword:"enum",params:{allowedValues:schema11.properties.status.enum},message:"must be equal to one of the allowed values"}];return false}var valid0=_errs25===errors}else{var valid0=true}if(valid0){if(data.templateKey!==void 0){const _errs26=errors;if(typeof data.templateKey!=="string"){validate10.errors=[{instancePath:instancePath+"/templateKey",schemaPath:"#/properties/templateKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs26===errors}else{var valid0=true}}}}}}}}}}}}}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};
