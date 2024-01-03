/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"MambuFunctionCreate","type":"object","description":"Mambu Function create data.","properties":{"extensionPointId":{"type":"string","title":"extensionPointId","description":"The id of the extension point"},"functionCode":{"title":"functionCode","$ref":"#/$defs/MambuFunctionCodeaf30"},"name":{"type":"string","title":"name","description":"Mambu function name"},"version":{"type":"string","title":"version","description":"Mambu function version"}},"additionalProperties":true,"$defs":{"MambuFunctionCodeaf30":{"type":"object","title":"MambuFunctionCodeaf30","description":"Represents a Mambu function code","properties":{"code":{"type":"string","title":"code","description":"Mambu function code (as Base64)"},"languageId":{"title":"languageId","description":"Mambu function programming language","const":"es2020"}},"additionalProperties":true}}};const schema12 = {"type":"object","title":"MambuFunctionCodeaf30","description":"Represents a Mambu function code","properties":{"code":{"type":"string","title":"code","description":"Mambu function code (as Base64)"},"languageId":{"title":"languageId","description":"Mambu function programming language","const":"es2020"}},"additionalProperties":true};function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.extensionPointId !== undefined){const _errs2 = errors;if(typeof data.extensionPointId !== "string"){validate10.errors = [{instancePath:instancePath+"/extensionPointId",schemaPath:"#/properties/extensionPointId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.functionCode !== undefined){let data1 = data.functionCode;const _errs4 = errors;const _errs5 = errors;if(errors === _errs5){if(data1 && typeof data1 == "object" && !Array.isArray(data1)){if(data1.code !== undefined){const _errs8 = errors;if(typeof data1.code !== "string"){validate10.errors = [{instancePath:instancePath+"/functionCode/code",schemaPath:"#/$defs/MambuFunctionCodeaf30/properties/code/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs8 === errors;}else {var valid2 = true;}if(valid2){if(data1.languageId !== undefined){const _errs10 = errors;if("es2020" !== data1.languageId){validate10.errors = [{instancePath:instancePath+"/functionCode/languageId",schemaPath:"#/$defs/MambuFunctionCodeaf30/properties/languageId/const",keyword:"const",params:{allowedValue: "es2020"},message:"must be equal to constant"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/functionCode",schemaPath:"#/$defs/MambuFunctionCodeaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs11 = errors;if(typeof data.name !== "string"){validate10.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.version !== undefined){const _errs13 = errors;if(typeof data.version !== "string"){validate10.errors = [{instancePath:instancePath+"/version",schemaPath:"#/properties/version/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs13 === errors;}else {var valid0 = true;}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;