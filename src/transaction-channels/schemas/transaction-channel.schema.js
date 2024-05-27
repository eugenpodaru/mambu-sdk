/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"TransactionChannel","type":"object","description":"Represents a transaction channel.","properties":{"availableForAll":{"type":"boolean","description":"`TRUE` if the transaction channel is available for all users, `FALSE` otherwise."},"depositConstraints":{"$ref":"#/$defs/Constraint"},"encodedKey":{"type":"string","description":"The encoded key of the entity, generated, globally unique"},"glAccount":{"type":"string","description":"The general ledger (GL) account associated with the transaction channel."},"id":{"type":"string","description":"The ID of the transaction channel."},"isDefault":{"type":"boolean","description":"`TRUE` if the transaction channel is set as the default, `FALSE` otherwise."},"loanConstraints":{"$ref":"#/$defs/Constraint"},"name":{"type":"string","description":"The name of the transaction channel."},"state":{"description":"The state of the transaction channel.","enum":["ACTIVE","INACTIVE"]},"usageRights":{"type":"array","description":"The usage rights that describe the transaction channel.","items":{"type":"string"}}},"required":["depositConstraints","id","loanConstraints","name"],"additionalProperties":true,"$defs":{"Constraint":{"type":"object","description":"The constraints applied to the transaction channel","properties":{"constraints":{"type":"array","description":"Holds the custom constraints, only for the limited usage case. For the unconstrainedcase, no constraints are applied","items":{"$ref":"#/$defs/TransactionChannelConstraint"}},"matchFiltersOption":{"description":"Holds the match filter option for the constraints. It can be ALL so all the constraints must match, or ANY so at least one must match","enum":["ALL","ANY"]},"usage":{"description":"States the limited/unconstrained usage of the transaction channel","enum":["UNCONSTRAINED","LIMITED"]}},"additionalProperties":true},"TransactionChannelConstraint":{"type":"object","description":"The constraints applied on the transaction channel","properties":{"criteria":{"description":"Defines the criteria on which the constraint is applied","enum":["AMOUNT","TYPE","PRODUCT"]},"operator":{"description":"Defines the constraint operator. Example: in 'Amount Equals 100' it is the 'Equals'","enum":["EQUALS","EMPTY","NOT_EMPTY","MORE_THAN","LESS_THAN","BETWEEN","IN"]},"secondValue":{"type":"string","description":"The second filtering value of the filter parameter (constraint). It might not exist. Example: it represents '500' from 'Amount Between 100 and 500'"},"value":{"type":"string","description":"The first filtering value of the filter constraint. Example: it represents 'Disbursement' from 'Type equals Disbursement' and it also represents 100 from 'Amount Between 100 and 500'"},"values":{"type":"array","description":"Filtering values used for the Product and Type criteria, where filtering might be applied on one or more values","items":{"type":"string"}}},"required":["criteria","operator"],"additionalProperties":true}}};const schema12 = {"type":"object","description":"The constraints applied to the transaction channel","properties":{"constraints":{"type":"array","description":"Holds the custom constraints, only for the limited usage case. For the unconstrainedcase, no constraints are applied","items":{"$ref":"#/$defs/TransactionChannelConstraint"}},"matchFiltersOption":{"description":"Holds the match filter option for the constraints. It can be ALL so all the constraints must match, or ANY so at least one must match","enum":["ALL","ANY"]},"usage":{"description":"States the limited/unconstrained usage of the transaction channel","enum":["UNCONSTRAINED","LIMITED"]}},"additionalProperties":true};const schema13 = {"type":"object","description":"The constraints applied on the transaction channel","properties":{"criteria":{"description":"Defines the criteria on which the constraint is applied","enum":["AMOUNT","TYPE","PRODUCT"]},"operator":{"description":"Defines the constraint operator. Example: in 'Amount Equals 100' it is the 'Equals'","enum":["EQUALS","EMPTY","NOT_EMPTY","MORE_THAN","LESS_THAN","BETWEEN","IN"]},"secondValue":{"type":"string","description":"The second filtering value of the filter parameter (constraint). It might not exist. Example: it represents '500' from 'Amount Between 100 and 500'"},"value":{"type":"string","description":"The first filtering value of the filter constraint. Example: it represents 'Disbursement' from 'Type equals Disbursement' and it also represents 100 from 'Amount Between 100 and 500'"},"values":{"type":"array","description":"Filtering values used for the Product and Type criteria, where filtering might be applied on one or more values","items":{"type":"string"}}},"required":["criteria","operator"],"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.constraints !== undefined){let data0 = data.constraints;const _errs2 = errors;if(errors === _errs2){if(Array.isArray(data0)){var valid1 = true;const len0 = data0.length;for(let i0=0; i0<len0; i0++){let data1 = data0[i0];const _errs4 = errors;const _errs5 = errors;if(errors === _errs5){if(data1 && typeof data1 == "object" && !Array.isArray(data1)){let missing0;if(((data1.criteria === undefined) && (missing0 = "criteria")) || ((data1.operator === undefined) && (missing0 = "operator"))){validate11.errors = [{instancePath:instancePath+"/constraints/" + i0,schemaPath:"#/$defs/TransactionChannelConstraint/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data1.criteria !== undefined){let data2 = data1.criteria;const _errs8 = errors;if(!(((data2 === "AMOUNT") || (data2 === "TYPE")) || (data2 === "PRODUCT"))){validate11.errors = [{instancePath:instancePath+"/constraints/" + i0+"/criteria",schemaPath:"#/$defs/TransactionChannelConstraint/properties/criteria/enum",keyword:"enum",params:{allowedValues: schema13.properties.criteria.enum},message:"must be equal to one of the allowed values"}];return false;}var valid3 = _errs8 === errors;}else {var valid3 = true;}if(valid3){if(data1.operator !== undefined){const _errs9 = errors;let valid4;valid4 = false;for(const v0 of schema13.properties.operator.enum){if(func0(data1.operator, v0)){valid4 = true;break;}}if(!valid4){validate11.errors = [{instancePath:instancePath+"/constraints/" + i0+"/operator",schemaPath:"#/$defs/TransactionChannelConstraint/properties/operator/enum",keyword:"enum",params:{allowedValues: schema13.properties.operator.enum},message:"must be equal to one of the allowed values"}];return false;}var valid3 = _errs9 === errors;}else {var valid3 = true;}if(valid3){if(data1.secondValue !== undefined){const _errs10 = errors;if(typeof data1.secondValue !== "string"){validate11.errors = [{instancePath:instancePath+"/constraints/" + i0+"/secondValue",schemaPath:"#/$defs/TransactionChannelConstraint/properties/secondValue/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs10 === errors;}else {var valid3 = true;}if(valid3){if(data1.value !== undefined){const _errs12 = errors;if(typeof data1.value !== "string"){validate11.errors = [{instancePath:instancePath+"/constraints/" + i0+"/value",schemaPath:"#/$defs/TransactionChannelConstraint/properties/value/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs12 === errors;}else {var valid3 = true;}if(valid3){if(data1.values !== undefined){let data6 = data1.values;const _errs14 = errors;if(errors === _errs14){if(Array.isArray(data6)){var valid5 = true;const len1 = data6.length;for(let i1=0; i1<len1; i1++){const _errs16 = errors;if(typeof data6[i1] !== "string"){validate11.errors = [{instancePath:instancePath+"/constraints/" + i0+"/values/" + i1,schemaPath:"#/$defs/TransactionChannelConstraint/properties/values/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid5 = _errs16 === errors;if(!valid5){break;}}}else {validate11.errors = [{instancePath:instancePath+"/constraints/" + i0+"/values",schemaPath:"#/$defs/TransactionChannelConstraint/properties/values/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid3 = _errs14 === errors;}else {var valid3 = true;}}}}}}}else {validate11.errors = [{instancePath:instancePath+"/constraints/" + i0,schemaPath:"#/$defs/TransactionChannelConstraint/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs4 === errors;if(!valid1){break;}}}else {validate11.errors = [{instancePath:instancePath+"/constraints",schemaPath:"#/properties/constraints/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.matchFiltersOption !== undefined){let data8 = data.matchFiltersOption;const _errs18 = errors;if(!((data8 === "ALL") || (data8 === "ANY"))){validate11.errors = [{instancePath:instancePath+"/matchFiltersOption",schemaPath:"#/properties/matchFiltersOption/enum",keyword:"enum",params:{allowedValues: schema12.properties.matchFiltersOption.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.usage !== undefined){let data9 = data.usage;const _errs19 = errors;if(!((data9 === "UNCONSTRAINED") || (data9 === "LIMITED"))){validate11.errors = [{instancePath:instancePath+"/usage",schemaPath:"#/properties/usage/enum",keyword:"enum",params:{allowedValues: schema12.properties.usage.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs19 === errors;}else {var valid0 = true;}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((((data.depositConstraints === undefined) && (missing0 = "depositConstraints")) || ((data.id === undefined) && (missing0 = "id"))) || ((data.loanConstraints === undefined) && (missing0 = "loanConstraints"))) || ((data.name === undefined) && (missing0 = "name"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.availableForAll !== undefined){const _errs2 = errors;if(typeof data.availableForAll !== "boolean"){validate10.errors = [{instancePath:instancePath+"/availableForAll",schemaPath:"#/properties/availableForAll/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.depositConstraints !== undefined){const _errs4 = errors;if(!(validate11(data.depositConstraints, {instancePath:instancePath+"/depositConstraints",parentData:data,parentDataProperty:"depositConstraints",rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs5 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs5 === errors;}else {var valid0 = true;}if(valid0){if(data.glAccount !== undefined){const _errs7 = errors;if(typeof data.glAccount !== "string"){validate10.errors = [{instancePath:instancePath+"/glAccount",schemaPath:"#/properties/glAccount/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs7 === errors;}else {var valid0 = true;}if(valid0){if(data.id !== undefined){const _errs9 = errors;if(typeof data.id !== "string"){validate10.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.isDefault !== undefined){const _errs11 = errors;if(typeof data.isDefault !== "boolean"){validate10.errors = [{instancePath:instancePath+"/isDefault",schemaPath:"#/properties/isDefault/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.loanConstraints !== undefined){const _errs13 = errors;if(!(validate11(data.loanConstraints, {instancePath:instancePath+"/loanConstraints",parentData:data,parentDataProperty:"loanConstraints",rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs14 = errors;if(typeof data.name !== "string"){validate10.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.state !== undefined){let data8 = data.state;const _errs16 = errors;if(!((data8 === "ACTIVE") || (data8 === "INACTIVE"))){validate10.errors = [{instancePath:instancePath+"/state",schemaPath:"#/properties/state/enum",keyword:"enum",params:{allowedValues: schema11.properties.state.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.usageRights !== undefined){let data9 = data.usageRights;const _errs17 = errors;if(errors === _errs17){if(Array.isArray(data9)){var valid1 = true;const len0 = data9.length;for(let i0=0; i0<len0; i0++){const _errs19 = errors;if(typeof data9[i0] !== "string"){validate10.errors = [{instancePath:instancePath+"/usageRights/" + i0,schemaPath:"#/properties/usageRights/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs19 === errors;if(!valid1){break;}}}else {validate10.errors = [{instancePath:instancePath+"/usageRights",schemaPath:"#/properties/usageRights/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs17 === errors;}else {var valid0 = true;}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;