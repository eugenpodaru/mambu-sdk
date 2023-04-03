/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"ApplyInterestInput","type":"object","description":"Represents a request for applying the accrued interest ","properties":{"paymentHolidaysInterestAmount":{"type":"number","title":"paymentHolidaysInterestAmount","description":"The amount of the Payment Holidays interest to apply"},"interestApplicationDate":{"type":"string","title":"interestApplicationDate","description":"The date up to which interest is to be posted","format":"date-time"},"notes":{"type":"string","title":"notes","description":"Additional information for this action"},"isPaymentHolidaysInterest":{"type":"boolean","title":"isPaymentHolidaysInterest","description":"Whether the interest amount to apply should be the regular one or the one accrued during the Payment Holidays. If nothing specified it will be the regular one."}},"required":["interestApplicationDate"],"additionalProperties":true};function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){let missing0;if(data.interestApplicationDate===void 0&&(missing0="interestApplicationDate")){validate10.errors=[{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false}else{if(data.paymentHolidaysInterestAmount!==void 0){let data0=data.paymentHolidaysInterestAmount;const _errs2=errors;if(!(typeof data0=="number"&&isFinite(data0))){validate10.errors=[{instancePath:instancePath+"/paymentHolidaysInterestAmount",schemaPath:"#/properties/paymentHolidaysInterestAmount/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.interestApplicationDate!==void 0){const _errs4=errors;if(errors===_errs4){if(errors===_errs4){if(!(typeof data.interestApplicationDate==="string")){validate10.errors=[{instancePath:instancePath+"/interestApplicationDate",schemaPath:"#/properties/interestApplicationDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs4===errors}else{var valid0=true}if(valid0){if(data.notes!==void 0){const _errs6=errors;if(typeof data.notes!=="string"){validate10.errors=[{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs6===errors}else{var valid0=true}if(valid0){if(data.isPaymentHolidaysInterest!==void 0){const _errs8=errors;if(typeof data.isPaymentHolidaysInterest!=="boolean"){validate10.errors=[{instancePath:instancePath+"/isPaymentHolidaysInterest",schemaPath:"#/properties/isPaymentHolidaysInterest/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"}];return false}var valid0=_errs8===errors}else{var valid0=true}}}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};
