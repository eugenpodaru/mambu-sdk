/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"getAllAuthorizationHoldsResponse","type":"array","items":{"$ref":"#/$defs/GetAuthorizationHoldaf30"},"$defs":{"GetAuthorizationHoldaf30":{"type":"object","title":"GetAuthorizationHoldaf30","description":"Details for retrieving a authorization hold. Deprecated due to encodedKey field.","properties":{"customExpirationPeriod":{"type":"integer","title":"customExpirationPeriod","description":"The custom expiration period for the hold which overwrites mcc and default expiration periods"},"amount":{"type":"number","title":"amount","description":"The amount of money to be held as a result of the authorization hold request."},"advice":{"type":"boolean","title":"advice","description":"Whether the given request should be accepted without balance validations."},"cardAcceptor":{"title":"cardAcceptor","$ref":"#/$defs/CardAcceptoraf30"},"source":{"title":"source","description":"Indicates the source of the authorization hold, the default values is CARD.","enum":["CARD","ACCOUNT"]},"creationDate":{"type":"string","title":"creationDate","description":"The organization time when the authorization hold was created","format":"date-time"},"creditDebitIndicator":{"title":"creditDebitIndicator","description":"Indicates whether the authorization hold amount is credited or debited.If not provided, the default values is DBIT.","enum":["DBIT","CRDT"]},"cardToken":{"type":"string","title":"cardToken","description":"The reference token of the card."},"referenceDateForExpiration":{"type":"string","title":"referenceDateForExpiration","description":"The date to consider as start date when calculating the number of days passed until expiration","format":"date-time"},"accountKey":{"type":"string","title":"accountKey","description":"The key of the account linked with the authorization hold."},"externalReferenceId":{"type":"string","title":"externalReferenceId","description":"The external reference ID to be used to reference the account hold in subsequent requests."},"balances":{"title":"balances","$ref":"#/$defs/AccountBalancesaf30"},"originalAmount":{"type":"number","title":"originalAmount","description":"The original amount of money to be held as a result of the authorization hold request."},"exchangeRate":{"type":"number","title":"exchangeRate","description":"The exchange rate for the original currency."},"encodedKey":{"type":"string","title":"encodedKey","description":"The internal ID of the authorization hold, auto generated, unique."},"userTransactionTime":{"type":"string","title":"userTransactionTime","description":"The formatted time at which the user made this authorization hold."},"originalCurrency":{"type":"string","title":"originalCurrency","description":"The original currency in which the hold was created."},"currencyCode":{"type":"string","title":"currencyCode","description":"The ISO currency code in which the hold was created. The amounts are stored in the base currency, but the user could have enter it in a foreign currency."},"status":{"title":"status","description":"The authorization hold status.","enum":["PENDING","REVERSED","SETTLED","EXPIRED"]}},"required":["amount","advice","externalReferenceId"],"additionalProperties":true},"CardAcceptoraf30":{"type":"object","title":"CardAcceptoraf30","description":"The details of the card acceptor (merchant) in a transaction hold.","properties":{"zip":{"type":"string","title":"zip","description":"The ZIP code of the location in which the card acceptor has the business."},"country":{"type":"string","title":"country","description":"The country in which the card acceptor has the business."},"city":{"type":"string","title":"city","description":"The city in which the card acceptor has the business."},"street":{"type":"string","title":"street","description":"The street in which the card acceptor has the business."},"name":{"type":"string","title":"name","description":"The name of the card acceptor."},"state":{"type":"string","title":"state","description":"The state in which the card acceptor has the business."},"mcc":{"type":"integer","title":"mcc","description":"The Merchant Category Code of the card acceptor."}},"additionalProperties":true},"AccountBalancesaf30":{"type":"object","title":"AccountBalancesaf30","description":"Account balances presented to inquirer such as card processor","properties":{"accountId":{"type":"string","title":"accountId","description":"The unique account identifier"},"totalBalance":{"type":"number","title":"totalBalance","description":"The current balance of a deposit account or principal balance of a revolving credit"},"cardType":{"title":"cardType","description":"The card type either DEBIT or CREDIT","enum":["DEBIT","CREDIT"]},"creditLimit":{"type":"number","title":"creditLimit","description":"The overdraft limit of a deposit account or the loan amount in case of a credit account"},"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code used for the account"},"availableBalance":{"type":"number","title":"availableBalance","description":"The available balance of a deposit or credit account"}},"additionalProperties":true}}};const schema12={"type":"object","title":"GetAuthorizationHoldaf30","description":"Details for retrieving a authorization hold. Deprecated due to encodedKey field.","properties":{"customExpirationPeriod":{"type":"integer","title":"customExpirationPeriod","description":"The custom expiration period for the hold which overwrites mcc and default expiration periods"},"amount":{"type":"number","title":"amount","description":"The amount of money to be held as a result of the authorization hold request."},"advice":{"type":"boolean","title":"advice","description":"Whether the given request should be accepted without balance validations."},"cardAcceptor":{"title":"cardAcceptor","$ref":"#/$defs/CardAcceptoraf30"},"source":{"title":"source","description":"Indicates the source of the authorization hold, the default values is CARD.","enum":["CARD","ACCOUNT"]},"creationDate":{"type":"string","title":"creationDate","description":"The organization time when the authorization hold was created","format":"date-time"},"creditDebitIndicator":{"title":"creditDebitIndicator","description":"Indicates whether the authorization hold amount is credited or debited.If not provided, the default values is DBIT.","enum":["DBIT","CRDT"]},"cardToken":{"type":"string","title":"cardToken","description":"The reference token of the card."},"referenceDateForExpiration":{"type":"string","title":"referenceDateForExpiration","description":"The date to consider as start date when calculating the number of days passed until expiration","format":"date-time"},"accountKey":{"type":"string","title":"accountKey","description":"The key of the account linked with the authorization hold."},"externalReferenceId":{"type":"string","title":"externalReferenceId","description":"The external reference ID to be used to reference the account hold in subsequent requests."},"balances":{"title":"balances","$ref":"#/$defs/AccountBalancesaf30"},"originalAmount":{"type":"number","title":"originalAmount","description":"The original amount of money to be held as a result of the authorization hold request."},"exchangeRate":{"type":"number","title":"exchangeRate","description":"The exchange rate for the original currency."},"encodedKey":{"type":"string","title":"encodedKey","description":"The internal ID of the authorization hold, auto generated, unique."},"userTransactionTime":{"type":"string","title":"userTransactionTime","description":"The formatted time at which the user made this authorization hold."},"originalCurrency":{"type":"string","title":"originalCurrency","description":"The original currency in which the hold was created."},"currencyCode":{"type":"string","title":"currencyCode","description":"The ISO currency code in which the hold was created. The amounts are stored in the base currency, but the user could have enter it in a foreign currency."},"status":{"title":"status","description":"The authorization hold status.","enum":["PENDING","REVERSED","SETTLED","EXPIRED"]}},"required":["amount","advice","externalReferenceId"],"additionalProperties":true};const schema13={"type":"object","title":"CardAcceptoraf30","description":"The details of the card acceptor (merchant) in a transaction hold.","properties":{"zip":{"type":"string","title":"zip","description":"The ZIP code of the location in which the card acceptor has the business."},"country":{"type":"string","title":"country","description":"The country in which the card acceptor has the business."},"city":{"type":"string","title":"city","description":"The city in which the card acceptor has the business."},"street":{"type":"string","title":"street","description":"The street in which the card acceptor has the business."},"name":{"type":"string","title":"name","description":"The name of the card acceptor."},"state":{"type":"string","title":"state","description":"The state in which the card acceptor has the business."},"mcc":{"type":"integer","title":"mcc","description":"The Merchant Category Code of the card acceptor."}},"additionalProperties":true};const schema14={"type":"object","title":"AccountBalancesaf30","description":"Account balances presented to inquirer such as card processor","properties":{"accountId":{"type":"string","title":"accountId","description":"The unique account identifier"},"totalBalance":{"type":"number","title":"totalBalance","description":"The current balance of a deposit account or principal balance of a revolving credit"},"cardType":{"title":"cardType","description":"The card type either DEBIT or CREDIT","enum":["DEBIT","CREDIT"]},"creditLimit":{"type":"number","title":"creditLimit","description":"The overdraft limit of a deposit account or the loan amount in case of a credit account"},"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code used for the account"},"availableBalance":{"type":"number","title":"availableBalance","description":"The available balance of a deposit or credit account"}},"additionalProperties":true};function validate11(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){let missing0;if(data.amount===void 0&&(missing0="amount")||data.advice===void 0&&(missing0="advice")||data.externalReferenceId===void 0&&(missing0="externalReferenceId")){validate11.errors=[{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false}else{if(data.customExpirationPeriod!==void 0){let data0=data.customExpirationPeriod;const _errs2=errors;if(!(typeof data0=="number"&&(!(data0%1)&&!isNaN(data0))&&isFinite(data0))){validate11.errors=[{instancePath:instancePath+"/customExpirationPeriod",schemaPath:"#/properties/customExpirationPeriod/type",keyword:"type",params:{type:"integer"},message:"must be integer"}];return false}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.amount!==void 0){let data1=data.amount;const _errs4=errors;if(!(typeof data1=="number"&&isFinite(data1))){validate11.errors=[{instancePath:instancePath+"/amount",schemaPath:"#/properties/amount/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid0=_errs4===errors}else{var valid0=true}if(valid0){if(data.advice!==void 0){const _errs6=errors;if(typeof data.advice!=="boolean"){validate11.errors=[{instancePath:instancePath+"/advice",schemaPath:"#/properties/advice/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"}];return false}var valid0=_errs6===errors}else{var valid0=true}if(valid0){if(data.cardAcceptor!==void 0){let data3=data.cardAcceptor;const _errs8=errors;const _errs9=errors;if(errors===_errs9){if(data3&&typeof data3=="object"&&!Array.isArray(data3)){if(data3.zip!==void 0){const _errs12=errors;if(typeof data3.zip!=="string"){validate11.errors=[{instancePath:instancePath+"/cardAcceptor/zip",schemaPath:"#/$defs/CardAcceptoraf30/properties/zip/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid2=_errs12===errors}else{var valid2=true}if(valid2){if(data3.country!==void 0){const _errs14=errors;if(typeof data3.country!=="string"){validate11.errors=[{instancePath:instancePath+"/cardAcceptor/country",schemaPath:"#/$defs/CardAcceptoraf30/properties/country/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid2=_errs14===errors}else{var valid2=true}if(valid2){if(data3.city!==void 0){const _errs16=errors;if(typeof data3.city!=="string"){validate11.errors=[{instancePath:instancePath+"/cardAcceptor/city",schemaPath:"#/$defs/CardAcceptoraf30/properties/city/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid2=_errs16===errors}else{var valid2=true}if(valid2){if(data3.street!==void 0){const _errs18=errors;if(typeof data3.street!=="string"){validate11.errors=[{instancePath:instancePath+"/cardAcceptor/street",schemaPath:"#/$defs/CardAcceptoraf30/properties/street/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid2=_errs18===errors}else{var valid2=true}if(valid2){if(data3.name!==void 0){const _errs20=errors;if(typeof data3.name!=="string"){validate11.errors=[{instancePath:instancePath+"/cardAcceptor/name",schemaPath:"#/$defs/CardAcceptoraf30/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid2=_errs20===errors}else{var valid2=true}if(valid2){if(data3.state!==void 0){const _errs22=errors;if(typeof data3.state!=="string"){validate11.errors=[{instancePath:instancePath+"/cardAcceptor/state",schemaPath:"#/$defs/CardAcceptoraf30/properties/state/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid2=_errs22===errors}else{var valid2=true}if(valid2){if(data3.mcc!==void 0){let data10=data3.mcc;const _errs24=errors;if(!(typeof data10=="number"&&(!(data10%1)&&!isNaN(data10))&&isFinite(data10))){validate11.errors=[{instancePath:instancePath+"/cardAcceptor/mcc",schemaPath:"#/$defs/CardAcceptoraf30/properties/mcc/type",keyword:"type",params:{type:"integer"},message:"must be integer"}];return false}var valid2=_errs24===errors}else{var valid2=true}}}}}}}}else{validate11.errors=[{instancePath:instancePath+"/cardAcceptor",schemaPath:"#/$defs/CardAcceptoraf30/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid0=_errs8===errors}else{var valid0=true}if(valid0){if(data.source!==void 0){let data11=data.source;const _errs26=errors;if(!(data11==="CARD"||data11==="ACCOUNT")){validate11.errors=[{instancePath:instancePath+"/source",schemaPath:"#/properties/source/enum",keyword:"enum",params:{allowedValues:schema12.properties.source.enum},message:"must be equal to one of the allowed values"}];return false}var valid0=_errs26===errors}else{var valid0=true}if(valid0){if(data.creationDate!==void 0){const _errs27=errors;if(errors===_errs27){if(errors===_errs27){if(!(typeof data.creationDate==="string")){validate11.errors=[{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs27===errors}else{var valid0=true}if(valid0){if(data.creditDebitIndicator!==void 0){let data13=data.creditDebitIndicator;const _errs29=errors;if(!(data13==="DBIT"||data13==="CRDT")){validate11.errors=[{instancePath:instancePath+"/creditDebitIndicator",schemaPath:"#/properties/creditDebitIndicator/enum",keyword:"enum",params:{allowedValues:schema12.properties.creditDebitIndicator.enum},message:"must be equal to one of the allowed values"}];return false}var valid0=_errs29===errors}else{var valid0=true}if(valid0){if(data.cardToken!==void 0){const _errs30=errors;if(typeof data.cardToken!=="string"){validate11.errors=[{instancePath:instancePath+"/cardToken",schemaPath:"#/properties/cardToken/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs30===errors}else{var valid0=true}if(valid0){if(data.referenceDateForExpiration!==void 0){const _errs32=errors;if(errors===_errs32){if(errors===_errs32){if(!(typeof data.referenceDateForExpiration==="string")){validate11.errors=[{instancePath:instancePath+"/referenceDateForExpiration",schemaPath:"#/properties/referenceDateForExpiration/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs32===errors}else{var valid0=true}if(valid0){if(data.accountKey!==void 0){const _errs34=errors;if(typeof data.accountKey!=="string"){validate11.errors=[{instancePath:instancePath+"/accountKey",schemaPath:"#/properties/accountKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs34===errors}else{var valid0=true}if(valid0){if(data.externalReferenceId!==void 0){const _errs36=errors;if(typeof data.externalReferenceId!=="string"){validate11.errors=[{instancePath:instancePath+"/externalReferenceId",schemaPath:"#/properties/externalReferenceId/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs36===errors}else{var valid0=true}if(valid0){if(data.balances!==void 0){let data18=data.balances;const _errs38=errors;const _errs39=errors;if(errors===_errs39){if(data18&&typeof data18=="object"&&!Array.isArray(data18)){if(data18.accountId!==void 0){const _errs42=errors;if(typeof data18.accountId!=="string"){validate11.errors=[{instancePath:instancePath+"/balances/accountId",schemaPath:"#/$defs/AccountBalancesaf30/properties/accountId/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid4=_errs42===errors}else{var valid4=true}if(valid4){if(data18.totalBalance!==void 0){let data20=data18.totalBalance;const _errs44=errors;if(!(typeof data20=="number"&&isFinite(data20))){validate11.errors=[{instancePath:instancePath+"/balances/totalBalance",schemaPath:"#/$defs/AccountBalancesaf30/properties/totalBalance/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid4=_errs44===errors}else{var valid4=true}if(valid4){if(data18.cardType!==void 0){let data21=data18.cardType;const _errs46=errors;if(!(data21==="DEBIT"||data21==="CREDIT")){validate11.errors=[{instancePath:instancePath+"/balances/cardType",schemaPath:"#/$defs/AccountBalancesaf30/properties/cardType/enum",keyword:"enum",params:{allowedValues:schema14.properties.cardType.enum},message:"must be equal to one of the allowed values"}];return false}var valid4=_errs46===errors}else{var valid4=true}if(valid4){if(data18.creditLimit!==void 0){let data22=data18.creditLimit;const _errs47=errors;if(!(typeof data22=="number"&&isFinite(data22))){validate11.errors=[{instancePath:instancePath+"/balances/creditLimit",schemaPath:"#/$defs/AccountBalancesaf30/properties/creditLimit/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid4=_errs47===errors}else{var valid4=true}if(valid4){if(data18.currencyCode!==void 0){const _errs49=errors;if(typeof data18.currencyCode!=="string"){validate11.errors=[{instancePath:instancePath+"/balances/currencyCode",schemaPath:"#/$defs/AccountBalancesaf30/properties/currencyCode/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid4=_errs49===errors}else{var valid4=true}if(valid4){if(data18.availableBalance!==void 0){let data24=data18.availableBalance;const _errs51=errors;if(!(typeof data24=="number"&&isFinite(data24))){validate11.errors=[{instancePath:instancePath+"/balances/availableBalance",schemaPath:"#/$defs/AccountBalancesaf30/properties/availableBalance/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid4=_errs51===errors}else{var valid4=true}}}}}}}else{validate11.errors=[{instancePath:instancePath+"/balances",schemaPath:"#/$defs/AccountBalancesaf30/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid0=_errs38===errors}else{var valid0=true}if(valid0){if(data.originalAmount!==void 0){let data25=data.originalAmount;const _errs53=errors;if(!(typeof data25=="number"&&isFinite(data25))){validate11.errors=[{instancePath:instancePath+"/originalAmount",schemaPath:"#/properties/originalAmount/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid0=_errs53===errors}else{var valid0=true}if(valid0){if(data.exchangeRate!==void 0){let data26=data.exchangeRate;const _errs55=errors;if(!(typeof data26=="number"&&isFinite(data26))){validate11.errors=[{instancePath:instancePath+"/exchangeRate",schemaPath:"#/properties/exchangeRate/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid0=_errs55===errors}else{var valid0=true}if(valid0){if(data.encodedKey!==void 0){const _errs57=errors;if(typeof data.encodedKey!=="string"){validate11.errors=[{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs57===errors}else{var valid0=true}if(valid0){if(data.userTransactionTime!==void 0){const _errs59=errors;if(typeof data.userTransactionTime!=="string"){validate11.errors=[{instancePath:instancePath+"/userTransactionTime",schemaPath:"#/properties/userTransactionTime/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs59===errors}else{var valid0=true}if(valid0){if(data.originalCurrency!==void 0){const _errs61=errors;if(typeof data.originalCurrency!=="string"){validate11.errors=[{instancePath:instancePath+"/originalCurrency",schemaPath:"#/properties/originalCurrency/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs61===errors}else{var valid0=true}if(valid0){if(data.currencyCode!==void 0){const _errs63=errors;if(typeof data.currencyCode!=="string"){validate11.errors=[{instancePath:instancePath+"/currencyCode",schemaPath:"#/properties/currencyCode/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs63===errors}else{var valid0=true}if(valid0){if(data.status!==void 0){let data31=data.status;const _errs65=errors;if(!(data31==="PENDING"||data31==="REVERSED"||data31==="SETTLED"||data31==="EXPIRED")){validate11.errors=[{instancePath:instancePath+"/status",schemaPath:"#/properties/status/enum",keyword:"enum",params:{allowedValues:schema12.properties.status.enum},message:"must be equal to one of the allowed values"}];return false}var valid0=_errs65===errors}else{var valid0=true}}}}}}}}}}}}}}}}}}}}}else{validate11.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate11.errors=vErrors;return errors===0}function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(Array.isArray(data)){var valid0=true;const len0=data.length;for(let i0=0;i0<len0;i0++){const _errs1=errors;if(!validate11(data[i0],{instancePath:instancePath+"/"+i0,parentData:data,parentDataProperty:i0,rootData})){vErrors=vErrors===null?validate11.errors:vErrors.concat(validate11.errors);errors=vErrors.length}var valid0=_errs1===errors;if(!valid0){break}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"array"},message:"must be array"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};
