/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const validate=validate10;var stdin_default=validate10;const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"LoanAccountSchedule","type":"object","description":"Represents a single loan account schedule structure.","properties":{"installments":{"type":"array","title":"installments","description":"The loan account schedule installments list.","items":{"$ref":"#/$defs/Installmentaf30"}},"currency":{"title":"currency","$ref":"#/$defs/Currencyaf30"}},"additionalProperties":true,"$defs":{"Installmentaf30":{"type":"object","title":"Installmentaf30","description":"Represents a single installment details structure.","properties":{"penalty":{"title":"penalty","$ref":"#/$defs/InstallmentAllocationElementTaxableAmountaf30"},"dueDate":{"type":"string","title":"dueDate","description":"The installment due date.","format":"date-time"},"fee":{"title":"fee","$ref":"#/$defs/InstallmentFeeaf30"},"repaidDate":{"type":"string","title":"repaidDate","description":"The installment repaid date.","format":"date-time"},"principal":{"title":"principal","$ref":"#/$defs/InstallmentAllocationElementAmountaf30"},"number":{"type":"string","title":"number","description":"The order number of an installment among all the installments generated for a loan. Loan installments are put in ascending order by due date. The order number only applies to the content of a particular JSON response therefore it is not unique."},"lastPaidDate":{"type":"string","title":"lastPaidDate","description":"The installment last paid date.","format":"date-time"},"parentAccountKey":{"type":"string","title":"parentAccountKey","description":"The parent account key of the installment."},"interest":{"title":"interest","$ref":"#/$defs/InstallmentAllocationElementTaxableAmountaf30"},"feeDetails":{"type":"array","title":"feeDetails","description":"The breakdown of the fee amounts that have been applied to the loan account.","items":{"$ref":"#/$defs/InstallmentFeeDetailsaf30"}},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the installment, which is auto generated, and unique."},"state":{"title":"state","description":"The installment state.","enum":["PENDING","LATE","PAID","PARTIALLY_PAID","GRACE"]},"isPaymentHoliday":{"type":"boolean","title":"isPaymentHoliday","description":"`TRUE` if a payment holiday is offered for the installment, `FALSE` otherwise."}},"additionalProperties":true},"InstallmentAllocationElementTaxableAmountaf30":{"type":"object","title":"InstallmentAllocationElementTaxableAmountaf30","description":"Represents an installment allocation element taxable amount structure.","properties":{"amount":{"title":"amount","$ref":"#/$defs/Amountaf30"},"tax":{"title":"tax","$ref":"#/$defs/Amountaf30"}},"additionalProperties":true},"Amountaf30":{"type":"object","title":"Amountaf30","description":"Represents a simple installment amount structure.","properties":{"paid":{"type":"number","title":"paid","description":"The paid amount."},"due":{"type":"number","title":"due","description":"The due amount."},"expected":{"type":"number","title":"expected","description":"The expected amount, which is sum of paid and due amounts."}},"additionalProperties":true},"InstallmentFeeaf30":{"type":"object","title":"InstallmentFeeaf30","description":"Represents an installment fee structure.","properties":{"amount":{"title":"amount","$ref":"#/$defs/FeeAmountaf30"},"tax":{"title":"tax","$ref":"#/$defs/Amountaf30"}},"additionalProperties":true},"FeeAmountaf30":{"type":"object","title":"FeeAmountaf30","description":"Represents a fee amount.","properties":{"paid":{"type":"number","title":"paid","description":"The paid amount."},"due":{"type":"number","title":"due","description":"The due amount."},"expected":{"type":"number","title":"expected","description":"The expected amount, which is sum of paid and due amounts."},"expectedUnapplied":{"type":"number","title":"expectedUnapplied","description":"The expected amount, which is the sum of unapplied fee and planned fee due amounts."}},"additionalProperties":true},"InstallmentAllocationElementAmountaf30":{"type":"object","title":"InstallmentAllocationElementAmountaf30","description":"Represents an installment allocation element amount structure.","properties":{"amount":{"title":"amount","$ref":"#/$defs/Amountaf30"}},"additionalProperties":true},"InstallmentFeeDetailsaf30":{"type":"object","title":"InstallmentFeeDetailsaf30","description":"Represents fee details for an installment.","properties":{"name":{"type":"string","title":"name","description":"The name of the fee"},"amount":{"title":"amount","$ref":"#/$defs/AmountWithReducedaf30"},"tax":{"title":"tax","$ref":"#/$defs/AmountWithReducedaf30"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the predefined fee, auto generated, unique"},"id":{"type":"string","title":"id","description":"The id of the fee, provided by the client"}},"additionalProperties":true},"AmountWithReducedaf30":{"type":"object","title":"AmountWithReducedaf30","description":"Represents a simple installment amount structure.","properties":{"paid":{"type":"number","title":"paid","description":"The paid amount."},"reduced":{"type":"number","title":"reduced","description":"The reduced amount."},"due":{"type":"number","title":"due","description":"The due amount."},"expected":{"type":"number","title":"expected","description":"The expected amount, which is sum of paid and due amounts."}},"additionalProperties":true},"Currencyaf30":{"type":"object","title":"Currencyaf30","description":"Represents a currency eg. USD, EUR.","properties":{"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code for NON_FIAT currency."},"code":{"title":"code","description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMK","ZWL","ZMW","SSP","NON_FIAT"]}},"additionalProperties":true}}};const schema24={"type":"object","title":"Currencyaf30","description":"Represents a currency eg. USD, EUR.","properties":{"currencyCode":{"type":"string","title":"currencyCode","description":"Currency code for NON_FIAT currency."},"code":{"title":"code","description":"Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.","enum":["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYR","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VED","VEF","VES","VND","VUV","WST","XAG","XAU","XAF","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMK","ZWL","ZMW","SSP","NON_FIAT"]}},"additionalProperties":true};const schema12={"type":"object","title":"Installmentaf30","description":"Represents a single installment details structure.","properties":{"penalty":{"title":"penalty","$ref":"#/$defs/InstallmentAllocationElementTaxableAmountaf30"},"dueDate":{"type":"string","title":"dueDate","description":"The installment due date.","format":"date-time"},"fee":{"title":"fee","$ref":"#/$defs/InstallmentFeeaf30"},"repaidDate":{"type":"string","title":"repaidDate","description":"The installment repaid date.","format":"date-time"},"principal":{"title":"principal","$ref":"#/$defs/InstallmentAllocationElementAmountaf30"},"number":{"type":"string","title":"number","description":"The order number of an installment among all the installments generated for a loan. Loan installments are put in ascending order by due date. The order number only applies to the content of a particular JSON response therefore it is not unique."},"lastPaidDate":{"type":"string","title":"lastPaidDate","description":"The installment last paid date.","format":"date-time"},"parentAccountKey":{"type":"string","title":"parentAccountKey","description":"The parent account key of the installment."},"interest":{"title":"interest","$ref":"#/$defs/InstallmentAllocationElementTaxableAmountaf30"},"feeDetails":{"type":"array","title":"feeDetails","description":"The breakdown of the fee amounts that have been applied to the loan account.","items":{"$ref":"#/$defs/InstallmentFeeDetailsaf30"}},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the installment, which is auto generated, and unique."},"state":{"title":"state","description":"The installment state.","enum":["PENDING","LATE","PAID","PARTIALLY_PAID","GRACE"]},"isPaymentHoliday":{"type":"boolean","title":"isPaymentHoliday","description":"`TRUE` if a payment holiday is offered for the installment, `FALSE` otherwise."}},"additionalProperties":true};const schema13={"type":"object","title":"InstallmentAllocationElementTaxableAmountaf30","description":"Represents an installment allocation element taxable amount structure.","properties":{"amount":{"title":"amount","$ref":"#/$defs/Amountaf30"},"tax":{"title":"tax","$ref":"#/$defs/Amountaf30"}},"additionalProperties":true};const schema14={"type":"object","title":"Amountaf30","description":"Represents a simple installment amount structure.","properties":{"paid":{"type":"number","title":"paid","description":"The paid amount."},"due":{"type":"number","title":"due","description":"The due amount."},"expected":{"type":"number","title":"expected","description":"The expected amount, which is sum of paid and due amounts."}},"additionalProperties":true};function validate12(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){if(data.amount!==void 0){let data0=data.amount;const _errs2=errors;const _errs3=errors;if(errors===_errs3){if(data0&&typeof data0=="object"&&!Array.isArray(data0)){if(data0.paid!==void 0){let data1=data0.paid;const _errs6=errors;if(!(typeof data1=="number"&&isFinite(data1))){validate12.errors=[{instancePath:instancePath+"/amount/paid",schemaPath:"#/$defs/Amountaf30/properties/paid/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid2=_errs6===errors}else{var valid2=true}if(valid2){if(data0.due!==void 0){let data2=data0.due;const _errs8=errors;if(!(typeof data2=="number"&&isFinite(data2))){validate12.errors=[{instancePath:instancePath+"/amount/due",schemaPath:"#/$defs/Amountaf30/properties/due/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid2=_errs8===errors}else{var valid2=true}if(valid2){if(data0.expected!==void 0){let data3=data0.expected;const _errs10=errors;if(!(typeof data3=="number"&&isFinite(data3))){validate12.errors=[{instancePath:instancePath+"/amount/expected",schemaPath:"#/$defs/Amountaf30/properties/expected/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid2=_errs10===errors}else{var valid2=true}}}}else{validate12.errors=[{instancePath:instancePath+"/amount",schemaPath:"#/$defs/Amountaf30/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.tax!==void 0){let data4=data.tax;const _errs12=errors;const _errs13=errors;if(errors===_errs13){if(data4&&typeof data4=="object"&&!Array.isArray(data4)){if(data4.paid!==void 0){let data5=data4.paid;const _errs16=errors;if(!(typeof data5=="number"&&isFinite(data5))){validate12.errors=[{instancePath:instancePath+"/tax/paid",schemaPath:"#/$defs/Amountaf30/properties/paid/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid4=_errs16===errors}else{var valid4=true}if(valid4){if(data4.due!==void 0){let data6=data4.due;const _errs18=errors;if(!(typeof data6=="number"&&isFinite(data6))){validate12.errors=[{instancePath:instancePath+"/tax/due",schemaPath:"#/$defs/Amountaf30/properties/due/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid4=_errs18===errors}else{var valid4=true}if(valid4){if(data4.expected!==void 0){let data7=data4.expected;const _errs20=errors;if(!(typeof data7=="number"&&isFinite(data7))){validate12.errors=[{instancePath:instancePath+"/tax/expected",schemaPath:"#/$defs/Amountaf30/properties/expected/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid4=_errs20===errors}else{var valid4=true}}}}else{validate12.errors=[{instancePath:instancePath+"/tax",schemaPath:"#/$defs/Amountaf30/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid0=_errs12===errors}else{var valid0=true}}}else{validate12.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate12.errors=vErrors;return errors===0}const schema16={"type":"object","title":"InstallmentFeeaf30","description":"Represents an installment fee structure.","properties":{"amount":{"title":"amount","$ref":"#/$defs/FeeAmountaf30"},"tax":{"title":"tax","$ref":"#/$defs/Amountaf30"}},"additionalProperties":true};const schema17={"type":"object","title":"FeeAmountaf30","description":"Represents a fee amount.","properties":{"paid":{"type":"number","title":"paid","description":"The paid amount."},"due":{"type":"number","title":"due","description":"The due amount."},"expected":{"type":"number","title":"expected","description":"The expected amount, which is sum of paid and due amounts."},"expectedUnapplied":{"type":"number","title":"expectedUnapplied","description":"The expected amount, which is the sum of unapplied fee and planned fee due amounts."}},"additionalProperties":true};function validate14(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){if(data.amount!==void 0){let data0=data.amount;const _errs2=errors;const _errs3=errors;if(errors===_errs3){if(data0&&typeof data0=="object"&&!Array.isArray(data0)){if(data0.paid!==void 0){let data1=data0.paid;const _errs6=errors;if(!(typeof data1=="number"&&isFinite(data1))){validate14.errors=[{instancePath:instancePath+"/amount/paid",schemaPath:"#/$defs/FeeAmountaf30/properties/paid/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid2=_errs6===errors}else{var valid2=true}if(valid2){if(data0.due!==void 0){let data2=data0.due;const _errs8=errors;if(!(typeof data2=="number"&&isFinite(data2))){validate14.errors=[{instancePath:instancePath+"/amount/due",schemaPath:"#/$defs/FeeAmountaf30/properties/due/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid2=_errs8===errors}else{var valid2=true}if(valid2){if(data0.expected!==void 0){let data3=data0.expected;const _errs10=errors;if(!(typeof data3=="number"&&isFinite(data3))){validate14.errors=[{instancePath:instancePath+"/amount/expected",schemaPath:"#/$defs/FeeAmountaf30/properties/expected/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid2=_errs10===errors}else{var valid2=true}if(valid2){if(data0.expectedUnapplied!==void 0){let data4=data0.expectedUnapplied;const _errs12=errors;if(!(typeof data4=="number"&&isFinite(data4))){validate14.errors=[{instancePath:instancePath+"/amount/expectedUnapplied",schemaPath:"#/$defs/FeeAmountaf30/properties/expectedUnapplied/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid2=_errs12===errors}else{var valid2=true}}}}}else{validate14.errors=[{instancePath:instancePath+"/amount",schemaPath:"#/$defs/FeeAmountaf30/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.tax!==void 0){let data5=data.tax;const _errs14=errors;const _errs15=errors;if(errors===_errs15){if(data5&&typeof data5=="object"&&!Array.isArray(data5)){if(data5.paid!==void 0){let data6=data5.paid;const _errs18=errors;if(!(typeof data6=="number"&&isFinite(data6))){validate14.errors=[{instancePath:instancePath+"/tax/paid",schemaPath:"#/$defs/Amountaf30/properties/paid/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid4=_errs18===errors}else{var valid4=true}if(valid4){if(data5.due!==void 0){let data7=data5.due;const _errs20=errors;if(!(typeof data7=="number"&&isFinite(data7))){validate14.errors=[{instancePath:instancePath+"/tax/due",schemaPath:"#/$defs/Amountaf30/properties/due/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid4=_errs20===errors}else{var valid4=true}if(valid4){if(data5.expected!==void 0){let data8=data5.expected;const _errs22=errors;if(!(typeof data8=="number"&&isFinite(data8))){validate14.errors=[{instancePath:instancePath+"/tax/expected",schemaPath:"#/$defs/Amountaf30/properties/expected/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid4=_errs22===errors}else{var valid4=true}}}}else{validate14.errors=[{instancePath:instancePath+"/tax",schemaPath:"#/$defs/Amountaf30/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid0=_errs14===errors}else{var valid0=true}}}else{validate14.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate14.errors=vErrors;return errors===0}const schema19={"type":"object","title":"InstallmentAllocationElementAmountaf30","description":"Represents an installment allocation element amount structure.","properties":{"amount":{"title":"amount","$ref":"#/$defs/Amountaf30"}},"additionalProperties":true};function validate16(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){if(data.amount!==void 0){let data0=data.amount;const _errs3=errors;if(errors===_errs3){if(data0&&typeof data0=="object"&&!Array.isArray(data0)){if(data0.paid!==void 0){let data1=data0.paid;const _errs6=errors;if(!(typeof data1=="number"&&isFinite(data1))){validate16.errors=[{instancePath:instancePath+"/amount/paid",schemaPath:"#/$defs/Amountaf30/properties/paid/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid2=_errs6===errors}else{var valid2=true}if(valid2){if(data0.due!==void 0){let data2=data0.due;const _errs8=errors;if(!(typeof data2=="number"&&isFinite(data2))){validate16.errors=[{instancePath:instancePath+"/amount/due",schemaPath:"#/$defs/Amountaf30/properties/due/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid2=_errs8===errors}else{var valid2=true}if(valid2){if(data0.expected!==void 0){let data3=data0.expected;const _errs10=errors;if(!(typeof data3=="number"&&isFinite(data3))){validate16.errors=[{instancePath:instancePath+"/amount/expected",schemaPath:"#/$defs/Amountaf30/properties/expected/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid2=_errs10===errors}else{var valid2=true}}}}else{validate16.errors=[{instancePath:instancePath+"/amount",schemaPath:"#/$defs/Amountaf30/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}}}else{validate16.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate16.errors=vErrors;return errors===0}const schema21={"type":"object","title":"InstallmentFeeDetailsaf30","description":"Represents fee details for an installment.","properties":{"name":{"type":"string","title":"name","description":"The name of the fee"},"amount":{"title":"amount","$ref":"#/$defs/AmountWithReducedaf30"},"tax":{"title":"tax","$ref":"#/$defs/AmountWithReducedaf30"},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the predefined fee, auto generated, unique"},"id":{"type":"string","title":"id","description":"The id of the fee, provided by the client"}},"additionalProperties":true};const schema22={"type":"object","title":"AmountWithReducedaf30","description":"Represents a simple installment amount structure.","properties":{"paid":{"type":"number","title":"paid","description":"The paid amount."},"reduced":{"type":"number","title":"reduced","description":"The reduced amount."},"due":{"type":"number","title":"due","description":"The due amount."},"expected":{"type":"number","title":"expected","description":"The expected amount, which is sum of paid and due amounts."}},"additionalProperties":true};function validate19(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){if(data.name!==void 0){const _errs2=errors;if(typeof data.name!=="string"){validate19.errors=[{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.amount!==void 0){let data1=data.amount;const _errs4=errors;const _errs5=errors;if(errors===_errs5){if(data1&&typeof data1=="object"&&!Array.isArray(data1)){if(data1.paid!==void 0){let data2=data1.paid;const _errs8=errors;if(!(typeof data2=="number"&&isFinite(data2))){validate19.errors=[{instancePath:instancePath+"/amount/paid",schemaPath:"#/$defs/AmountWithReducedaf30/properties/paid/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid2=_errs8===errors}else{var valid2=true}if(valid2){if(data1.reduced!==void 0){let data3=data1.reduced;const _errs10=errors;if(!(typeof data3=="number"&&isFinite(data3))){validate19.errors=[{instancePath:instancePath+"/amount/reduced",schemaPath:"#/$defs/AmountWithReducedaf30/properties/reduced/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid2=_errs10===errors}else{var valid2=true}if(valid2){if(data1.due!==void 0){let data4=data1.due;const _errs12=errors;if(!(typeof data4=="number"&&isFinite(data4))){validate19.errors=[{instancePath:instancePath+"/amount/due",schemaPath:"#/$defs/AmountWithReducedaf30/properties/due/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid2=_errs12===errors}else{var valid2=true}if(valid2){if(data1.expected!==void 0){let data5=data1.expected;const _errs14=errors;if(!(typeof data5=="number"&&isFinite(data5))){validate19.errors=[{instancePath:instancePath+"/amount/expected",schemaPath:"#/$defs/AmountWithReducedaf30/properties/expected/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid2=_errs14===errors}else{var valid2=true}}}}}else{validate19.errors=[{instancePath:instancePath+"/amount",schemaPath:"#/$defs/AmountWithReducedaf30/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid0=_errs4===errors}else{var valid0=true}if(valid0){if(data.tax!==void 0){let data6=data.tax;const _errs16=errors;const _errs17=errors;if(errors===_errs17){if(data6&&typeof data6=="object"&&!Array.isArray(data6)){if(data6.paid!==void 0){let data7=data6.paid;const _errs20=errors;if(!(typeof data7=="number"&&isFinite(data7))){validate19.errors=[{instancePath:instancePath+"/tax/paid",schemaPath:"#/$defs/AmountWithReducedaf30/properties/paid/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid4=_errs20===errors}else{var valid4=true}if(valid4){if(data6.reduced!==void 0){let data8=data6.reduced;const _errs22=errors;if(!(typeof data8=="number"&&isFinite(data8))){validate19.errors=[{instancePath:instancePath+"/tax/reduced",schemaPath:"#/$defs/AmountWithReducedaf30/properties/reduced/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid4=_errs22===errors}else{var valid4=true}if(valid4){if(data6.due!==void 0){let data9=data6.due;const _errs24=errors;if(!(typeof data9=="number"&&isFinite(data9))){validate19.errors=[{instancePath:instancePath+"/tax/due",schemaPath:"#/$defs/AmountWithReducedaf30/properties/due/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid4=_errs24===errors}else{var valid4=true}if(valid4){if(data6.expected!==void 0){let data10=data6.expected;const _errs26=errors;if(!(typeof data10=="number"&&isFinite(data10))){validate19.errors=[{instancePath:instancePath+"/tax/expected",schemaPath:"#/$defs/AmountWithReducedaf30/properties/expected/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid4=_errs26===errors}else{var valid4=true}}}}}else{validate19.errors=[{instancePath:instancePath+"/tax",schemaPath:"#/$defs/AmountWithReducedaf30/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid0=_errs16===errors}else{var valid0=true}if(valid0){if(data.encodedKey!==void 0){const _errs28=errors;if(typeof data.encodedKey!=="string"){validate19.errors=[{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs28===errors}else{var valid0=true}if(valid0){if(data.id!==void 0){const _errs30=errors;if(typeof data.id!=="string"){validate19.errors=[{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs30===errors}else{var valid0=true}}}}}}else{validate19.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate19.errors=vErrors;return errors===0}const func0=require("ajv/dist/runtime/equal").default;function validate11(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){if(data.penalty!==void 0){const _errs2=errors;if(!validate12(data.penalty,{instancePath:instancePath+"/penalty",parentData:data,parentDataProperty:"penalty",rootData})){vErrors=vErrors===null?validate12.errors:vErrors.concat(validate12.errors);errors=vErrors.length}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.dueDate!==void 0){const _errs3=errors;if(errors===_errs3){if(errors===_errs3){if(!(typeof data.dueDate==="string")){validate11.errors=[{instancePath:instancePath+"/dueDate",schemaPath:"#/properties/dueDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs3===errors}else{var valid0=true}if(valid0){if(data.fee!==void 0){const _errs5=errors;if(!validate14(data.fee,{instancePath:instancePath+"/fee",parentData:data,parentDataProperty:"fee",rootData})){vErrors=vErrors===null?validate14.errors:vErrors.concat(validate14.errors);errors=vErrors.length}var valid0=_errs5===errors}else{var valid0=true}if(valid0){if(data.repaidDate!==void 0){const _errs6=errors;if(errors===_errs6){if(errors===_errs6){if(!(typeof data.repaidDate==="string")){validate11.errors=[{instancePath:instancePath+"/repaidDate",schemaPath:"#/properties/repaidDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs6===errors}else{var valid0=true}if(valid0){if(data.principal!==void 0){const _errs8=errors;if(!validate16(data.principal,{instancePath:instancePath+"/principal",parentData:data,parentDataProperty:"principal",rootData})){vErrors=vErrors===null?validate16.errors:vErrors.concat(validate16.errors);errors=vErrors.length}var valid0=_errs8===errors}else{var valid0=true}if(valid0){if(data.number!==void 0){const _errs9=errors;if(typeof data.number!=="string"){validate11.errors=[{instancePath:instancePath+"/number",schemaPath:"#/properties/number/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs9===errors}else{var valid0=true}if(valid0){if(data.lastPaidDate!==void 0){const _errs11=errors;if(errors===_errs11){if(errors===_errs11){if(!(typeof data.lastPaidDate==="string")){validate11.errors=[{instancePath:instancePath+"/lastPaidDate",schemaPath:"#/properties/lastPaidDate/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}}}var valid0=_errs11===errors}else{var valid0=true}if(valid0){if(data.parentAccountKey!==void 0){const _errs13=errors;if(typeof data.parentAccountKey!=="string"){validate11.errors=[{instancePath:instancePath+"/parentAccountKey",schemaPath:"#/properties/parentAccountKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs13===errors}else{var valid0=true}if(valid0){if(data.interest!==void 0){const _errs15=errors;if(!validate12(data.interest,{instancePath:instancePath+"/interest",parentData:data,parentDataProperty:"interest",rootData})){vErrors=vErrors===null?validate12.errors:vErrors.concat(validate12.errors);errors=vErrors.length}var valid0=_errs15===errors}else{var valid0=true}if(valid0){if(data.feeDetails!==void 0){let data9=data.feeDetails;const _errs16=errors;if(errors===_errs16){if(Array.isArray(data9)){var valid1=true;const len0=data9.length;for(let i0=0;i0<len0;i0++){const _errs18=errors;if(!validate19(data9[i0],{instancePath:instancePath+"/feeDetails/"+i0,parentData:data9,parentDataProperty:i0,rootData})){vErrors=vErrors===null?validate19.errors:vErrors.concat(validate19.errors);errors=vErrors.length}var valid1=_errs18===errors;if(!valid1){break}}}else{validate11.errors=[{instancePath:instancePath+"/feeDetails",schemaPath:"#/properties/feeDetails/type",keyword:"type",params:{type:"array"},message:"must be array"}];return false}}var valid0=_errs16===errors}else{var valid0=true}if(valid0){if(data.encodedKey!==void 0){const _errs19=errors;if(typeof data.encodedKey!=="string"){validate11.errors=[{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid0=_errs19===errors}else{var valid0=true}if(valid0){if(data.state!==void 0){const _errs21=errors;let valid2;valid2=false;for(const v0 of schema12.properties.state.enum){if(func0(data.state,v0)){valid2=true;break}}if(!valid2){validate11.errors=[{instancePath:instancePath+"/state",schemaPath:"#/properties/state/enum",keyword:"enum",params:{allowedValues:schema12.properties.state.enum},message:"must be equal to one of the allowed values"}];return false}var valid0=_errs21===errors}else{var valid0=true}if(valid0){if(data.isPaymentHoliday!==void 0){const _errs22=errors;if(typeof data.isPaymentHoliday!=="boolean"){validate11.errors=[{instancePath:instancePath+"/isPaymentHoliday",schemaPath:"#/properties/isPaymentHoliday/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"}];return false}var valid0=_errs22===errors}else{var valid0=true}}}}}}}}}}}}}}else{validate11.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate11.errors=vErrors;return errors===0}function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){if(data.installments!==void 0){let data0=data.installments;const _errs2=errors;if(errors===_errs2){if(Array.isArray(data0)){var valid1=true;const len0=data0.length;for(let i0=0;i0<len0;i0++){const _errs4=errors;if(!validate11(data0[i0],{instancePath:instancePath+"/installments/"+i0,parentData:data0,parentDataProperty:i0,rootData})){vErrors=vErrors===null?validate11.errors:vErrors.concat(validate11.errors);errors=vErrors.length}var valid1=_errs4===errors;if(!valid1){break}}}else{validate10.errors=[{instancePath:instancePath+"/installments",schemaPath:"#/properties/installments/type",keyword:"type",params:{type:"array"},message:"must be array"}];return false}}var valid0=_errs2===errors}else{var valid0=true}if(valid0){if(data.currency!==void 0){let data2=data.currency;const _errs5=errors;const _errs6=errors;if(errors===_errs6){if(data2&&typeof data2=="object"&&!Array.isArray(data2)){if(data2.currencyCode!==void 0){const _errs9=errors;if(typeof data2.currencyCode!=="string"){validate10.errors=[{instancePath:instancePath+"/currency/currencyCode",schemaPath:"#/$defs/Currencyaf30/properties/currencyCode/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid3=_errs9===errors}else{var valid3=true}if(valid3){if(data2.code!==void 0){const _errs11=errors;let valid4;valid4=false;for(const v0 of schema24.properties.code.enum){if(func0(data2.code,v0)){valid4=true;break}}if(!valid4){validate10.errors=[{instancePath:instancePath+"/currency/code",schemaPath:"#/$defs/Currencyaf30/properties/code/enum",keyword:"enum",params:{allowedValues:schema24.properties.code.enum},message:"must be equal to one of the allowed values"}];return false}var valid3=_errs11===errors}else{var valid3=true}}}else{validate10.errors=[{instancePath:instancePath+"/currency",schemaPath:"#/$defs/Currencyaf30/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}var valid0=_errs5===errors}else{var valid0=true}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate.schema=schema11;export{stdin_default as default,validate};
