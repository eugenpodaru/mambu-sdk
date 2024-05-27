/* eslint-disable */
// @ts-nocheck
/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";
/** @type {unknown} */
export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"SearchRequest","type":"array","items":{"$ref":"#/$defs/CommunicationMessageFilterCriteria"},"$defs":{"CommunicationMessageFilterCriteria":{"type":"object","description":"The unit that composes the list used for communication messages client directed searching","properties":{"field":{"anyOf":[{"description":"The field(s) to use to perform the search.","enum":["encodedKey","creationDate","sendDate","senderKey","clientKey","groupKey","userKey","state","failureReason","failureCause","destination","type","event"]},{"type":"string"}]},"operator":{"description":"| **Operator**                | **Affected values**  | **Available for**                                                    |\n|---------------               |----------------------|----------------------------------------------------------------------|\n| EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |\n| EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY \t\t  |\n| MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |\n| ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| STARTS_WITH                  | ONE_VALUE            | STRING                                                               |\n| STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |\n| IN                           | LIST                 | ENUM,KEY                                                             |\n| TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |\n| EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |\n| NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |","enum":["EQUALS","EQUALS_CASE_SENSITIVE","DIFFERENT_THAN","MORE_THAN","LESS_THAN","BETWEEN","ON","AFTER","AFTER_INCLUSIVE","BEFORE","BEFORE_INCLUSIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","IN","TODAY","THIS_WEEK","THIS_MONTH","THIS_YEAR","LAST_DAYS","EMPTY","NOT_EMPTY"]},"secondValue":{"type":"string","description":"The second value to match the searching criteria, when the `BETWEEN` operator is used."},"value":{"type":"string","description":"The value to match the searching criteria."},"values":{"type":"array","description":"List of values when the `IN` operator is used.","items":{"type":"string"}}},"required":["field","operator"],"additionalProperties":true}}};const schema12 = {"type":"object","description":"The unit that composes the list used for communication messages client directed searching","properties":{"field":{"anyOf":[{"description":"The field(s) to use to perform the search.","enum":["encodedKey","creationDate","sendDate","senderKey","clientKey","groupKey","userKey","state","failureReason","failureCause","destination","type","event"]},{"type":"string"}]},"operator":{"description":"| **Operator**                | **Affected values**  | **Available for**                                                    |\n|---------------               |----------------------|----------------------------------------------------------------------|\n| EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |\n| EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY \t\t  |\n| MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |\n| BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |\n| ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |\n| STARTS_WITH                  | ONE_VALUE            | STRING                                                               |\n| STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |\n| IN                           | LIST                 | ENUM,KEY                                                             |\n| TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |\n| THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |\n| LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |\n| EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |\n| NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |","enum":["EQUALS","EQUALS_CASE_SENSITIVE","DIFFERENT_THAN","MORE_THAN","LESS_THAN","BETWEEN","ON","AFTER","AFTER_INCLUSIVE","BEFORE","BEFORE_INCLUSIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","IN","TODAY","THIS_WEEK","THIS_MONTH","THIS_YEAR","LAST_DAYS","EMPTY","NOT_EMPTY"]},"secondValue":{"type":"string","description":"The second value to match the searching criteria, when the `BETWEEN` operator is used."},"value":{"type":"string","description":"The value to match the searching criteria."},"values":{"type":"array","description":"List of values when the `IN` operator is used.","items":{"type":"string"}}},"required":["field","operator"],"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(Array.isArray(data)){var valid0 = true;const len0 = data.length;for(let i0=0; i0<len0; i0++){let data0 = data[i0];const _errs1 = errors;const _errs2 = errors;if(errors === _errs2){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){let missing0;if(((data0.field === undefined) && (missing0 = "field")) || ((data0.operator === undefined) && (missing0 = "operator"))){validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/CommunicationMessageFilterCriteria/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data0.field !== undefined){let data1 = data0.field;const _errs5 = errors;const _errs6 = errors;let valid3 = false;const _errs7 = errors;let valid4;valid4 = false;for(const v0 of schema12.properties.field.anyOf[0].enum){if(func0(data1, v0)){valid4 = true;break;}}if(!valid4){const err0 = {instancePath:instancePath+"/" + i0+"/field",schemaPath:"#/$defs/CommunicationMessageFilterCriteria/properties/field/anyOf/0/enum",keyword:"enum",params:{allowedValues: schema12.properties.field.anyOf[0].enum},message:"must be equal to one of the allowed values"};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}var _valid0 = _errs7 === errors;valid3 = valid3 || _valid0;if(!valid3){const _errs8 = errors;if(typeof data1 !== "string"){const err1 = {instancePath:instancePath+"/" + i0+"/field",schemaPath:"#/$defs/CommunicationMessageFilterCriteria/properties/field/anyOf/1/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}var _valid0 = _errs8 === errors;valid3 = valid3 || _valid0;}if(!valid3){const err2 = {instancePath:instancePath+"/" + i0+"/field",schemaPath:"#/$defs/CommunicationMessageFilterCriteria/properties/field/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;validate10.errors = vErrors;return false;}else {errors = _errs6;if(vErrors !== null){if(_errs6){vErrors.length = _errs6;}else {vErrors = null;}}}var valid2 = _errs5 === errors;}else {var valid2 = true;}if(valid2){if(data0.operator !== undefined){const _errs10 = errors;let valid5;valid5 = false;for(const v1 of schema12.properties.operator.enum){if(func0(data0.operator, v1)){valid5 = true;break;}}if(!valid5){validate10.errors = [{instancePath:instancePath+"/" + i0+"/operator",schemaPath:"#/$defs/CommunicationMessageFilterCriteria/properties/operator/enum",keyword:"enum",params:{allowedValues: schema12.properties.operator.enum},message:"must be equal to one of the allowed values"}];return false;}var valid2 = _errs10 === errors;}else {var valid2 = true;}if(valid2){if(data0.secondValue !== undefined){const _errs11 = errors;if(typeof data0.secondValue !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/secondValue",schemaPath:"#/$defs/CommunicationMessageFilterCriteria/properties/secondValue/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs11 === errors;}else {var valid2 = true;}if(valid2){if(data0.value !== undefined){const _errs13 = errors;if(typeof data0.value !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/value",schemaPath:"#/$defs/CommunicationMessageFilterCriteria/properties/value/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs13 === errors;}else {var valid2 = true;}if(valid2){if(data0.values !== undefined){let data5 = data0.values;const _errs15 = errors;if(errors === _errs15){if(Array.isArray(data5)){var valid6 = true;const len1 = data5.length;for(let i1=0; i1<len1; i1++){const _errs17 = errors;if(typeof data5[i1] !== "string"){validate10.errors = [{instancePath:instancePath+"/" + i0+"/values/" + i1,schemaPath:"#/$defs/CommunicationMessageFilterCriteria/properties/values/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs17 === errors;if(!valid6){break;}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0+"/values",schemaPath:"#/$defs/CommunicationMessageFilterCriteria/properties/values/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid2 = _errs15 === errors;}else {var valid2 = true;}}}}}}}else {validate10.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/$defs/CommunicationMessageFilterCriteria/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs1 === errors;if(!valid0){break;}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;