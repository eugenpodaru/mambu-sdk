/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"LockLoanAccountInput","type":"object","description":"Represents the information for locking an account.","properties":{"lockedAccountTotalDueType":{"title":"lockedAccountTotalDueType","description":"The locked account total due type.","enum":["BALANCE_AMOUNT","DUE_AMOUNT_ON_LATE_INSTALLMENTS"]},"lockedOperations":{"type":"array","title":"lockedOperations","description":"A list with operations which are locked when the account is in substate AccountState.LOCKED. Allowed options are `APPLY_INTEREST`, `APPLY_PENALTIES`, and `APPLY_FEES`.","items":{"enum":["APPLY_INTEREST","APPLY_FEES","APPLY_PENALTIES"]}},"notes":{"type":"string","title":"notes","description":"The notes about the account locking operation."}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.lockedAccountTotalDueType !== undefined){let data0 = data.lockedAccountTotalDueType;const _errs2 = errors;if(!((data0 === "BALANCE_AMOUNT") || (data0 === "DUE_AMOUNT_ON_LATE_INSTALLMENTS"))){validate10.errors = [{instancePath:instancePath+"/lockedAccountTotalDueType",schemaPath:"#/properties/lockedAccountTotalDueType/enum",keyword:"enum",params:{allowedValues: schema11.properties.lockedAccountTotalDueType.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.lockedOperations !== undefined){let data1 = data.lockedOperations;const _errs3 = errors;if(errors === _errs3){if(Array.isArray(data1)){var valid1 = true;const len0 = data1.length;for(let i0=0; i0<len0; i0++){let data2 = data1[i0];const _errs5 = errors;if(!(((data2 === "APPLY_INTEREST") || (data2 === "APPLY_FEES")) || (data2 === "APPLY_PENALTIES"))){validate10.errors = [{instancePath:instancePath+"/lockedOperations/" + i0,schemaPath:"#/properties/lockedOperations/items/enum",keyword:"enum",params:{allowedValues: schema11.properties.lockedOperations.items.enum},message:"must be equal to one of the allowed values"}];return false;}var valid1 = _errs5 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/lockedOperations",schemaPath:"#/properties/lockedOperations/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs3 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs6 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;