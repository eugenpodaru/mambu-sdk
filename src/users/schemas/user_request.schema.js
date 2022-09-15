/**
 * Generated by @skyleague/therefore
 * eslint-disable
 */
"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"User_Request","type":"object","description":"Allows the creation of a user","properties":{"lastName":{"type":"string","title":"lastName","description":"The user last name"},"access":{"title":"access","$ref":"#/$defs/UserAccessaf30"},"notes":{"type":"string","title":"notes","description":"Additional information for the user."},"role":{"title":"role","$ref":"#/$defs/RoleIdentifieraf30"},"homePhone":{"type":"string","title":"homePhone","description":"The user home phone number, can also contain characters"},"language":{"title":"language","description":"The user language, the user interface will be displayed in the selected language","enum":["ENGLISH","PORTUGESE","SPANISH","RUSSIAN","FRENCH","GEORGIAN","CHINESE","INDONESIAN","ROMANIAN","BURMESE","GERMAN","PORTUGUESE_BRAZIL","VIETNAMESE","ITALIAN","PHRASE"]},"title":{"type":"string","title":"title","description":"The user title"},"assignedBranchKey":{"type":"string","title":"assignedBranchKey","description":"The encoded key of the branch this user is assigned to."},"firstName":{"type":"string","title":"firstName","description":"The user first name"},"password":{"type":"string","title":"password","description":"Password used by the user"},"mobilePhone":{"type":"string","title":"mobilePhone","description":"The user mobile phone number, can also contain characters"},"twoFactorAuthentication":{"type":"boolean","title":"twoFactorAuthentication","description":"For additional security two-factor authentication can be added to users. When this setting is enabled, users will be sent an SMS on their registered mobile number, which they will need to enter in the Mambu login screen, in addition to their password.."},"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"transactionLimits":{"type":"object","title":"transactionLimits","description":"Map of specifying user transaction limits.","properties":{},"additionalProperties":{"type":"integer"}},"email":{"type":"string","title":"email","description":"The user email address. Used by Mambu for sending automated notifications or for password retrieval"},"username":{"type":"string","title":"username","description":"Mambu login user name"}},"required":["access","firstName","password","username"],"additionalProperties":true,"$defs":{"UserAccessaf30":{"type":"object","title":"UserAccessaf30","description":"Wrapper containing the available user permissions and access rights","properties":{"canManageEntitiesAssignedToOtherOfficers":{"type":"boolean","title":"canManageEntitiesAssignedToOtherOfficers","description":"Flag specific to Credit Officers determining the access to entities assigned to other Credit Officers (eg clients, accounts)"},"mambuAccess":{"type":"boolean","title":"mambuAccess","description":"Mambu access allows the user to log in to Mambu via the regular web user interface, using their login credentials. If an user does not have this access right, login to Mambu via the web user interface will not be possible."},"administratorAccess":{"type":"boolean","title":"administratorAccess","description":"Whether the user is an administrator in Mambu. The administrators in mambu are having full permissions for all entities and for Mambu settings."},"apiAccess":{"type":"boolean","title":"apiAccess","description":"API access allows the user to authenticate and interact with Mambu using Mambu's APIs, this means that most of the time such an user is not an actual person, but a piece of software that is programmed to interact with Mambu. The API user would still require the right user permissions, depending on what it is required to do in the system, and transactions posted by that user are kept in the logs in the same way as user actions from regular users."},"permissions":{"type":"array","title":"permissions","description":"Permissions for the user. The non-admin users are authorized to do actions based a set of permissions in order to access Mambu features. Note that not all this permissions are used for validating API calls, some are used only for UI validations","items":{"enum":["AUDIT_TRANSACTIONS","VIEW_COMMENTS","CREATE_COMMENTS","EDIT_COMMENTS","DELETE_COMMENTS","CREATE_INDEX_RATE","DOWNLOAD_BACKUPS","IMPORT_DATA","VIEW_BACKGROUND_TASKS","VIEW_EXCHANGE_RATES","CREATE_EXCHANGE_RATE","VIEW_CENTRE_DETAILS","CREATE_CENTRE","EDIT_CENTRE","DELETE_CENTRE","MANAGE_CONFIGURATION_AS_CODE","VIEW_BRANCH_DETAILS","CREATE_BRANCH","EDIT_BRANCH","CREATE_COMMUNICATION_TEMPLATES","EDIT_COMMUNICATION_TEMPLATES","SEND_MANUAL_SMS","SEND_MANUAL_EMAIL","VIEW_COMMUNICATION_HISTORY","RESEND_FAILED_MESSAGES","VIEW_TRANSACTION_CHANNELS","CREATE_TRANSACTION_CHANNELS","EDIT_TRANSACTION_CHANNELS","DELETE_TRANSACTION_CHANNELS","MANAGE_HOLIDAYS","MANAGE_EOD_PROCESSING","MANAGE_INTERNAL_CONTROLS","MANAGE_RISK_LEVELS","VIEW_LOAN_PRODUCT_DETAILS","CREATE_LOAN_PRODUCT","EDIT_LOAN_PRODUCT","DELETE_LOAN_PRODUCTS","VIEW_SAVINGS_PRODUCT_DETAILS","CREATE_SAVINGS_PRODUCT","EDIT_SAVINGS_PRODUCT","DELETE_SAVINGS_PRODUCT","CREATE_PRODUCT_DOCUMENT_TEMPLATES","EDIT_PRODUCT_DOCUMENT_TEMPLATES","DELETE_PRODUCT_DOCUMENT_TEMPLATES","VIEW_CLIENT_DETAILS","CREATE_CLIENT","EDIT_CLIENT","DELETE_CLIENTS","APPROVE_CLIENT","REJECT_CLIENT","EXIT_CLIENT","ANONYMIZE_CLIENT","BLACKLIST_CLIENT","UNDO_CLIENT_STATE_CHANGED","EDIT_CLIENT_ID","EDIT_BLACKLISTED_CLIENT_CFV","EDIT_GROUP_ID","CHANGE_CLIENT_TYPE","VIEW_GROUP_DETAILS","CREATE_GROUP","EDIT_GROUP","DELETE_GROUP","CHANGE_GROUP_TYPE","VIEW_LINE_OF_CREDIT_DETAILS","CREATE_LINES_OF_CREDIT","EDIT_LINES_OF_CREDIT","ADD_ACCOUNTS_TO_LINE_OF_CREDIT","REMOVE_ACCOUNTS_FROM_LINE_OF_CREDIT","APPROVE_LINE_OF_CREDIT","UNDO_APPROVE_LINE_OF_CREDIT","WITHDRAW_LINE_OF_CREDIT","UNDO_WITHDRAW_LINE_OF_CREDIT","REJECT_LINE_OF_CREDIT","UNDO_REJECT_LINE_OF_CREDIT","CLOSE_LINES_OF_CREDIT","DELETE_LINES_OF_CREDIT","VIEW_LOAN_ACCOUNT_DETAILS","CREATE_LOAN_ACCOUNT","EDIT_LOAN_ACCOUNT","DELETE_LOAN_ACCOUNT","ENTER_REPAYMENT","EDIT_REPAYMENT_SCHEDULE","APPROVE_LOANS","REQUEST_LOAN_APPROVAL","DIBURSE_LOANS","WITHDRAW_LOAN_ACCOUNTS","UNDO_WITHDRAW_LOAN_ACCOUNTS","SET_LOAN_INCOMPLETE","REJECT_LOANS","UNDO_REJECT_LOANS","CLOSE_LOAN_ACCOUNTS","WRITE_OFF_LOAN_ACCOUNTS","TERMINATE_LOAN_ACCOUNTS","PAY_OFF_LOAN","UNDO_LOAN_ACCOUNT_CLOSURE","REVERSE_LOAN_ACCOUNT_WRITE_OFF","REFINANCE_LOAN_ACCOUNT","RESCHEDULE_LOAN_ACCOUNT","APPLY_ACCRUED_LOAN_INTEREST","APPLY_LOAN_FEES","APPLY_LOAN_ADJUSTMENTS","EDIT_PLANNED_FEES","BACKDATE_LOAN_TRANSACTIONS","LINK_ACCOUNTS","COLLECT_GUARANTIES","VIEW_SECURITIES_DETAILS","CREATE_SECURITIES","EDIT_SECURITIES","DELETE_SECURITIES","LOCK_LOAN_ACCOUNTS","POST_TRANSACTIONS_ON_LOCKED_LOAN_ACCOUNTS","EDIT_LOAN_TRANCHES","EDIT_PENALTY_RATE","SET_DISBURSEMENT_CONDITIONS","EDIT_LOAN_TRANSACTIONS","BULK_LOAN_CORRECTIONS","EDIT_INTEREST_RATE","EDIT_REPAYMENT_METHOD_VALUE","EDIT_PERIODIC_PAYMENT_FOR_ACTIVE_ACCOUNT","MANAGE_LOAN_ASSOCIATION","MAKE_WITHDRAWAL_REDRAW","VIEW_SAVINGS_ACCOUNT_DETAILS","CREATE_SAVINGS_ACCOUNT","EDIT_SAVINGS_ACCOUNT","DELETE_SAVINGS_ACCOUNT","MAKE_DEPOSIT","MAKE_WITHDRAWAL","MAKE_EARLY_WITHDRAWALS","APPROVE_SAVINGS","ACTIVATE_MATURITY","UNDO_MATURITY","CLOSE_SAVINGS_ACCOUNTS","APPLY_SAVINGS_FEES","REOPEN_SAVINGS_ACCOUNT","APPLY_SAVINGS_ADJUSTMENTS","LOCK_SAVINGS_ACCOUNT","UNLOCK_SAVINGS_ACCOUNT","REVERSE_SAVINGS_ACCOUNT_WRITE_OFF","BACKDATE_SAVINGS_TRANSACTIONS","MAKE_TRANSFER","MAKE_INTER_CLIENTS_TRANSFERS","POST_TRANSACTIONS_ON_DORMANT_ACCOUNTS","APPLY_ACCRUED_SAVINGS_INTEREST","EDIT_SAVINGS_TRANSACTIONS","BULK_DEPOSIT_CORRECTIONS","BLOCK_AND_SEIZE_FUNDS","WITHDRAW_BLOCKED_FUNDS","CREATE_CARDS","VIEW_CARDS","DELETE_CARDS","REVERSE_CARD_WITHDRAWAL_TRANSACTION","REVERSE_CARD_TRANSACTION","CARD_BALANCE_INQUIRY","CREATE_AUTHORIZATION_HOLD","UPDATE_AUTHORIZATION_HOLD","VIEW_AUTHORIZATION_HOLD","CREATE_CARD_TRANSACTION","CREATE_ACCOUNT_HOLD","UPDATE_ACCOUNT_HOLD","VIEW_ACCOUNT_HOLD","VIEW_DOCUMENTS","CREATE_DOCUMENTS","EDIT_DOCUMENTS","DELETE_DOCUMENTS","VIEW_TASK","CREATE_TASK","EDIT_TASK","DELETE_TASK","VIEW_INTELLIGENCE","VIEW_REPORTS","CREATE_REPORTS","EDIT_REPORTS","DELETE_REPORTS","VIEW_CHART_OF_ACCOUNTS","MANAGE_ACCOUNTS","VIEW_JOURNAL_ENTRIES","LOG_JOURNAL_ENTRIES","VIEW_ACCOUNTING_REPORTS","MAKE_ACCOUNTING_CLOSURE","APPLY_ACCOUNTING_ADJUSTMENTS","BOOKING_DATE_LOANS_GL","BOOKING_DATE_SAVINGS_GL","RECTIFY_ADJUSTMENT","VIEW_ACCOUNTING_RATES","CREATE_ACCOUNTING_RATES","OPEN_TILL","CLOSE_TILL","ADD_CASH","REMOVE_CASH","POST_TRANSACTIONS_WITHOUT_OPENED_TILL","VIEW_INVESTOR_FUNDS_DETAILS","CREATE_INVESTOR_FUNDS","EDIT_INVESTOR_FUNDS","DELETE_INVESTOR_FUNDS","SELL_LOAN_FRACTION","CREATE_USER","EDIT_USER","VIEW_USER_DETAILS","DELETE_USER","MANAGE_CLIENT_ASSOCIATION","MANAGE_GROUP_ASSOCIATION","EDIT_PRINCIPAL_PAYMENT_ACTIVE_REVOLVING_CREDIT","PERFORM_REPAYMENTS_WITH_CUSTOM_AMOUNTS_ALLOCATION","EXPORT_TO_EXCEL","VIEW_ADMINISTRATION_DETAILS","MANAGE_EVENTS_STREAMING","MANAGE_PAYMENTS","MANAGE_AUDIT_TRAIL","MANAGE_APPS","MANAGE_CARDS_CAPABILITY","MANAGE_NOTIFICATIONS","ADMIN","CREATE_ROLE","EDIT_ROLE","DELETE_ROLE","VIEW_ROLE","MANAGE_FEDERATED_AUTHENTICATION","MANAGE_ACCESS_PREFERENCES","VIEW_API_CONSUMERS_AND_KEYS","CREATE_API_CONSUMERS_AND_KEYS","EDIT_API_CONSUMERS_AND_KEYS","DELETE_API_CONSUMERS_AND_KEYS","VIEW_CUSTOM_FIELD","CREATE_CUSTOM_FIELD","EDIT_CUSTOM_FIELD","DELETE_CUSTOM_FIELD"]}},"deliveryAccess":{"type":"boolean","title":"deliveryAccess","description":"Flag indicating the user is part of the Delivery team"},"creditOfficerAccess":{"type":"boolean","title":"creditOfficerAccess","description":"Whether the user is a credit officer or not. Credit Officers have the option of having clients and groups assigned to them, this relationship allows for better reporting and client management."},"canManageAllBranches":{"type":"boolean","title":"canManageAllBranches","description":"Whether the user permissions apply to all branches or only for some branches"},"managedBranches":{"type":"array","title":"managedBranches","description":" The list of branches that can be managed by current user. If the user has the canManageAllBranches true, this list is not taken in consideration.","items":{"description":" The list of branches that can be managed by current user. If the user has the canManageAllBranches true, this list is not taken in consideration.","$ref":"#/$defs/UserManagedBranchaf30"}},"supportAccess":{"type":"boolean","title":"supportAccess","description":"Flag indicating the user is in charge with the Mambu technical support."},"tellerAccess":{"type":"boolean","title":"tellerAccess","description":"Whether the user is a teller or not. Tellers have access to the teller module, special tellering permissions give them access to the different actions available on this module, such as opening/closing tills, posting transactions on a till, adding and removing cash from a till etc."}},"required":["canManageEntitiesAssignedToOtherOfficers","canManageAllBranches"],"additionalProperties":true},"UserManagedBranchaf30":{"type":"object","title":"UserManagedBranchaf30","description":"Branch that can be managed by the user or API Consumer","properties":{"branchKey":{"type":"string","title":"branchKey","description":"The encoded key of the branch, generated"}},"additionalProperties":true},"RoleIdentifieraf30":{"type":"object","title":"RoleIdentifieraf30","description":"The user role identifier","properties":{"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"string","title":"id","description":"Id of the role, unique, can be generated and customized"}},"additionalProperties":true}}};const schema14 = {"type":"object","title":"RoleIdentifieraf30","description":"The user role identifier","properties":{"encodedKey":{"type":"string","title":"encodedKey","description":"The encoded key of the entity, generated, globally unique"},"id":{"type":"string","title":"id","description":"Id of the role, unique, can be generated and customized"}},"additionalProperties":true};const schema12 = {"type":"object","title":"UserAccessaf30","description":"Wrapper containing the available user permissions and access rights","properties":{"canManageEntitiesAssignedToOtherOfficers":{"type":"boolean","title":"canManageEntitiesAssignedToOtherOfficers","description":"Flag specific to Credit Officers determining the access to entities assigned to other Credit Officers (eg clients, accounts)"},"mambuAccess":{"type":"boolean","title":"mambuAccess","description":"Mambu access allows the user to log in to Mambu via the regular web user interface, using their login credentials. If an user does not have this access right, login to Mambu via the web user interface will not be possible."},"administratorAccess":{"type":"boolean","title":"administratorAccess","description":"Whether the user is an administrator in Mambu. The administrators in mambu are having full permissions for all entities and for Mambu settings."},"apiAccess":{"type":"boolean","title":"apiAccess","description":"API access allows the user to authenticate and interact with Mambu using Mambu's APIs, this means that most of the time such an user is not an actual person, but a piece of software that is programmed to interact with Mambu. The API user would still require the right user permissions, depending on what it is required to do in the system, and transactions posted by that user are kept in the logs in the same way as user actions from regular users."},"permissions":{"type":"array","title":"permissions","description":"Permissions for the user. The non-admin users are authorized to do actions based a set of permissions in order to access Mambu features. Note that not all this permissions are used for validating API calls, some are used only for UI validations","items":{"enum":["AUDIT_TRANSACTIONS","VIEW_COMMENTS","CREATE_COMMENTS","EDIT_COMMENTS","DELETE_COMMENTS","CREATE_INDEX_RATE","DOWNLOAD_BACKUPS","IMPORT_DATA","VIEW_BACKGROUND_TASKS","VIEW_EXCHANGE_RATES","CREATE_EXCHANGE_RATE","VIEW_CENTRE_DETAILS","CREATE_CENTRE","EDIT_CENTRE","DELETE_CENTRE","MANAGE_CONFIGURATION_AS_CODE","VIEW_BRANCH_DETAILS","CREATE_BRANCH","EDIT_BRANCH","CREATE_COMMUNICATION_TEMPLATES","EDIT_COMMUNICATION_TEMPLATES","SEND_MANUAL_SMS","SEND_MANUAL_EMAIL","VIEW_COMMUNICATION_HISTORY","RESEND_FAILED_MESSAGES","VIEW_TRANSACTION_CHANNELS","CREATE_TRANSACTION_CHANNELS","EDIT_TRANSACTION_CHANNELS","DELETE_TRANSACTION_CHANNELS","MANAGE_HOLIDAYS","MANAGE_EOD_PROCESSING","MANAGE_INTERNAL_CONTROLS","MANAGE_RISK_LEVELS","VIEW_LOAN_PRODUCT_DETAILS","CREATE_LOAN_PRODUCT","EDIT_LOAN_PRODUCT","DELETE_LOAN_PRODUCTS","VIEW_SAVINGS_PRODUCT_DETAILS","CREATE_SAVINGS_PRODUCT","EDIT_SAVINGS_PRODUCT","DELETE_SAVINGS_PRODUCT","CREATE_PRODUCT_DOCUMENT_TEMPLATES","EDIT_PRODUCT_DOCUMENT_TEMPLATES","DELETE_PRODUCT_DOCUMENT_TEMPLATES","VIEW_CLIENT_DETAILS","CREATE_CLIENT","EDIT_CLIENT","DELETE_CLIENTS","APPROVE_CLIENT","REJECT_CLIENT","EXIT_CLIENT","ANONYMIZE_CLIENT","BLACKLIST_CLIENT","UNDO_CLIENT_STATE_CHANGED","EDIT_CLIENT_ID","EDIT_BLACKLISTED_CLIENT_CFV","EDIT_GROUP_ID","CHANGE_CLIENT_TYPE","VIEW_GROUP_DETAILS","CREATE_GROUP","EDIT_GROUP","DELETE_GROUP","CHANGE_GROUP_TYPE","VIEW_LINE_OF_CREDIT_DETAILS","CREATE_LINES_OF_CREDIT","EDIT_LINES_OF_CREDIT","ADD_ACCOUNTS_TO_LINE_OF_CREDIT","REMOVE_ACCOUNTS_FROM_LINE_OF_CREDIT","APPROVE_LINE_OF_CREDIT","UNDO_APPROVE_LINE_OF_CREDIT","WITHDRAW_LINE_OF_CREDIT","UNDO_WITHDRAW_LINE_OF_CREDIT","REJECT_LINE_OF_CREDIT","UNDO_REJECT_LINE_OF_CREDIT","CLOSE_LINES_OF_CREDIT","DELETE_LINES_OF_CREDIT","VIEW_LOAN_ACCOUNT_DETAILS","CREATE_LOAN_ACCOUNT","EDIT_LOAN_ACCOUNT","DELETE_LOAN_ACCOUNT","ENTER_REPAYMENT","EDIT_REPAYMENT_SCHEDULE","APPROVE_LOANS","REQUEST_LOAN_APPROVAL","DIBURSE_LOANS","WITHDRAW_LOAN_ACCOUNTS","UNDO_WITHDRAW_LOAN_ACCOUNTS","SET_LOAN_INCOMPLETE","REJECT_LOANS","UNDO_REJECT_LOANS","CLOSE_LOAN_ACCOUNTS","WRITE_OFF_LOAN_ACCOUNTS","TERMINATE_LOAN_ACCOUNTS","PAY_OFF_LOAN","UNDO_LOAN_ACCOUNT_CLOSURE","REVERSE_LOAN_ACCOUNT_WRITE_OFF","REFINANCE_LOAN_ACCOUNT","RESCHEDULE_LOAN_ACCOUNT","APPLY_ACCRUED_LOAN_INTEREST","APPLY_LOAN_FEES","APPLY_LOAN_ADJUSTMENTS","EDIT_PLANNED_FEES","BACKDATE_LOAN_TRANSACTIONS","LINK_ACCOUNTS","COLLECT_GUARANTIES","VIEW_SECURITIES_DETAILS","CREATE_SECURITIES","EDIT_SECURITIES","DELETE_SECURITIES","LOCK_LOAN_ACCOUNTS","POST_TRANSACTIONS_ON_LOCKED_LOAN_ACCOUNTS","EDIT_LOAN_TRANCHES","EDIT_PENALTY_RATE","SET_DISBURSEMENT_CONDITIONS","EDIT_LOAN_TRANSACTIONS","BULK_LOAN_CORRECTIONS","EDIT_INTEREST_RATE","EDIT_REPAYMENT_METHOD_VALUE","EDIT_PERIODIC_PAYMENT_FOR_ACTIVE_ACCOUNT","MANAGE_LOAN_ASSOCIATION","MAKE_WITHDRAWAL_REDRAW","VIEW_SAVINGS_ACCOUNT_DETAILS","CREATE_SAVINGS_ACCOUNT","EDIT_SAVINGS_ACCOUNT","DELETE_SAVINGS_ACCOUNT","MAKE_DEPOSIT","MAKE_WITHDRAWAL","MAKE_EARLY_WITHDRAWALS","APPROVE_SAVINGS","ACTIVATE_MATURITY","UNDO_MATURITY","CLOSE_SAVINGS_ACCOUNTS","APPLY_SAVINGS_FEES","REOPEN_SAVINGS_ACCOUNT","APPLY_SAVINGS_ADJUSTMENTS","LOCK_SAVINGS_ACCOUNT","UNLOCK_SAVINGS_ACCOUNT","REVERSE_SAVINGS_ACCOUNT_WRITE_OFF","BACKDATE_SAVINGS_TRANSACTIONS","MAKE_TRANSFER","MAKE_INTER_CLIENTS_TRANSFERS","POST_TRANSACTIONS_ON_DORMANT_ACCOUNTS","APPLY_ACCRUED_SAVINGS_INTEREST","EDIT_SAVINGS_TRANSACTIONS","BULK_DEPOSIT_CORRECTIONS","BLOCK_AND_SEIZE_FUNDS","WITHDRAW_BLOCKED_FUNDS","CREATE_CARDS","VIEW_CARDS","DELETE_CARDS","REVERSE_CARD_WITHDRAWAL_TRANSACTION","REVERSE_CARD_TRANSACTION","CARD_BALANCE_INQUIRY","CREATE_AUTHORIZATION_HOLD","UPDATE_AUTHORIZATION_HOLD","VIEW_AUTHORIZATION_HOLD","CREATE_CARD_TRANSACTION","CREATE_ACCOUNT_HOLD","UPDATE_ACCOUNT_HOLD","VIEW_ACCOUNT_HOLD","VIEW_DOCUMENTS","CREATE_DOCUMENTS","EDIT_DOCUMENTS","DELETE_DOCUMENTS","VIEW_TASK","CREATE_TASK","EDIT_TASK","DELETE_TASK","VIEW_INTELLIGENCE","VIEW_REPORTS","CREATE_REPORTS","EDIT_REPORTS","DELETE_REPORTS","VIEW_CHART_OF_ACCOUNTS","MANAGE_ACCOUNTS","VIEW_JOURNAL_ENTRIES","LOG_JOURNAL_ENTRIES","VIEW_ACCOUNTING_REPORTS","MAKE_ACCOUNTING_CLOSURE","APPLY_ACCOUNTING_ADJUSTMENTS","BOOKING_DATE_LOANS_GL","BOOKING_DATE_SAVINGS_GL","RECTIFY_ADJUSTMENT","VIEW_ACCOUNTING_RATES","CREATE_ACCOUNTING_RATES","OPEN_TILL","CLOSE_TILL","ADD_CASH","REMOVE_CASH","POST_TRANSACTIONS_WITHOUT_OPENED_TILL","VIEW_INVESTOR_FUNDS_DETAILS","CREATE_INVESTOR_FUNDS","EDIT_INVESTOR_FUNDS","DELETE_INVESTOR_FUNDS","SELL_LOAN_FRACTION","CREATE_USER","EDIT_USER","VIEW_USER_DETAILS","DELETE_USER","MANAGE_CLIENT_ASSOCIATION","MANAGE_GROUP_ASSOCIATION","EDIT_PRINCIPAL_PAYMENT_ACTIVE_REVOLVING_CREDIT","PERFORM_REPAYMENTS_WITH_CUSTOM_AMOUNTS_ALLOCATION","EXPORT_TO_EXCEL","VIEW_ADMINISTRATION_DETAILS","MANAGE_EVENTS_STREAMING","MANAGE_PAYMENTS","MANAGE_AUDIT_TRAIL","MANAGE_APPS","MANAGE_CARDS_CAPABILITY","MANAGE_NOTIFICATIONS","ADMIN","CREATE_ROLE","EDIT_ROLE","DELETE_ROLE","VIEW_ROLE","MANAGE_FEDERATED_AUTHENTICATION","MANAGE_ACCESS_PREFERENCES","VIEW_API_CONSUMERS_AND_KEYS","CREATE_API_CONSUMERS_AND_KEYS","EDIT_API_CONSUMERS_AND_KEYS","DELETE_API_CONSUMERS_AND_KEYS","VIEW_CUSTOM_FIELD","CREATE_CUSTOM_FIELD","EDIT_CUSTOM_FIELD","DELETE_CUSTOM_FIELD"]}},"deliveryAccess":{"type":"boolean","title":"deliveryAccess","description":"Flag indicating the user is part of the Delivery team"},"creditOfficerAccess":{"type":"boolean","title":"creditOfficerAccess","description":"Whether the user is a credit officer or not. Credit Officers have the option of having clients and groups assigned to them, this relationship allows for better reporting and client management."},"canManageAllBranches":{"type":"boolean","title":"canManageAllBranches","description":"Whether the user permissions apply to all branches or only for some branches"},"managedBranches":{"type":"array","title":"managedBranches","description":" The list of branches that can be managed by current user. If the user has the canManageAllBranches true, this list is not taken in consideration.","items":{"description":" The list of branches that can be managed by current user. If the user has the canManageAllBranches true, this list is not taken in consideration.","$ref":"#/$defs/UserManagedBranchaf30"}},"supportAccess":{"type":"boolean","title":"supportAccess","description":"Flag indicating the user is in charge with the Mambu technical support."},"tellerAccess":{"type":"boolean","title":"tellerAccess","description":"Whether the user is a teller or not. Tellers have access to the teller module, special tellering permissions give them access to the different actions available on this module, such as opening/closing tills, posting transactions on a till, adding and removing cash from a till etc."}},"required":["canManageEntitiesAssignedToOtherOfficers","canManageAllBranches"],"additionalProperties":true};const schema13 = {"type":"object","title":"UserManagedBranchaf30","description":"Branch that can be managed by the user or API Consumer","properties":{"branchKey":{"type":"string","title":"branchKey","description":"The encoded key of the branch, generated"}},"additionalProperties":true};const func0 = require("ajv/dist/runtime/equal").default;function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((data.canManageEntitiesAssignedToOtherOfficers === undefined) && (missing0 = "canManageEntitiesAssignedToOtherOfficers")) || ((data.canManageAllBranches === undefined) && (missing0 = "canManageAllBranches"))){validate11.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.canManageEntitiesAssignedToOtherOfficers !== undefined){const _errs2 = errors;if(typeof data.canManageEntitiesAssignedToOtherOfficers !== "boolean"){validate11.errors = [{instancePath:instancePath+"/canManageEntitiesAssignedToOtherOfficers",schemaPath:"#/properties/canManageEntitiesAssignedToOtherOfficers/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.mambuAccess !== undefined){const _errs4 = errors;if(typeof data.mambuAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/mambuAccess",schemaPath:"#/properties/mambuAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.administratorAccess !== undefined){const _errs6 = errors;if(typeof data.administratorAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/administratorAccess",schemaPath:"#/properties/administratorAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.apiAccess !== undefined){const _errs8 = errors;if(typeof data.apiAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/apiAccess",schemaPath:"#/properties/apiAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}if(valid0){if(data.permissions !== undefined){let data4 = data.permissions;const _errs10 = errors;if(errors === _errs10){if(Array.isArray(data4)){var valid1 = true;const len0 = data4.length;for(let i0=0; i0<len0; i0++){const _errs12 = errors;let valid2;valid2 = false;for(const v0 of schema12.properties.permissions.items.enum){if(func0(data4[i0], v0)){valid2 = true;break;}}if(!valid2){validate11.errors = [{instancePath:instancePath+"/permissions/" + i0,schemaPath:"#/properties/permissions/items/enum",keyword:"enum",params:{allowedValues: schema12.properties.permissions.items.enum},message:"must be equal to one of the allowed values"}];return false;}var valid1 = _errs12 === errors;if(!valid1){break;}}}else {validate11.errors = [{instancePath:instancePath+"/permissions",schemaPath:"#/properties/permissions/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs10 === errors;}else {var valid0 = true;}if(valid0){if(data.deliveryAccess !== undefined){const _errs13 = errors;if(typeof data.deliveryAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/deliveryAccess",schemaPath:"#/properties/deliveryAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.creditOfficerAccess !== undefined){const _errs15 = errors;if(typeof data.creditOfficerAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/creditOfficerAccess",schemaPath:"#/properties/creditOfficerAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs15 === errors;}else {var valid0 = true;}if(valid0){if(data.canManageAllBranches !== undefined){const _errs17 = errors;if(typeof data.canManageAllBranches !== "boolean"){validate11.errors = [{instancePath:instancePath+"/canManageAllBranches",schemaPath:"#/properties/canManageAllBranches/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs17 === errors;}else {var valid0 = true;}if(valid0){if(data.managedBranches !== undefined){let data9 = data.managedBranches;const _errs19 = errors;if(errors === _errs19){if(Array.isArray(data9)){var valid3 = true;const len1 = data9.length;for(let i1=0; i1<len1; i1++){let data10 = data9[i1];const _errs21 = errors;const _errs22 = errors;if(errors === _errs22){if(data10 && typeof data10 == "object" && !Array.isArray(data10)){if(data10.branchKey !== undefined){if(typeof data10.branchKey !== "string"){validate11.errors = [{instancePath:instancePath+"/managedBranches/" + i1+"/branchKey",schemaPath:"#/$defs/UserManagedBranchaf30/properties/branchKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}else {validate11.errors = [{instancePath:instancePath+"/managedBranches/" + i1,schemaPath:"#/$defs/UserManagedBranchaf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid3 = _errs21 === errors;if(!valid3){break;}}}else {validate11.errors = [{instancePath:instancePath+"/managedBranches",schemaPath:"#/properties/managedBranches/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs19 === errors;}else {var valid0 = true;}if(valid0){if(data.supportAccess !== undefined){const _errs27 = errors;if(typeof data.supportAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/supportAccess",schemaPath:"#/properties/supportAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs27 === errors;}else {var valid0 = true;}if(valid0){if(data.tellerAccess !== undefined){const _errs29 = errors;if(typeof data.tellerAccess !== "boolean"){validate11.errors = [{instancePath:instancePath+"/tellerAccess",schemaPath:"#/properties/tellerAccess/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs29 === errors;}else {var valid0 = true;}}}}}}}}}}}}}else {validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((((data.access === undefined) && (missing0 = "access")) || ((data.firstName === undefined) && (missing0 = "firstName"))) || ((data.password === undefined) && (missing0 = "password"))) || ((data.username === undefined) && (missing0 = "username"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {if(data.lastName !== undefined){const _errs2 = errors;if(typeof data.lastName !== "string"){validate10.errors = [{instancePath:instancePath+"/lastName",schemaPath:"#/properties/lastName/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.access !== undefined){const _errs4 = errors;if(!(validate11(data.access, {instancePath:instancePath+"/access",parentData:data,parentDataProperty:"access",rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.notes !== undefined){const _errs5 = errors;if(typeof data.notes !== "string"){validate10.errors = [{instancePath:instancePath+"/notes",schemaPath:"#/properties/notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs5 === errors;}else {var valid0 = true;}if(valid0){if(data.role !== undefined){let data3 = data.role;const _errs7 = errors;const _errs8 = errors;if(errors === _errs8){if(data3 && typeof data3 == "object" && !Array.isArray(data3)){if(data3.encodedKey !== undefined){const _errs11 = errors;if(typeof data3.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/role/encodedKey",schemaPath:"#/$defs/RoleIdentifieraf30/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs11 === errors;}else {var valid2 = true;}if(valid2){if(data3.id !== undefined){const _errs13 = errors;if(typeof data3.id !== "string"){validate10.errors = [{instancePath:instancePath+"/role/id",schemaPath:"#/$defs/RoleIdentifieraf30/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs13 === errors;}else {var valid2 = true;}}}else {validate10.errors = [{instancePath:instancePath+"/role",schemaPath:"#/$defs/RoleIdentifieraf30/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs7 === errors;}else {var valid0 = true;}if(valid0){if(data.homePhone !== undefined){const _errs15 = errors;if(typeof data.homePhone !== "string"){validate10.errors = [{instancePath:instancePath+"/homePhone",schemaPath:"#/properties/homePhone/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs15 === errors;}else {var valid0 = true;}if(valid0){if(data.language !== undefined){const _errs17 = errors;let valid3;valid3 = false;for(const v0 of schema11.properties.language.enum){if(func0(data.language, v0)){valid3 = true;break;}}if(!valid3){validate10.errors = [{instancePath:instancePath+"/language",schemaPath:"#/properties/language/enum",keyword:"enum",params:{allowedValues: schema11.properties.language.enum},message:"must be equal to one of the allowed values"}];return false;}var valid0 = _errs17 === errors;}else {var valid0 = true;}if(valid0){if(data.title !== undefined){const _errs18 = errors;if(typeof data.title !== "string"){validate10.errors = [{instancePath:instancePath+"/title",schemaPath:"#/properties/title/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs18 === errors;}else {var valid0 = true;}if(valid0){if(data.assignedBranchKey !== undefined){const _errs20 = errors;if(typeof data.assignedBranchKey !== "string"){validate10.errors = [{instancePath:instancePath+"/assignedBranchKey",schemaPath:"#/properties/assignedBranchKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs20 === errors;}else {var valid0 = true;}if(valid0){if(data.firstName !== undefined){const _errs22 = errors;if(typeof data.firstName !== "string"){validate10.errors = [{instancePath:instancePath+"/firstName",schemaPath:"#/properties/firstName/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs22 === errors;}else {var valid0 = true;}if(valid0){if(data.password !== undefined){const _errs24 = errors;if(typeof data.password !== "string"){validate10.errors = [{instancePath:instancePath+"/password",schemaPath:"#/properties/password/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs24 === errors;}else {var valid0 = true;}if(valid0){if(data.mobilePhone !== undefined){const _errs26 = errors;if(typeof data.mobilePhone !== "string"){validate10.errors = [{instancePath:instancePath+"/mobilePhone",schemaPath:"#/properties/mobilePhone/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs26 === errors;}else {var valid0 = true;}if(valid0){if(data.twoFactorAuthentication !== undefined){const _errs28 = errors;if(typeof data.twoFactorAuthentication !== "boolean"){validate10.errors = [{instancePath:instancePath+"/twoFactorAuthentication",schemaPath:"#/properties/twoFactorAuthentication/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid0 = _errs28 === errors;}else {var valid0 = true;}if(valid0){if(data.encodedKey !== undefined){const _errs30 = errors;if(typeof data.encodedKey !== "string"){validate10.errors = [{instancePath:instancePath+"/encodedKey",schemaPath:"#/properties/encodedKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs30 === errors;}else {var valid0 = true;}if(valid0){if(data.transactionLimits !== undefined){let data15 = data.transactionLimits;const _errs32 = errors;if(errors === _errs32){if(data15 && typeof data15 == "object" && !Array.isArray(data15)){for(const key0 in data15){let data16 = data15[key0];const _errs35 = errors;if(!(((typeof data16 == "number") && (!(data16 % 1) && !isNaN(data16))) && (isFinite(data16)))){validate10.errors = [{instancePath:instancePath+"/transactionLimits/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),schemaPath:"#/properties/transactionLimits/additionalProperties/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid4 = _errs35 === errors;if(!valid4){break;}}}else {validate10.errors = [{instancePath:instancePath+"/transactionLimits",schemaPath:"#/properties/transactionLimits/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs32 === errors;}else {var valid0 = true;}if(valid0){if(data.email !== undefined){const _errs37 = errors;if(typeof data.email !== "string"){validate10.errors = [{instancePath:instancePath+"/email",schemaPath:"#/properties/email/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs37 === errors;}else {var valid0 = true;}if(valid0){if(data.username !== undefined){const _errs39 = errors;if(typeof data.username !== "string"){validate10.errors = [{instancePath:instancePath+"/username",schemaPath:"#/properties/username/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs39 === errors;}else {var valid0 = true;}}}}}}}}}}}}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};validate10.schema=schema11;