/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const validate=validate10;var stdin_default=validate10;const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"previewTranchesOnScheduleRequest","type":"array","items":{"$ref":"#/$defs/LoanTrancheaf30"},"$defs":{"LoanTrancheaf30":{"type":"object","title":"LoanTrancheaf30","description":"In some cases organizations may approve loans but not disburse the full amount initially. They would like to spread the disbursement (and risk) over time. Likewise for the client, they may not need the full loan amount up front. They may want to have a loan to buy some equipment for their business but will make one purchase today and another purchase in a few months.  In these cases, they don't need the full amount and wouldn't want to pay interest on cash they don't need yet. A solution for this matter is the usage of disbursement in tranches. This class holds the information required for one of this tranche. ","properties":{"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the transaction details , auto generated, unique."},"amount":{"type":"number","title":"amount","description":"The amount this tranche has available for disburse"},"fees":{"type":"array","title":"fees","description":"Fees that are associated with this tranche","items":{"$ref":"#/$defs/CustomPredefinedFeeaf30"}},"disbursementDetails":{"title":"disbursementDetails","$ref":"#/$defs/TrancheDisbursementDetailsaf30"},"trancheNumber":{"type":"integer","title":"trancheNumber","description":"Index indicating the tranche number"}},"required":["amount"],"additionalProperties":true},"CustomPredefinedFeeaf30":{"type":"object","title":"CustomPredefinedFeeaf30","description":"The custom predefined fees, they may be used as the expected predefined fees that will be applied on the disbursement.","properties":{"predefinedFeeEncodedKey":{"type":"string","title":"predefinedFeeEncodedKey","description":"The encoded key of the predefined fee"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the custom predefined fee, auto generated, unique."},"amount":{"type":"number","title":"amount","description":"The amount of the custom fee."},"percentage":{"type":"number","title":"percentage","description":"The percentage of the custom fee."}},"additionalProperties":true},"TrancheDisbursementDetailsaf30":{"type":"object","title":"TrancheDisbursementDetailsaf30","description":"The disbursement details regarding a loan tranche.","properties":{"expectedDisbursementDate":{"type":"string","title":"expectedDisbursementDate","description":"The date when this tranche is supposed to be disbursed (as Organization Time)","format":"date-time"},"disbursementTransactionKey":{"type":"string","title":"disbursementTransactionKey","description":"The key of the disbursement transaction logged when this tranche was disbursed. This field will be null until the tranche disbursement"}},"additionalProperties":true}}};const schema12={"type":"object","title":"LoanTrancheaf30","description":"In some cases organizations may approve loans but not disburse the full amount initially. They would like to spread the disbursement (and risk) over time. Likewise for the client, they may not need the full loan amount up front. They may want to have a loan to buy some equipment for their business but will make one purchase today and another purchase in a few months.  In these cases, they don't need the full amount and wouldn't want to pay interest on cash they don't need yet. A solution for this matter is the usage of disbursement in tranches. This class holds the information required for one of this tranche. ","properties":{"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the transaction details , auto generated, unique."},"amount":{"type":"number","title":"amount","description":"The amount this tranche has available for disburse"},"fees":{"type":"array","title":"fees","description":"Fees that are associated with this tranche","items":{"$ref":"#/$defs/CustomPredefinedFeeaf30"}},"disbursementDetails":{"title":"disbursementDetails","$ref":"#/$defs/TrancheDisbursementDetailsaf30"},"trancheNumber":{"type":"integer","title":"trancheNumber","description":"Index indicating the tranche number"}},"required":["amount"],"additionalProperties":true};const schema13={"type":"object","title":"CustomPredefinedFeeaf30","description":"The custom predefined fees, they may be used as the expected predefined fees that will be applied on the disbursement.","properties":{"predefinedFeeEncodedKey":{"type":"string","title":"predefinedFeeEncodedKey","description":"The encoded key of the predefined fee"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the custom predefined fee, auto generated, unique."},"amount":{"type":"number","title":"amount","description":"The amount of the custom fee."},"percentage":{"type":"number","title":"percentage","description":"The percentage of the custom fee."}},"additionalProperties":true};const schema14={"type":"object","title":"TrancheDisbursementDetailsaf30","description":"The disbursement details regarding a loan tranche.","properties":{"expectedDisbursementDate":{"type":"string","title":"expectedDisbursementDate","description":"The date when this tranche is supposed to be disbursed (as Organization Time)","format":"date-time"},"disbursementTransactionKey":{"type":"string","title":"disbursementTransactionKey","description":"The key of the disbursement transaction logged when this tranche was disbursed. This field will be null until the tranche disbursement"}},"additionalProperties":true};function validate11(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){let missing0;if(data.amount===void 0&&(missing0="amount")){validate11.errors=[{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false}else{if(data.encodedKey!==void 0){const _errs2=errors;if(typeof data.encodedKey!=="string"){validate11.errors=[{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.amount!==void 0){let data1=data.amount;const _errs4=errors;if(!(typeof data1=="number"&&isFinite(data1))){validate11.errors=[{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid0=_errs4===errors}else{var valid0=true}if(valid0){if(data.fees!==void 0){let data2=data.fees;const _errs6=errors;if(errors===_errs6){if(Array.isArray(data2)){var valid1=true;const len0=data2.length;for(let i0=0;i0<len0;i0++){let data3=data2[i0];const _errs8=errors;const _errs9=errors;if(errors===_errs9){if(data3&&typeof data3=="object"&&!Array.isArray(data3)){if(data3.predefinedFeeEncodedKey!==void 0){const _errs12=errors;if(typeof data3.predefinedFeeEncodedKey!=="string"){validate11.errors=[{instancePath:instancePath+"/fees/"+i0+"/predefinedFeeEncodedKey",schemaPath:"#/$defs/CustomPredefinedFeeaf30/properties/predefinedFeeEncodedKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid3=_errs12===errors}else{var valid3=true}if(valid3){if(data3.encodedKey!==void 0){const _errs14=errors;if(typeof data3.encodedKey!=="string"){validate11.errors=[{instancePath:instancePath+"/fees/"+i0+"/encodedKey",schemaPath:"#/$defs/CustomPredefinedFeeaf30/properties/encodedKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid3=_errs14===errors}else{var valid3=true}if(valid3){if(data3.amount!==void 0){let data6=data3.amount;const _errs16=errors;if(!(typeof data6=="number"&&isFinite(data6))){validate11.errors=[{instancePath:instancePath+"/fees/"+i0+"/amount",schemaPath:"#/$defs/CustomPredefinedFeeaf30/properties/amount/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid3=_errs16===errors}else{var valid3=true}if(valid3){if(data3.percentage!==void 0){let data7=data3.percentage;const _errs18=errors;if(!(typeof data7=="number"&&isFinite(data7))){validate11.errors=[{instancePath:instancePath+"/fees/"+i0+"/percentage",schemaPath:"#/$defs/CustomPredefinedFeeaf30/properties/percentage/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid3=_errs18===errors}else{var valid3=true}}}}}else{validate11.errors=[{instancePath:instancePath+"/fees/"+i0,schemaPath:"#/$defs/CustomPredefinedFeeaf30/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid1=_errs8===errors;if(!valid1){break}}}else{validate11.errors=[{instancePath:instancePath+"/fees",schemaPath:"#/properties/fees/type",keyword:"type",params:{type:"array"},message:"must be array"}];return false}}var valid0=_errs6===errors}else{var valid0=true}if(valid0){if(data.disbursementDetails!==void 0){let data8=data.disbursementDetails;const _errs20=errors;const _errs21=errors;if(errors===_errs21){if(data8&&typeof data8=="object"&&!Array.isArray(data8)){if(data8.expectedDisbursementDate!==void 0){const _errs24=errors;if(errors===_errs24){if(errors===_errs24){if(!(typeof data8.expectedDisbursementDate==="string")){validate11.errors=[{instancePath:instancePath+"/disbursementDetails/expectedDisbursementDate",schemaPath:"#/$defs/TrancheDisbursementDetailsaf30/properties/expectedDisbursementDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid5=_errs24===errors}else{var valid5=true}if(valid5){if(data8.disbursementTransactionKey!==void 0){const _errs26=errors;if(typeof data8.disbursementTransactionKey!=="string"){validate11.errors=[{instancePath:instancePath+"/disbursementDetails/disbursementTransactionKey",schemaPath:"#/$defs/TrancheDisbursementDetailsaf30/properties/disbursementTransactionKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid5=_errs26===errors}else{var valid5=true}}}else{validate11.errors=[{instancePath:instancePath+"/disbursementDetails",schemaPath:"#/$defs/TrancheDisbursementDetailsaf30/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid0=_errs20===errors}else{var valid0=true}if(valid0){if(data.trancheNumber!==void 0){let data11=data.trancheNumber;const _errs28=errors;if(!(typeof data11=="number"&&(!(data11%1)&&!isNaN(data11))&&isFinite(data11))){validate11.errors=[{instancePath:instancePath+"/trancheNumber",schemaPath:"#/properties/trancheNumber/type",keyword:"type",params:{type:"integer"},message:"must be integer"}];return false}var valid0=_errs28===errors}else{var valid0=true}}}}}}}else{validate11.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate11.errors=vErrors;return errors===0}function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(Array.isArray(data)){var valid0=true;const len0=data.length;for(let i0=0;i0<len0;i0++){const _errs1=errors;if(!validate11(data[i0],{instancePath:instancePath+"/"+i0,parentData:data,parentDataProperty:i0,rootData})){vErrors=vErrors===null?validate11.errors:vErrors.concat(validate11.errors);errors=vErrors.length}var valid0=_errs1===errors;if(!valid0){break}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"array"},message:"must be array"}];return false}}validate10.errors=vErrors;return errors===0};validate.schema=schema11;export{stdin_default as default,validate};
