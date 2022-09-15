/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"PreviewPayOffDueAmountsInAFutureDateWrapper","type":"object","description":"Represents a wrapper over a set of due amounts representing pay off due amounts in a future date","properties":{"penaltyBalance":{"type":"number","title":"penaltyBalance","description":"The penalty balance due when pay off the account in a future date"},"interestBalance":{"type":"number","title":"interestBalance","description":"The interest balance due when pay off the account in a future date"},"principalBalance":{"type":"number","title":"principalBalance","description":"The principal balance due when pay off the account in a future date"},"feeBalance":{"type":"number","title":"feeBalance","description":"The fee balance due when pay off the account in a future date"},"totalBalance":{"type":"number","title":"totalBalance","description":"The total balance due when pay off the account in a future date"}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.penaltyBalance !== undefined){let data0 = data.penaltyBalance;const _errs2 = errors;if(!((typeof data0 == "number") && (isFinite(data0)))){validate10.errors = [{instancePath:instancePath+"/penaltyBalance",schemaPath:"#/properties/penaltyBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.interestBalance !== undefined){let data1 = data.interestBalance;const _errs4 = errors;if(!((typeof data1 == "number") && (isFinite(data1)))){validate10.errors = [{instancePath:instancePath+"/interestBalance",schemaPath:"#/properties/interestBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.principalBalance !== undefined){let data2 = data.principalBalance;const _errs6 = errors;if(!((typeof data2 == "number") && (isFinite(data2)))){validate10.errors = [{instancePath:instancePath+"/principalBalance",schemaPath:"#/properties/principalBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.feeBalance !== undefined){let data3 = data.feeBalance;const _errs8 = errors;if(!((typeof data3 == "number") && (isFinite(data3)))){validate10.errors = [{instancePath:instancePath+"/feeBalance",schemaPath:"#/properties/feeBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.totalBalance !== undefined){let data4 = data.totalBalance;const _errs10 = errors;if(!((typeof data4 == "number") && (isFinite(data4)))){validate10.errors = [{instancePath:instancePath+"/totalBalance",schemaPath:"#/properties/totalBalance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;