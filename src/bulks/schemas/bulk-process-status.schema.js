/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
import{createRequire}from"module";const require2=createRequire(import.meta.url);"use strict";const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"BulkProcessStatus","type":"object","description":"Holds information about the status of a bulk process","properties":{"errors":{"type":"array","title":"errors","description":"List of errors","items":{"$ref":"#/$defs/BulkProcessingErroraf30"}},"processedItems":{"type":"array","title":"processedItems","description":"List of successful processed items","items":{"$ref":"#/$defs/BulkProcessingSuccessaf30"}},"status":{"title":"status","description":"Bulk process status","enum":["QUEUED","IN_PROGRESS","COMPLETE","NOT_FOUND","CANCEL","TO_BE_CANCELED","TIMED_OUT","ERROR","TRANSIENT_ERROR","OVERRIDDEN"]}},"additionalProperties":true,"$defs":{"BulkProcessingErroraf30":{"type":"object","title":"BulkProcessingErroraf30","description":"Holds information about the error encountered processing an item in bulk","properties":{"externalId":{"type":"string","title":"externalId","description":"Optional field populated only when request payload contains an externalId"},"errorCode":{"type":"integer","title":"errorCode","description":"Numeric value associated to the error reason"},"indexInRequest":{"type":"integer","title":"indexInRequest","description":"The index of the entity/item from bulk request that failed on processing"},"errorSource":{"type":"string","title":"errorSource","description":"Details about the error"},"errorReason":{"type":"string","title":"errorReason","description":"Error reason"}},"additionalProperties":true},"BulkProcessingSuccessaf30":{"type":"object","title":"BulkProcessingSuccessaf30","description":"Holds details about successful processed item","properties":{"externalId":{"type":"string","title":"externalId","description":"Optional field populated only when request payload contains an externalId"},"id":{"type":"string","title":"id","description":"Unique identifier for the newly created resource"},"indexInRequest":{"type":"integer","title":"indexInRequest","description":"The index of the entity/item from bulk request that failed on processing"}},"additionalProperties":true}}};const schema12={"type":"object","title":"BulkProcessingErroraf30","description":"Holds information about the error encountered processing an item in bulk","properties":{"externalId":{"type":"string","title":"externalId","description":"Optional field populated only when request payload contains an externalId"},"errorCode":{"type":"integer","title":"errorCode","description":"Numeric value associated to the error reason"},"indexInRequest":{"type":"integer","title":"indexInRequest","description":"The index of the entity/item from bulk request that failed on processing"},"errorSource":{"type":"string","title":"errorSource","description":"Details about the error"},"errorReason":{"type":"string","title":"errorReason","description":"Error reason"}},"additionalProperties":true};const schema13={"type":"object","title":"BulkProcessingSuccessaf30","description":"Holds details about successful processed item","properties":{"externalId":{"type":"string","title":"externalId","description":"Optional field populated only when request payload contains an externalId"},"id":{"type":"string","title":"id","description":"Unique identifier for the newly created resource"},"indexInRequest":{"type":"integer","title":"indexInRequest","description":"The index of the entity/item from bulk request that failed on processing"}},"additionalProperties":true};const func0=require2("ajv/dist/runtime/equal").default;function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){if(data.errors!==void 0){let data0=data.errors;const _errs2=errors;if(errors===_errs2){if(Array.isArray(data0)){var valid1=true;const len0=data0.length;for(let i0=0;i0<len0;i0++){let data1=data0[i0];const _errs4=errors;const _errs5=errors;if(errors===_errs5){if(data1&&typeof data1=="object"&&!Array.isArray(data1)){if(data1.externalId!==void 0){const _errs8=errors;if(typeof data1.externalId!=="string"){validate10.errors=[{instancePath:instancePath+"/errors/"+i0+"/externalId",schemaPath:"#/$defs/BulkProcessingErroraf30/properties/externalId/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid3=_errs8===errors}else{var valid3=true}if(valid3){if(data1.errorCode!==void 0){let data3=data1.errorCode;const _errs10=errors;if(!(typeof data3=="number"&&(!(data3%1)&&!isNaN(data3))&&isFinite(data3))){validate10.errors=[{instancePath:instancePath+"/errors/"+i0+"/errorCode",schemaPath:"#/$defs/BulkProcessingErroraf30/properties/errorCode/type",keyword:"type",params:{type:"integer"},message:"must be integer"}];return false}var valid3=_errs10===errors}else{var valid3=true}if(valid3){if(data1.indexInRequest!==void 0){let data4=data1.indexInRequest;const _errs12=errors;if(!(typeof data4=="number"&&(!(data4%1)&&!isNaN(data4))&&isFinite(data4))){validate10.errors=[{instancePath:instancePath+"/errors/"+i0+"/indexInRequest",schemaPath:"#/$defs/BulkProcessingErroraf30/properties/indexInRequest/type",keyword:"type",params:{type:"integer"},message:"must be integer"}];return false}var valid3=_errs12===errors}else{var valid3=true}if(valid3){if(data1.errorSource!==void 0){const _errs14=errors;if(typeof data1.errorSource!=="string"){validate10.errors=[{instancePath:instancePath+"/errors/"+i0+"/errorSource",schemaPath:"#/$defs/BulkProcessingErroraf30/properties/errorSource/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid3=_errs14===errors}else{var valid3=true}if(valid3){if(data1.errorReason!==void 0){const _errs16=errors;if(typeof data1.errorReason!=="string"){validate10.errors=[{instancePath:instancePath+"/errors/"+i0+"/errorReason",schemaPath:"#/$defs/BulkProcessingErroraf30/properties/errorReason/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid3=_errs16===errors}else{var valid3=true}}}}}}else{validate10.errors=[{instancePath:instancePath+"/errors/"+i0,schemaPath:"#/$defs/BulkProcessingErroraf30/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid1=_errs4===errors;if(!valid1){break}}}else{validate10.errors=[{instancePath:instancePath+"/errors",schemaPath:"#/properties/errors/type",keyword:"type",params:{type:"array"},message:"must be array"}];return false}}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.processedItems!==void 0){let data7=data.processedItems;const _errs18=errors;if(errors===_errs18){if(Array.isArray(data7)){var valid4=true;const len1=data7.length;for(let i1=0;i1<len1;i1++){let data8=data7[i1];const _errs20=errors;const _errs21=errors;if(errors===_errs21){if(data8&&typeof data8=="object"&&!Array.isArray(data8)){if(data8.externalId!==void 0){const _errs24=errors;if(typeof data8.externalId!=="string"){validate10.errors=[{instancePath:instancePath+"/processedItems/"+i1+"/externalId",schemaPath:"#/$defs/BulkProcessingSuccessaf30/properties/externalId/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid6=_errs24===errors}else{var valid6=true}if(valid6){if(data8.id!==void 0){const _errs26=errors;if(typeof data8.id!=="string"){validate10.errors=[{instancePath:instancePath+"/processedItems/"+i1+"/id",schemaPath:"#/$defs/BulkProcessingSuccessaf30/properties/id/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid6=_errs26===errors}else{var valid6=true}if(valid6){if(data8.indexInRequest!==void 0){let data11=data8.indexInRequest;const _errs28=errors;if(!(typeof data11=="number"&&(!(data11%1)&&!isNaN(data11))&&isFinite(data11))){validate10.errors=[{instancePath:instancePath+"/processedItems/"+i1+"/indexInRequest",schemaPath:"#/$defs/BulkProcessingSuccessaf30/properties/indexInRequest/type",keyword:"type",params:{type:"integer"},message:"must be integer"}];return false}var valid6=_errs28===errors}else{var valid6=true}}}}else{validate10.errors=[{instancePath:instancePath+"/processedItems/"+i1,schemaPath:"#/$defs/BulkProcessingSuccessaf30/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid4=_errs20===errors;if(!valid4){break}}}else{validate10.errors=[{instancePath:instancePath+"/processedItems",schemaPath:"#/properties/processedItems/type",keyword:"type",params:{type:"array"},message:"must be array"}];return false}}var valid0=_errs18===errors}else{var valid0=true}if(valid0){if(data.status!==void 0){const _errs30=errors;let valid7;valid7=false;for(const v0 of schema11.properties.status.enum){if(func0(data.status,v0)){valid7=true;break}}if(!valid7){validate10.errors=[{instancePath:instancePath+"/status",schemaPath:"#/properties/status/enum",keyword:"enum",params:{allowedValues:schema11.properties.status.enum},message:"must be equal to one of the allowed values"}];return false}var valid0=_errs30===errors}else{var valid0=true}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};
