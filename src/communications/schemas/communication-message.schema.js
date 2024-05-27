/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
import {createRequire} from 'module';const require = createRequire(import.meta.url);"use strict";export const validate = validate10;export default validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"CommunicationMessage","type":"object","description":"Represents a communication message.","properties":{"body":{"type":"string","title":"body","description":"The contents of the message."},"clientKey":{"type":"string","title":"clientKey","description":"The client the message was sent to."},"creationDate":{"type":"string","title":"creationDate","description":"The date the communication message was created in UTC.","format":"date-time"},"depositAccountKey":{"type":"string","title":"depositAccountKey","description":"The deposit account that triggered this message."},"destination":{"type":"string","title":"destination","description":"The destination (phone number or email address) this message was sent to."},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the communication message, which is generated automatically, and must be unique."},"event":{"title":"event","description":"The event that triggered this message.","enum":["MANUAL","DO_NOTHING","CLIENT_CREATED","CLIENT_APPROVED","GROUP_ACTIVITY","GROUP_CREATED","LOAN_CREATED","INTEREST_RATE_CHANGED","CLIENT_REJECTED","CLIENT_ACTIVITY","LOAN_REPAYMENT","LOAN_REPAYMENT_REVERSAL","FEE_APPLIED","FEE_ADJUSTED","FEE_CHARGED","PENALTY_APPLIED","PENALTY_ADJUSTMENT","FEES_DUE_REDUCED","FEE_REDUCTION_ADJUSTMENT","LOAN_APPROVAL","LOAN_ACCOUNT_CLOSURE","LOAN_ACCOUNT_WRITE_OFF","LOAN_ACCOUNT_REJECTION","LOAN_ACCOUNT_RESCHEDULED","LOAN_ACCOUNT_REFINANCED","REPAYMENT_REMINDER","ACCOUNT_IN_ARREARS","LOAN_DISBURSEMENT","LOAN_DISBURSEMENT_REVERSAL","LOAN_ACCOUNT_ACTIVITY","LOAN_ANTICIPATED_DISBURSEMENT","SAVINGS_CREATED","SAVINGS_DEPOSIT","SAVINGS_DEPOSIT_REVERSAL","SAVINGS_APPROVAL","SAVINGS_ACCOUNT_ACTIVATED","SAVINGS_ACCOUNT_CLOSURE","SAVINGS_ACCOUNT_REJECTION","SAVINGS_WITHDRAWAL","SAVINGS_WITHDRAWAL_REVERSAL","SAVINGS_ACCOUNT_ACTIVITY","DEPOSIT_INTEREST_APPLIED","DEPOSIT_INTEREST_APPLIED_ADJUSTMENT","ACCOUNT_AUTHORISATION_HOLD_CREATED","ACCOUNT_AUTHORISATION_HOLD_REVERSED","ACCOUNT_AUTHORISATION_HOLD_SETTLED","CARDS_AUTHORISATION_HOLD_CREATED","CARDS_AUTHORISATION_HOLD_SETTLED","CARDS_AUTHORISATION_HOLD_AMOUNT_DECREASED","CARDS_AUTHORISATION_HOLD_AMOUNT_INCREASED","CARDS_AUTHORISATION_HOLD_EXPIRED","CARDS_AUTHORISATION_HOLD_REVERSED","PORTAL_ACTIVATED","PORTAL_PASSWORD_RESET","END_OF_DAY_PROCESSING_COMPLETED","DATA_ACCESS_STATE_CHANGED","CREDIT_ARRANGEMENT_CREATED","CREDIT_ARRANGEMENT_CLOSED","CREDIT_ARRANGEMENT_APPROVED","CREDIT_ARRANGEMENT_REJECTED","CREDIT_ARRANGEMENT_WITHDRAWN","CREDIT_ARRANGEMENT_DELETED","CREDIT_ARRANGEMENT_ACCOUNT_ADDED","CREDIT_ARRANGEMENT_ACCOUNT_REMOVED","CREDIT_ARRANGEMENT_EDITED","PAYMENT_ORDER_ACTIVITY","COLLECTION_ORDER_ACTIVITY","JOURNAL_ENTRY_ADDED","JOURNAL_ENTRY_ADJUSTED","SAVINGS_TRANSACTION_EDITED"]},"failureCause":{"type":"string","title":"failureCause","description":"The failure code if the message failed to send."},"failureReason":{"title":"failureReason","description":"The reason for the communication message failure.","enum":["MESSAGING_EXCEPTION","INVALID_SMTP_CREDENTIALS","UNSUPPORTED_ENCODING_EXCEPTION","EMAIL_SERVICE_NOT_ENABLED","SMS_TOO_LONG","SMS_SERVICE_NOT_ENABLED","SMS_NOT_SENT","SMS_SERVICE_ERROR","SMS_CONNECTION_EXCEPTION","WEBHOOK_NOTIFICATIONS_DISABLED","INVALID_HTTP_RESPONSE","HTTP_ERROR_WHILE_SENDING","INVALID_JSON_BODY_SYNTAX","MISSING_TEMPLATE_KEY","MAX_MESSAGE_SIZE_LIMIT_EXCEEDED","UNDEFINED_DESTINATION","INVALID_HTTP_PROTOCOL","BLACKLISTED_URL","INVALID_SMS_GATEWAY_CREDENTIALS","MISSING_SMS_RECIPIENT","SMS_GATEWAY_ERROR","MISSING_EMAIL_RECIPIENT_ADDRESS","OTHER"]},"groupKey":{"type":"string","title":"groupKey","description":"The group the message was sent to."},"loanAccountKey":{"type":"string","title":"loanAccountKey","description":"The loan account that triggered this message."},"numRetries":{"type":"integer","title":"numRetries","description":"The number of retries to send the message."},"referenceId":{"type":"string","title":"referenceId","description":"The reference ID of the communication message, generated by the SMS dispatcher."},"repaymentKey":{"type":"string","title":"repaymentKey","description":"The repayment that triggered this message."},"sendDate":{"type":"string","title":"sendDate","description":"The date the communication message was sent in UTC.","format":"date-time"},"senderKey":{"type":"string","title":"senderKey","description":"The encoded key of the sender. If specified, it should be the encoded key of the current user."},"state":{"title":"state","description":"The state of the message.","enum":["SENT","QUEUED","QUEUED_FOR_STREAM","WAITING","SENDING_ASYNC","FAILED"]},"subject":{"type":"string","title":"subject","description":"The subject of the message."},"templateKey":{"type":"string","title":"templateKey","description":"The communication message template key."},"type":{"title":"type","description":"The type of communication message.","enum":["EMAIL","SMS","WEB_HOOK","EVENT_STREAM","TASK"]},"userKey":{"type":"string","title":"userKey","description":"The user the message was sent to."}},"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.body !== undefined){const _errs2 = errors;if(typeof data.body !== "string"){validate10.errors = [{instancePath:instancePath+"/body",schemaPath:"#/properties/body/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.clientKey !== undefined){const _errs4 = errors;if(typeof data.clientKey !== "string"){validate10.errors = [{instancePath:instancePath+"/clientKey",schemaPath:"#/properties/clientKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.creationDate !== undefined){const _errs6 = errors;if(errors === _errs6){if(errors === _errs6){if(!(typeof data.creationDate === "string")){validate10.errors = [{instancePath:instancePath+"/creationDate",schemaPath:"#/properties/creationDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.depositAccountKey !== undefined){const _errs8 = errors;if(typeof data.depositAccountKey !== "string"){validate10.errors = [{instancePath:instancePath+"/depositAccountKey",schemaPath:"#/properties/depositAccountKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.destination !== undefined){const _errs10 = errors;if(typeof data.destination !== "string"){validate10.errors = [{instancePath:instancePath+"/destination",schemaPath:"#/properties/destination/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs12 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs12 === errors;}else {var valid0 = true;}if(valid0){if(data.event !== undefined){const _errs14 = errors;let valid1;valid1 = false;for(const v0 of schema11.properties.event.enum){if(func0(data.event, v0)){valid1 = true;break;}}if(!valid1){validate10.errors = [{instancePath:instancePath+"/event",schemaPath:"#/properties/event/enum",keyword:"enum",params:{allowedValues: schema11.properties.event.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs14 === errors;}else {var valid0 = true;}if(valid0){if(data.failureCause !== undefined){const _errs15 = errors;if(typeof data.failureCause !== "string"){validate10.errors = [{instancePath:instancePath+"/failureCause",schemaPath:"#/properties/failureCause/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs15 === errors;}else {var valid0 = true;}if(valid0){if(data.failureReason !== undefined){const _errs17 = errors;let valid2;valid2 = false;for(const v1 of schema11.properties.failureReason.enum){if(func0(data.failureReason, v1)){valid2 = true;break;}}if(!valid2){validate10.errors = [{instancePath:instancePath+"/failureReason",schemaPath:"#/properties/failureReason/enum",keyword:"enum",params:{allowedValues: schema11.properties.failureReason.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs17 === errors;}else {var valid0 = true;}if(valid0){if(data.groupKey !== undefined){const _errs18 = errors;if(typeof data.groupKey !== "string"){validate10.errors = [{instancePath:instancePath+"/groupKey",schemaPath:"#/properties/groupKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.loanAccountKey !== undefined){const _errs20 = errors;if(typeof data.loanAccountKey !== "string"){validate10.errors = [{instancePath:instancePath+"/loanAccountKey",schemaPath:"#/properties/loanAccountKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs20 === errors;}else {var valid0 = true;}if(valid0){if(data.numRetries !== undefined){let data11 = data.numRetries;const _errs22 = errors;if(!(((typeof data11 == "number") && (!(data11 % 1) && !isNaN(data11))) && (isFinite(data11)))){validate10.errors = [{instancePath:instancePath+"/numRetries",schemaPath:"#/properties/numRetries/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs22 === errors;}else {var valid0 = true;}if(valid0){if(data.referenceId !== undefined){const _errs24 = errors;if(typeof data.referenceId !== "string"){validate10.errors = [{instancePath:instancePath+"/referenceId",schemaPath:"#/properties/referenceId/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs24 === errors;}else {var valid0 = true;}if(valid0){if(data.repaymentKey !== undefined){const _errs26 = errors;if(typeof data.repaymentKey !== "string"){validate10.errors = [{instancePath:instancePath+"/repaymentKey",schemaPath:"#/properties/repaymentKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs26 === errors;}else {var valid0 = true;}if(valid0){if(data.sendDate !== undefined){const _errs28 = errors;if(errors === _errs28){if(errors === _errs28){if(!(typeof data.sendDate === "string")){validate10.errors = [{instancePath:instancePath+"/sendDate",schemaPath:"#/properties/sendDate/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs28 === errors;}else {var valid0 = true;}if(valid0){if(data.senderKey !== undefined){const _errs30 = errors;if(typeof data.senderKey !== "string"){validate10.errors = [{instancePath:instancePath+"/senderKey",schemaPath:"#/properties/senderKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs30 === errors;}else {var valid0 = true;}if(valid0){if(data.state !== undefined){const _errs32 = errors;let valid3;valid3 = false;for(const v2 of schema11.properties.state.enum){if(func0(data.state, v2)){valid3 = true;break;}}if(!valid3){validate10.errors = [{instancePath:instancePath+"/state",schemaPath:"#/properties/state/enum",keyword:"enum",params:{allowedValues: schema11.properties.state.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs32 === errors;}else {var valid0 = true;}if(valid0){if(data.subject !== undefined){const _errs33 = errors;if(typeof data.subject !== "string"){validate10.errors = [{instancePath:instancePath+"/subject",schemaPath:"#/properties/subject/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs33 === errors;}else {var valid0 = true;}if(valid0){if(data.templateKey !== undefined){const _errs35 = errors;if(typeof data.templateKey !== "string"){validate10.errors = [{instancePath:instancePath+"/templateKey",schemaPath:"#/properties/templateKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs35 === errors;}else {var valid0 = true;}if(valid0){if(data.type !== undefined){const _errs37 = errors;let valid4;valid4 = false;for(const v3 of schema11.properties.type.enum){if(func0(data.type, v3)){valid4 = true;break;}}if(!valid4){validate10.errors = [{instancePath:instancePath+"/type",schemaPath:"#/properties/type/enum",keyword:"enum",params:{allowedValues: schema11.properties.type.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs37 === errors;}else {var valid0 = true;}if(valid0){if(data.userKey !== undefined){const _errs38 = errors;if(typeof data.userKey !== "string"){validate10.errors = [{instancePath:instancePath+"/userKey",schemaPath:"#/properties/userKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs38 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate.schema=schema11;