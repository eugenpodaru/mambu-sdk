/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"GLAccount","type":"object","description":"The response representation of a GLAccount.","properties":{"migrationEventKey":{"type":"string","title":"migrationEventKey","description":"The data migration event key if this GL Account was created as a part of a data migration event."},"lastModifiedDate":{"type":"string","title":"lastModifiedDate","description":"Indicates when the last modification occurred. Stored as UTC.","format":"date-time"},"glCode":{"type":"string","title":"glCode","description":"General ledger code used to identify different account types. Also used for grouping and categorizing accounts. For instance an account code of '3201' is considered a subtype of account of '3200'."},"usage":{"title":"usage","description":"Categorization of GL Account by their usage (detail - where transactions are logged, or headers, for reporting and organization purposes).","enum":["DETAIL","HEADER"]},"description":{"type":"string","title":"description","description":"Description of the GL Account."},"creationDate":{"type":"string","title":"creationDate","description":"Indicates the creation date for this account. Stored as UTC.","format":"date-time"},"type":{"title":"type","description":"Type of the GL Account","enum":["ASSET","LIABILITY","EQUITY","INCOME","EXPENSE"]},"allowManualJournalEntries":{"type":"boolean","title":"allowManualJournalEntries","description":"Indicates whether manual Journal Entries are allowed or not"},"balance":{"type":"number","title":"balance","description":"Indicates the balance of the GL Account. This field is populated only for GET /glaccounts endpoint."},"name":{"type":"string","title":"name","description":"Name of the GL Account"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"currency":{"title":"currency","$ref":"#/$defs/Currencyaf30"},"stripTrailingZeros":{"type":"boolean","title":"stripTrailingZeros","description":"Indicates whether to strip trailing zeros."},"activated":{"type":"boolean","title":"activated","description":"Whether the Account is activated and may be used."}},"additionalProperties":true,"$defs":{"Currencyaf30":{"type":"object","title":"Currencyaf30","description":"Represents a currency eg. USD, EUR.","properties":{"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code for NON_FIAT currency."},"code":{"title":"code","description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTC","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMK","ZWL","ZMW","SSP","NON_FIAT"]}},"additionalProperties":true}}};const schema12 = {"type":"object","title":"Currencyaf30","description":"Represents a currency eg. USD, EUR.","properties":{"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code for NON_FIAT currency."},"code":{"title":"code","description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTC","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMK","ZWL","ZMW","SSP","NON_FIAT"]}},"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.migrationEventKey !== undefined){const _errs2 = errors;if(typeof data.migrationEventKey !== "string"){validate10.errors = [{instancePath:instancePath+"/migrationEventKey",schemaPath:"#/properties/migrationEventKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.lastModifiedDate !== undefined){const _errs4 = errors;if(errors === _errs4){if(errors === _errs4){if(!(typeof data.lastModifiedDate === "string")){validate10.errors = [{instancePath:instancePath+"/lastModifiedDate",schemaPath:"#/properties/lastModifiedDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.glCode !== undefined){const _errs6 = errors;if(typeof data.glCode !== "string"){validate10.errors = [{instancePath:instancePath+"/glCode",schemaPath:"#/properties/glCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.usage !== undefined){let data3 = data.usage;const _errs8 = errors;if(!((data3 === "DETAIL") || (data3 === "HEADER"))){validate10.errors = [{instancePath:instancePath+"/usage",schemaPath:"#/properties/usage/enum",keyword:"enum",params:{allowedValues: schema11.properties.usage.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.description !== undefined){const _errs9 = errors;if(typeof data.description !== "string"){validate10.errors = [{instancePath:instancePath+"/description",schemaPath:"#/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs11 = errors;if(errors === _errs11){if(errors === _errs11){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.type !== undefined){const _errs13 = errors;let valid1;valid1 = false;for(const v0 of schema11.properties.type.enum){if(func0(data.type, v0)){valid1 = true;break;}}if(!valid1){validate10.errors = [{instancePath:instancePath+"/type",schemaPath:"#/properties/type/enum",keyword:"enum",params:{allowedValues: schema11.properties.type.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.allowManualJournalEntries !== undefined){const _errs14 = errors;if(typeof data.allowManualJournalEntries !== "boolean"){validate10.errors = [{instancePath:instancePath+"/allowManualJournalEntries",schemaPath:"#/properties/allowManualJournalEntries/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.balance !== undefined){let data8 = data.balance;const _errs16 = errors;if(!((typeof data8 == "number") && (isFinite(data8)))){validate10.errors = [{instancePath:instancePath+"/balance",schemaPath:"#/properties/balance/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid0 = _errs16 === errors;}else {var valid0 = true;}if(valid0){if(data.name !== undefined){const _errs18 = errors;if(typeof data.name !== "string"){validate10.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs20 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs20 === errors;}else {var valid0 = true;}if(valid0){if(data.currency !== undefined){let data11 = data.currency;const _errs22 = errors;const _errs23 = errors;if(errors === _errs23){if(data11 && typeof data11 == "object" && !Array.isArray(data11)){if(data11.currencyCode !== undefined){const _errs26 = errors;if(typeof data11.currencyCode !== "string"){validate10.errors = [{instancePath:instancePath+"/currency/currencyCode",schemaPath:"#/$defs/Currencyaf30/properties/currencyCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs26 === errors;}else {var valid3 = true;}if(valid3){if(data11.code !== undefined){const _errs28 = errors;let valid4;valid4 = false;for(const v1 of schema12.properties.code.enum){if(func0(data11.code, v1)){valid4 = true;break;}}if(!valid4){validate10.errors = [{instancePath:instancePath+"/currency/code",schemaPath:"#/$defs/Currencyaf30/properties/code/enum",keyword:"enum",params:{allowedValues: schema12.properties.code.enum},message:"must be equal to one of the allowed values"}];return false;}var valid3 = _errs28 === errors;}else {var valid3 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/currency",schemaPath:"#/$defs/Currencyaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs22 === errors;}else {var valid0 = true;}if(valid0){if(data.stripTrailingZeros !== undefined){const _errs29 = errors;if(typeof data.stripTrailingZeros !== "boolean"){validate10.errors = [{instancePath:instancePath+"/stripTrailingZeros",schemaPath:"#/properties/stripTrailingZeros/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs29 === errors;}else {var valid0 = true;}if(valid0){if(data.activated !== undefined){const _errs31 = errors;if(typeof data.activated !== "boolean"){validate10.errors = [{instancePath:instancePath+"/activated",schemaPath:"#/properties/activated/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs31 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;