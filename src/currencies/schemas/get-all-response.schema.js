/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"getAllResponse","type":"array","items":{"$ref":"#/$defs/CurrencyDetails"},"$defs":{"CurrencyDetails":{"type":"object","title":"CurrencyDetails","description":"Model representation of a currency.","properties":{"symbol":{"type":"string","title":"symbol","description":"Currency symbol."},"code":{"type":"string","title":"code","description":"Currency code. Cannot be changed once currency is created."},"digitsAfterDecimal":{"type":"integer","title":"digitsAfterDecimal","description":"Number of digits that are supported for given currency."},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last date this currency was modified. It's updated automatically, read only field not required for update operations.","format":"date-time"},"currencySymbolPosition":{"title":"currencySymbolPosition","description":"Currency symbol position.","enum":["BEFORE_NUMBER","AFTER_NUMBER"]},"name":{"type":"string","title":"name","description":"Currency name."},"type":{"title":"type","description":"Indicates the type of the currency.","enum":["FIAT_CURRENCY","CRYPTOCURRENCY","NON_TRADITIONAL_CURRENCY"]},"creationDate":{"type":"string","title":"creationDate","description":"The date this currency was created. Cannot be changed, read only field not required for update operations.","format":"date-time"},"baseCurrency":{"type":"boolean","title":"baseCurrency","description":"Flag indicating if the given currency is the base currency. Cannot be changed, read only field not required for update operations."}},"required":["symbol","code","currencySymbolPosition","name","type","baseCurrency"],"additionalProperties":true}}};const schema12={"type":"object","title":"CurrencyDetails","description":"Model representation of a currency.","properties":{"symbol":{"type":"string","title":"symbol","description":"Currency symbol."},"code":{"type":"string","title":"code","description":"Currency code. Cannot be changed once currency is created."},"digitsAfterDecimal":{"type":"integer","title":"digitsAfterDecimal","description":"Number of digits that are supported for given currency."},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"The last date this currency was modified. It's updated automatically, read only field not required for update operations.","format":"date-time"},"currencySymbolPosition":{"title":"currencySymbolPosition","description":"Currency symbol position.","enum":["BEFORE_NUMBER","AFTER_NUMBER"]},"name":{"type":"string","title":"name","description":"Currency name."},"type":{"title":"type","description":"Indicates the type of the currency.","enum":["FIAT_CURRENCY","CRYPTOCURRENCY","NON_TRADITIONAL_CURRENCY"]},"creationDate":{"type":"string","title":"creationDate","description":"The date this currency was created. Cannot be changed, read only field not required for update operations.","format":"date-time"},"baseCurrency":{"type":"boolean","title":"baseCurrency","description":"Flag indicating if the given currency is the base currency. Cannot be changed, read only field not required for update operations."}},"required":["symbol","code","currencySymbolPosition","name","type","baseCurrency"],"additionalProperties":true};function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(Array.isArray(data)){var valid0=true;const len0=data.length;for(let i0=0;i0<len0;i0++){let data0=data[i0];const _errs1=errors;const _errs2=errors;if(errors===_errs2){if(data0&&typeof data0=="object"&&!Array.isArray(data0)){let missing0;let valid2=true;for(missing0 of schema12.required){valid2=data0[missing0]!==void 0;if(!valid2){validate10.errors=[{instancePath:instancePath+"/"+i0,schemaPath:"#/$defs/CurrencyDetails/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false;break}}if(valid2){if(data0.symbol!==void 0){const _errs5=errors;if(typeof data0.symbol!=="string"){validate10.errors=[{instancePath:instancePath+"/"+i0+"/symbol",schemaPath:"#/$defs/CurrencyDetails/properties/symbol/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid3=_errs5===errors}else{var valid3=true}if(valid3){if(data0.code!==void 0){const _errs7=errors;if(typeof data0.code!=="string"){validate10.errors=[{instancePath:instancePath+"/"+i0+"/code",schemaPath:"#/$defs/CurrencyDetails/properties/code/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid3=_errs7===errors}else{var valid3=true}if(valid3){if(data0.digitsAfterDecimal!==void 0){let data3=data0.digitsAfterDecimal;const _errs9=errors;if(!(typeof data3=="number"&&(!(data3%1)&&!isNaN(data3))&&isFinite(data3))){validate10.errors=[{instancePath:instancePath+"/"+i0+"/digitsAfterDecimal",schemaPath:"#/$defs/CurrencyDetails/properties/digitsAfterDecimal/type",keyword:"type",params:{type:"integer"},message:"must be integer"}];return false}var valid3=_errs9===errors}else{var valid3=true}if(valid3){if(data0.lastModifiedDate!==void 0){const _errs11=errors;if(errors===_errs11){if(errors===_errs11){if(!(typeof data0.lastModifiedDate==="string")){validate10.errors=[{instancePath:instancePath+"/"+i0+"/lastModifiedDate",schemaPath:"#/$defs/CurrencyDetails/properties/lastModifiedDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid3=_errs11===errors}else{var valid3=true}if(valid3){if(data0.currencySymbolPosition!==void 0){let data5=data0.currencySymbolPosition;const _errs13=errors;if(!(data5==="BEFORE_NUMBER"||data5==="AFTER_NUMBER")){validate10.errors=[{instancePath:instancePath+"/"+i0+"/currencySymbolPosition",schemaPath:"#/$defs/CurrencyDetails/properties/currencySymbolPosition/enum",keyword:"enum",params:{allowedValues:schema12.properties.currencySymbolPosition.enum},message:"must be equal to one of the allowed values"}];return false}var valid3=_errs13===errors}else{var valid3=true}if(valid3){if(data0.name!==void 0){const _errs14=errors;if(typeof data0.name!=="string"){validate10.errors=[{instancePath:instancePath+"/"+i0+"/name",schemaPath:"#/$defs/CurrencyDetails/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid3=_errs14===errors}else{var valid3=true}if(valid3){if(data0.type!==void 0){let data7=data0.type;const _errs16=errors;if(!(data7==="FIAT_CURRENCY"||data7==="CRYPTOCURRENCY"||data7==="NON_TRADITIONAL_CURRENCY")){validate10.errors=[{instancePath:instancePath+"/"+i0+"/type",schemaPath:"#/$defs/CurrencyDetails/properties/type/enum",keyword:"enum",params:{allowedValues:schema12.properties.type.enum},message:"must be equal to one of the allowed values"}];return false}var valid3=_errs16===errors}else{var valid3=true}if(valid3){if(data0.creationDate!==void 0){const _errs17=errors;if(errors===_errs17){if(errors===_errs17){if(!(typeof data0.creationDate==="string")){validate10.errors=[{instancePath:instancePath+"/"+i0+"/creationDate",schemaPath:"#/$defs/CurrencyDetails/properties/creationDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid3=_errs17===errors}else{var valid3=true}if(valid3){if(data0.baseCurrency!==void 0){const _errs19=errors;if(typeof data0.baseCurrency!=="boolean"){validate10.errors=[{instancePath:instancePath+"/"+i0+"/baseCurrency",schemaPath:"#/$defs/CurrencyDetails/properties/baseCurrency/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"}];return false}var valid3=_errs19===errors}else{var valid3=true}}}}}}}}}}}else{validate10.errors=[{instancePath:instancePath+"/"+i0,schemaPath:"#/$defs/CurrencyDetails/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid0=_errs1===errors;if(!valid0){break}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"array"},message:"must be array"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};
