/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"AccountingReportGenerationInput","type":"object","description":"Represents the input for the accounting report generation.","properties":{"branchId":{"type":"string","title":"branchId","description":"The branch id/encoded key to filter GL Journal Entries by"},"glTypes":{"type":"array","title":"glTypes","description":"The account types to filter GL Accounts by. For Header GL Accounts the report will reflect the sum of Details GL Accounts that match the given filters used","items":{"enum":["ASSET","LIABILITY","EQUITY","INCOME","EXPENSE"]}},"balanceTypes":{"type":"array","title":"balanceTypes","description":"The balance types to include in generated report","items":{"enum":["OPENING_BALANCE","NET_CHANGE","CLOSING_BALANCE"]}},"endDate":{"type":"string","title":"endDate","description":"The inclusive end date of GL Journal entry date filtering (as Organization time)","format":"date"},"currencyCode":{"type":"string","title":"currencyCode","description":"The ISO currency code to filter GL Accounts by"},"startDate":{"type":"string","title":"startDate","description":"The inclusive start date of GL Journal entry date filtering (as Organization time)","format":"date"}},"required":["endDate","startDate"],"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((data.endDate === undefined) && (missing0 = "endDate")) || ((data.startDate === undefined) && (missing0 = "startDate"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.branchId !== undefined){const _errs2 = errors;if(typeof data.branchId !== "string"){validate10.errors = [{instancePath:instancePath+"/branchId",schemaPath:"#/properties/branchId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.glTypes !== undefined){let data1 = data.glTypes;const _errs4 = errors;if(errors === _errs4){if(Array.isArray(data1)){var valid1 = true;const len0 = data1.length;for(let i0=0; i0<len0; i0++){const _errs6 = errors;let valid2;valid2 = false;for(const v0 of schema11.properties.glTypes.items.enum){if(func0(data1[i0], v0)){valid2 = true;break;}}if(!valid2){validate10.errors = [{instancePath:instancePath+"/glTypes/" + i0,schemaPath:"#/properties/glTypes/items/enum",keyword:"enum",params:{allowedValues: schema11.properties.glTypes.items.enum},message:"must be equal to one of the allowed values"}];return false;}var valid1 = _errs6 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/glTypes",schemaPath:"#/properties/glTypes/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.balanceTypes !== undefined){let data3 = data.balanceTypes;const _errs7 = errors;if(errors === _errs7){if(Array.isArray(data3)){var valid3 = true;const len1 = data3.length;for(let i1=0; i1<len1; i1++){let data4 = data3[i1];const _errs9 = errors;if(!(((data4 === "OPENING_BALANCE") || (data4 === "NET_CHANGE")) || (data4 === "CLOSING_BALANCE"))){validate10.errors = [{instancePath:instancePath+"/balanceTypes/" + i1,schemaPath:"#/properties/balanceTypes/items/enum",keyword:"enum",params:{allowedValues: schema11.properties.balanceTypes.items.enum},message:"must be equal to one of the allowed values"}];return false;}var valid3 = _errs9 === errors;if(!valid3){break;}}}else {validate10.errors = [{instancePath:instancePath+"/balanceTypes",schemaPath:"#/properties/balanceTypes/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs7 === errors;}else {var valid0 = true;}if(valid0){if(data.endDate !== undefined){const _errs10 = errors;if(errors === _errs10){if(errors === _errs10){if(!(typeof data.endDate === "string")){validate10.errors = [{instancePath:instancePath+"/endDate",schemaPath:"#/properties/endDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.currencyCode !== undefined){const _errs12 = errors;if(typeof data.currencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/currencyCode",schemaPath:"#/properties/currencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.startDate !== undefined){const _errs14 = errors;if(errors === _errs14){if(errors === _errs14){if(!(typeof data.startDate === "string")){validate10.errors = [{instancePath:instancePath+"/startDate",schemaPath:"#/properties/startDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs14 === errors;}else {var valid0 = true;}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;