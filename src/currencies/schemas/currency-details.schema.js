/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"CurrencyDetails","type":"object","description":"Model representation of a currency.","properties":{"symbol":{"type":"string","title":"symbol","description":"Currency symbol."},"code":{"type":"string","title":"code","description":"Currency code. Cannot be changed once currency is created."},"digitsAfterDecimal":{"type":"integer","title":"digitsAfterDecimal","description":"Number of digits that are supported for given currency."},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last date this currency was modified. It's updated automatically, read only field not required for update operations.","format":"date-time"},"currencySymbolPosition":{"title":"currencySymbolPosition","description":"Currency symbol position.","enum":["BEFORE_NUMBER","AFTER_NUMBER"]},"name":{"type":"string","title":"name","description":"Currency name."},"type":{"title":"type","description":"Indicates the type of the currency.","enum":["FIAT_CURRENCY","CRYPTOCURRENCY","NON_TRADITIONAL_CURRENCY"]},"creationDate":{"type":"string","title":"creationDate","description":"The date this currency was created. Cannot be changed, read only field not required for update operations.","format":"date-time"},"baseCurrency":{"type":"boolean","title":"baseCurrency","description":"Flag indicating if the given currency is the base currency. Cannot be changed, read only field not required for update operations."}},"required":["symbol","code","currencySymbolPosition","name","type","baseCurrency"],"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;let valid0 = true;for( missing0 of schema11.required){valid0 = data[missing0] !== undefined;if(!valid0){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;break;}}if(valid0){if(data.symbol !== undefined){const _errs2 = errors;if(typeof data.symbol !== "string"){validate10.errors = [{instancePath:instancePath+"/symbol",schemaPath:"#/properties/symbol/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs2 === errors;}else {var valid1 = true;}if(valid1){if(data.code !== undefined){const _errs4 = errors;if(typeof data.code !== "string"){validate10.errors = [{instancePath:instancePath+"/code",schemaPath:"#/properties/code/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs4 === errors;}else {var valid1 = true;}if(valid1){if(data.digitsAfterDecimal !== undefined){let data2 = data.digitsAfterDecimal;const _errs6 = errors;if(!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))){validate10.errors = [{instancePath:instancePath+"/digitsAfterDecimal",schemaPath:"#/properties/digitsAfterDecimal/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid1 = _errs6 === errors;}else {var valid1 = true;}if(valid1){if(data.lastModifiedDate !== undefined){const _errs8 = errors;if(errors === _errs8){if(errors === _errs8){if(!(typeof data.lastModifiedDate === "string")){validate10.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid1 = _errs8 === errors;}else {var valid1 = true;}if(valid1){if(data.currencySymbolPosition !== undefined){let data4 = data.currencySymbolPosition;const _errs10 = errors;if(!((data4 === "BEFORE_NUMBER") || (data4 === "AFTER_NUMBER"))){validate10.errors = [{instancePath:instancePath+"/currencySymbolPosition",schemaPath:"#/properties/currencySymbolPosition/enum",keyword:"enum",params:{allowedValues: schema11.properties.currencySymbolPosition.enum},message:"must be equal to one of the allowed values"}];return false;}var valid1 = _errs10 === errors;}else {var valid1 = true;}if(valid1){if(data.name !== undefined){const _errs11 = errors;if(typeof data.name !== "string"){validate10.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs11 === errors;}else {var valid1 = true;}if(valid1){if(data.type !== undefined){let data6 = data.type;const _errs13 = errors;if(!(((data6 === "FIAT_CURRENCY") || (data6 === "CRYPTOCURRENCY")) || (data6 === "NON_TRADITIONAL_CURRENCY"))){validate10.errors = [{instancePath:instancePath+"/type",schemaPath:"#/properties/type/enum",keyword:"enum",params:{allowedValues: schema11.properties.type.enum},message:"must be equal to one of the allowed values"}];return false;}var valid1 = _errs13 === errors;}else {var valid1 = true;}if(valid1){if(data.creationDate !== undefined){const _errs14 = errors;if(errors === _errs14){if(errors === _errs14){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid1 = _errs14 === errors;}else {var valid1 = true;}if(valid1){if(data.baseCurrency !== undefined){const _errs16 = errors;if(typeof data.baseCurrency !== "boolean"){validate10.errors = [{instancePath:instancePath+"/baseCurrency",schemaPath:"#/properties/baseCurrency/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid1 = _errs16 === errors;}else {var valid1 = true;}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;