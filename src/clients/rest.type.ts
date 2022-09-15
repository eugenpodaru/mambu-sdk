/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

/**
 * A person that uses the services of the bank. Clients may have associated information such as their address, custom fields or identification documents
 */
export interface Client {
    /**
     * The last name, surname or family name of the client
     */
    lastName: string
    /**
     * The migration event encoded key associated with this client.
     */
    migrationEventKey?: string
    /**
     * The client's language of use in Mambu
     */
    preferredLanguage?:
        | 'ENGLISH'
        | 'PORTUGESE'
        | 'SPANISH'
        | 'RUSSIAN'
        | 'FRENCH'
        | 'GEORGIAN'
        | 'CHINESE'
        | 'INDONESIAN'
        | 'ROMANIAN'
        | 'BURMESE'
        | 'GERMAN'
        | 'PORTUGUESE_BRAZIL'
        | 'VIETNAMESE'
        | 'ITALIAN'
        | 'PHRASE'
    /**
     * The addresses associated with this client information like street, city etc.
     */
    addresses?: Address[]
    /**
     * Extra notes about this client
     */
    notes?: string
    /**
     * Gender of the person, male or female
     */
    gender?: 'MALE' | 'FEMALE'
    /**
     * The groups to which this client belongs
     */
    groupKeys?: string[]
    /**
     * The client's second mobile phone number
     */
    mobilePhone2?: string
    /**
     * Number of paid and closed (with 'obligations met') accounts for this client's group, when the closing operation is reverted, this is reduced
     */
    groupLoanCycle?: number
    portalSettings?: PortalSettings
    /**
     * Encoded key of the branch this client is assigned to
     */
    assignedBranchKey?: string
    /**
     * Number of paid and closed (with 'obligations met') accounts for this client, when the closing operation is reverted, this is reduced
     */
    loanCycle?: number
    /**
     * The client's email address
     */
    emailAddress?: string
    /**
     * The encoded key of the client, auto generated, unique
     */
    encodedKey?: string
    /**
     * The id of the client, can be generated and customized, unique
     */
    id?: string
    /**
     * The state of a client shows his workflow status, if he is waiting approval or is rejected or blacklisted
     */
    state?: 'PENDING_APPROVAL' | 'INACTIVE' | 'ACTIVE' | 'EXITED' | 'BLACKLISTED' | 'REJECTED'
    /**
     * Encoded key of the user this client is assigned to
     */
    assignedUserKey?: string
    /**
     * A role which describes the intended use of a client in the system
     */
    clientRoleKey?: string
    /**
     * The last date this client was modified
     */
    lastModifiedDate?: string
    /**
     * The client's home phone number
     */
    homePhone?: string
    /**
     * The date this client was created
     */
    creationDate?: string
    /**
     * The date when this client was born
     */
    birthDate?: string
    /**
     * Encoded key of the centre this client is assigned to
     */
    assignedCentreKey?: string
    /**
     * date when client was approved
     */
    approvedDate?: string
    /**
     * The first name, personal name, given name or forename of the client
     */
    firstName: string
    /**
     * The identification documents of this person
     */
    idDocuments?: IdentificationDocument[]
    /**
     * Encoded key of this clients profile picture
     */
    profilePictureKey?: string
    /**
     * Encoded key of the users profile signature
     */
    profileSignatureKey?: string
    /**
     * The client's mobile phone number
     */
    mobilePhone?: string
    /**
     * date when client was closed
     */
    closedDate?: string
    /**
     * The middle name of the client, if she/he has one
     */
    middleName?: string
    /**
     * The date when client was set as active for the first time
     */
    activationDate?: string
}

export const Client = {
    validate: require('./schemas/client.schema.js') as ValidateFunction<Client>,
    get schema() {
        return Client.validate.schema
    },
    is: (o: unknown): o is Client => Client.validate(o) === true,
    assert: (o: unknown) => {
        if (!Client.validate(o)) {
            throw new AjvValidator.ValidationError(Client.validate.errors ?? [])
        }
    },
} as const

export interface ErrorResponse {
    errors?: RestError[]
}

export const ErrorResponse = {
    validate: require('./schemas/error-response.schema.js') as ValidateFunction<ErrorResponse>,
    get schema() {
        return ErrorResponse.validate.schema
    },
    is: (o: unknown): o is ErrorResponse => ErrorResponse.validate(o) === true,
} as const

export type PatchRequest = PatchOperation[]

export const PatchRequest = {
    validate: require('./schemas/patch-request.schema.js') as ValidateFunction<PatchRequest>,
    get schema() {
        return PatchRequest.validate.schema
    },
    is: (o: unknown): o is PatchRequest => PatchRequest.validate(o) === true,
    assert: (o: unknown) => {
        if (!PatchRequest.validate(o)) {
            throw new AjvValidator.ValidationError(PatchRequest.validate.errors ?? [])
        }
    },
} as const

export type GetAllResponse = Client[]

export const GetAllResponse = {
    validate: require('./schemas/get-all-response.schema.js') as ValidateFunction<GetAllResponse>,
    get schema() {
        return GetAllResponse.validate.schema
    },
    is: (o: unknown): o is GetAllResponse => GetAllResponse.validate(o) === true,
} as const

/**
 * Wrapper that holds a list of filtering criteria and a sorting criteria for clients
 */
export interface ClientSearchCriteria {
    sortingCriteria?: ClientSortingCriteria
    /**
     * The list of filtering criteria
     */
    filterCriteria?: ClientFilterCriteria[]
}

export const ClientSearchCriteria = {
    validate: require('./schemas/client-search-criteria.schema.js') as ValidateFunction<ClientSearchCriteria>,
    get schema() {
        return ClientSearchCriteria.validate.schema
    },
    is: (o: unknown): o is ClientSearchCriteria => ClientSearchCriteria.validate(o) === true,
    assert: (o: unknown) => {
        if (!ClientSearchCriteria.validate(o)) {
            throw new AjvValidator.ValidationError(ClientSearchCriteria.validate.errors ?? [])
        }
    },
} as const

export type SearchResponse = Client[]

export const SearchResponse = {
    validate: require('./schemas/search-response.schema.js') as ValidateFunction<SearchResponse>,
    get schema() {
        return SearchResponse.validate.schema
    },
    is: (o: unknown): o is SearchResponse => SearchResponse.validate(o) === true,
} as const

export type GetCreditArrangementsByClientIdOrKeyResponse = CreditArrangement[]

export const GetCreditArrangementsByClientIdOrKeyResponse = {
    validate:
        require('./schemas/get-credit-arrangements-by-client-id-or-key-response.schema.js') as ValidateFunction<GetCreditArrangementsByClientIdOrKeyResponse>,
    get schema() {
        return GetCreditArrangementsByClientIdOrKeyResponse.validate.schema
    },
    is: (o: unknown): o is GetCreditArrangementsByClientIdOrKeyResponse =>
        GetCreditArrangementsByClientIdOrKeyResponse.validate(o) === true,
} as const

/**
 * Describes the role of a client/group in the system
 */
export interface ClientRole {
    /**
     * The type of the client for which this role was created
     */
    clientType?: 'CLIENT' | 'GROUP'
    /**
     * Indicates whether identification documents must be provided for the client to be created
     */
    requireID?: boolean
    /**
     * Indicates whether the clients under this type can be used as guarantors
     */
    canGuarantee?: boolean
    /**
     * Indicates whether the Mambu default address section will be available
     */
    useDefaultAddress?: boolean
    /**
     * The name of the client role
     */
    name?: string
    /**
     * Indicates whether new accounts for this client type can be created
     */
    canOpenAccounts?: boolean
    /**
     * Text description for this client role
     */
    description?: string
    /**
     * The encoded key of the client, auto generated, unique
     */
    encodedKey?: string
    /**
     * The ID of the client role, can be generated and customized, unique
     */
    id?: string
    /**
     * The creation date of the client role
     */
    creationDate?: string
    /**
     * Indicates the pattern used in generating the client id
     */
    idPattern?: string
}

export const ClientRole = {
    validate: require('./schemas/client-role.schema.js') as ValidateFunction<ClientRole>,
    get schema() {
        return ClientRole.validate.schema
    },
    is: (o: unknown): o is ClientRole => ClientRole.validate(o) === true,
} as const

/**
 * Address Data Transfer Object
 */
export interface Address {
    /**
     * The country
     */
    country?: string
    /**
     * Address parent key, the object owning this address, client, centre, branch
     */
    parentKey?: string
    /**
     * The city for this address
     */
    city?: string
    /**
     * The GPS latitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -90 to +90
     */
    latitude?: number
    /**
     * The post code
     */
    postcode?: string
    /**
     * Index of this address in the list of addresses
     */
    indexInList?: number
    /**
     * Address encoded key, unique, generated
     */
    encodedKey?: string
    /**
     * The region that is part of the address
     */
    region?: string
    /**
     * The second line for the address, in case the first one doesn't fit the information, this is completely optional
     */
    line2?: string
    /**
     * The first line of the address
     */
    line1?: string
    /**
     * The GPS longitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -180 to +180
     */
    longitude?: number
}

/**
 * Portal settings for an individual client
 */
export interface PortalSettings {
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string
    /**
     * State of the client's portal preferences
     */
    portalState?: 'ENABLED' | 'DISABLED'
    /**
     * The last date the client logged in to the portal
     */
    lastLoggedInDate?: string
}

/**
 * An Id document represents a document that can be used to identify a person like a passport, a drivers license an id card etc.
 */
export interface IdentificationDocument {
    /**
     * Encoded key of the template used for this document
     */
    identificationDocumentTemplateKey?: string
    /**
     * Authority that issued the document, eg. Police
     */
    issuingAuthority?: string
    /**
     * A list containing information about the attached files for this document
     */
    attachments?: Document[]
    /**
     * The encoded key of the client that owns this document
     */
    clientKey?: string
    /**
     * The type of the document, Passport, Id card Drivers license, etc.
     */
    documentType: string
    /**
     * This document's index in the list of documents
     */
    indexInList?: number
    /**
     * Date when the validity of the document ends
     */
    validUntil?: string
    /**
     * The encoded key of the document, generated, unique
     */
    encodedKey?: string
    /**
     * The id of the document
     */
    documentId: string
}

/**
 * Holds information regarding the documents uploaded as attachments
 */
export interface Document {
    /**
     * Determines the owner type of the document
     */
    ownerType?:
        | 'CLIENT'
        | 'GROUP'
        | 'LOAN_PRODUCT'
        | 'SAVINGS_PRODUCT'
        | 'CENTRE'
        | 'BRANCH'
        | 'USER'
        | 'LOAN_ACCOUNT'
        | 'DEPOSIT_ACCOUNT'
        | 'ID_DOCUMENT'
        | 'LINE_OF_CREDIT'
        | 'GL_JOURNAL_ENTRY'
    /**
     * The original file name of the document
     */
    fileName?: string
    /**
     * Detailed notes about the document
     */
    notes?: string
    /**
     * The last modified date of the document, stored as UTC
     */
    lastModifiedDate?: string
    /**
     * The creation date of the document, stored as UTC
     */
    creationDate?: string
    /**
     * The extension of the document
     */
    type: string
    /**
     * Represents the holder of this document. If null, means nobody is the owner of this document
     */
    ownerKey?: string
    /**
     * The file size of the document
     */
    fileSize?: number
    /**
     * The name of the document
     */
    name: string
    /**
     * The document encodedKey
     */
    encodedKey?: string
    /**
     * Location where the document can be found, eg /myfiles/mypicture.jpeg
     */
    location?: string
    /**
     * The document id
     */
    id: number
}

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}

/**
 * A single change that needs to be made to a resource
 */
export interface PatchOperation {
    /**
     * The change to perform
     */
    op: 'ADD' | 'REPLACE' | 'REMOVE' | 'MOVE'
    /**
     * The field to perform the operation on
     */
    path: string
    /**
     * The field from where a value should be moved, when using move
     */
    from?: string
    /**
     * The value of the field, can be null
     */
    value?: unknown
}

/**
 * The sorting criteria used for Clients
 */
export interface ClientSortingCriteria {
    /**
     * Contains the field that can be used as sorting selection. Can be native (one from the provided list) or otherwise can specify a custom field using the format [customFieldSetId].[customFieldId].
     */
    field:
        | 'encodedKey'
        | 'id'
        | 'fullName'
        | 'firstName'
        | 'middleName'
        | 'lastName'
        | 'creationDate'
        | 'lastModifiedDate'
        | 'depositsBalance'
        | 'loansBalance'
        | 'pendingLoanAmount'
        | 'approvedLoanAmount'
        | 'totalBalance'
        | 'totalDue'
        | 'homePhoneNumber'
        | 'mobilePhoneNumber'
        | 'mobilePhoneNumber2'
        | 'emailAddress'
        | 'birthdate'
        | 'loanCycle'
        | 'groupLoanCycle'
        | 'portalState'
    /**
     * The sorting order: ASC or DESC. The default order is DESC.
     */
    order?: 'ASC' | 'DESC'
}

/**
 * The unit that composes the list used for Clients searching
 */
export interface ClientFilterCriteria {
    /**
     * Contains the actual searching fields that can be native (one from the provided list) or otherwise can specify a custom field using the format [customFieldSetId].[customFieldId].
     */
    field:
        | 'encodedKey'
        | 'creditOfficerKey'
        | 'clientRoleKey'
        | 'branchKey'
        | 'centreKey'
        | 'groupKey'
        | 'fullName'
        | 'firstName'
        | 'middleName'
        | 'lastName'
        | 'creationDate'
        | 'lastModifiedDate'
        | 'id'
        | 'depositsBalance'
        | 'loansBalance'
        | 'pendingLoanAmount'
        | 'approvedLoanAmount'
        | 'totalBalance'
        | 'totalDue'
        | 'homePhoneNumber'
        | 'mobilePhoneNumber'
        | 'mobilePhoneNumber2'
        | 'emailAddress'
        | 'clientAddress'
        | 'birthdate'
        | 'gender'
        | 'loanCycle'
        | 'groupLoanCycle'
        | 'clientState'
        | 'portalState'
        | 'preferredLanguage'
        | 'groupId'
    /**
     * The value to match the searching criteria
     */
    value?: string
    /**
     * | **Operator**                | **Affected values**  | **Available for**                                                    |
     * |---------------               |----------------------|----------------------------------------------------------------------|
     * | EQUALS                       | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY        |
     * | EQUALS_CASE_SENSITIVE        | ONE_VALUE            | BIG_DECIMAL,BOOLEAN,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY 		  |
     * | MORE_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |
     * | LESS_THAN                    | ONE_VALUE            | BIG_DECIMAL,NUMBER,MONEY                                             |
     * | BETWEEN                      | TWO_VALUES           | BIG_DECIMAL,NUMBER,MONEY,DATE,DATE_TIME                              |
     * | ON                           | ONE_VALUE            | DATE,DATE_TIME                                                       |
     * | AFTER                        | ONE_VALUE            | DATE,DATE_TIME                                                       |
     * | BEFORE                       | ONE_VALUE            | DATE,DATE_TIME                                                       |
     * | BEFORE_INCLUSIVE             | ONE_VALUE            | DATE,DATE_TIME                                                       |
     * | STARTS_WITH                  | ONE_VALUE            | STRING                                                               |
     * | STARTS_WITH_CASE_SENSITIVE   | ONE_VALUE            | STRING                                                               |
     * | IN                           | LIST                 | ENUM,KEY                                                             |
     * | TODAY                        | NO_VALUE             | DATE,DATE_TIME                                                       |
     * | THIS_WEEK                    | NO_VALUE             | DATE,DATE_TIME                                                       |
     * | THIS_MONTH                   | NO_VALUE             | DATE,DATE_TIME                                                       |
     * | THIS_YEAR                    | NO_VALUE             | DATE,DATE_TIME                                                       |
     * | LAST_DAYS                    | ONE_VALUE            | NUMBER                                                               |
     * | EMPTY                        | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |
     * | NOT_EMPTY                    | NO_VALUE             | BIG_DECIMAL,LONG,MONEY,NUMBER,PERCENT,STRING,ENUM,KEY,DATE,DATE_TIME |
     */
    operator:
        | 'EQUALS'
        | 'EQUALS_CASE_SENSITIVE'
        | 'DIFFERENT_THAN'
        | 'MORE_THAN'
        | 'LESS_THAN'
        | 'BETWEEN'
        | 'ON'
        | 'AFTER'
        | 'AFTER_INCLUSIVE'
        | 'BEFORE'
        | 'BEFORE_INCLUSIVE'
        | 'STARTS_WITH'
        | 'STARTS_WITH_CASE_SENSITIVE'
        | 'IN'
        | 'TODAY'
        | 'THIS_WEEK'
        | 'THIS_MONTH'
        | 'THIS_YEAR'
        | 'LAST_DAYS'
        | 'EMPTY'
        | 'NOT_EMPTY'
    /**
     * The second value to match the searching criteria, when using BETWEEN, together with value
     */
    secondValue?: string
    /**
     * List of values when operator is IN.
     */
    values?: string[]
}

/**
 * A maximum amount a client (individual, group or company) can take in loans and overdrafts.
 */
export interface CreditArrangement {
    /**
     * The available amount of the credit arrangement
     */
    availableCreditAmount?: number
    /**
     * The maximum credit amount the client can be exposed to
     */
    amount: number
    /**
     * The notes/description of credit arrangement
     */
    notes?: string
    /**
     * The last date when credit arrangement was modified
     */
    lastModifiedDate?: string
    /**
     * The encodedKey of the client or group (a.k.a holder)
     */
    holderKey?: string
    /**
     * The consumed amount of the credit arrangement (calculated as the difference between the amount and available amount
     */
    consumedCreditAmount?: number
    /**
     * The date when credit arrangement was created
     */
    creationDate?: string
    /**
     * The date when credit arrangement was approved
     */
    approvedDate?: string
    /**
     * The substate of credit arrangement can be Withdrawn or Rejected when state is Closed
     */
    subState?: 'PENDING_APPROVAL' | 'APPROVED' | 'ACTIVE' | 'CLOSED' | 'WITHDRAWN' | 'REJECTED'
    /**
     * The date when credit arrangement was closed
     */
    closedDate?: string
    /**
     * The type of exposure limit calculation method used
     */
    exposureLimitType?: 'APPROVED_AMOUNT' | 'OUTSTANDING_AMOUNT'
    /**
     * The encoded key of credit arrangement, auto generated, unique
     */
    encodedKey?: string
    /**
     * The date when credit arrangement expires
     */
    expireDate: string
    currency?: Currency
    /**
     * The id of credit arrangement, can be generated and customized, unique
     */
    id?: string
    /**
     * The state of credit arrangement can be Pending Approval, Approved, Active or Closed
     */
    state?: 'PENDING_APPROVAL' | 'APPROVED' | 'ACTIVE' | 'CLOSED' | 'WITHDRAWN' | 'REJECTED'
    /**
     * The type of the credit arrangement holder (client or group)
     */
    holderType: 'CLIENT' | 'GROUP'
    /**
     * The start date from which the credit arrangement becomes active
     */
    startDate: string
}

/**
 * Represents a currency eg. USD, EUR.
 */
export interface Currency {
    /**
     * Currency code for NON_FIAT currency.
     */
    currencyCode?: string
    /**
     * Fiat(ISO-4217) currency code or NON_FIAT for non fiat currencies.
     */
    code?:
        | 'AED'
        | 'AFN'
        | 'ALL'
        | 'AMD'
        | 'ANG'
        | 'AOA'
        | 'ARS'
        | 'AUD'
        | 'AWG'
        | 'AZN'
        | 'BAM'
        | 'BBD'
        | 'BDT'
        | 'BGN'
        | 'BHD'
        | 'BIF'
        | 'BMD'
        | 'BND'
        | 'BOB'
        | 'BOV'
        | 'BRL'
        | 'BSD'
        | 'BTC'
        | 'BTN'
        | 'BWP'
        | 'BYR'
        | 'BYN'
        | 'BZD'
        | 'CAD'
        | 'CDF'
        | 'CHE'
        | 'CHF'
        | 'CHW'
        | 'CLF'
        | 'CLP'
        | 'CNY'
        | 'COP'
        | 'COU'
        | 'CRC'
        | 'CUC'
        | 'CUP'
        | 'CVE'
        | 'CZK'
        | 'DJF'
        | 'DKK'
        | 'DOP'
        | 'DZD'
        | 'EGP'
        | 'ERN'
        | 'ETB'
        | 'EUR'
        | 'FJD'
        | 'FKP'
        | 'GBP'
        | 'GEL'
        | 'GHS'
        | 'GIP'
        | 'GMD'
        | 'GNF'
        | 'GTQ'
        | 'GYD'
        | 'HKD'
        | 'HNL'
        | 'HRK'
        | 'HTG'
        | 'HUF'
        | 'IDR'
        | 'ILS'
        | 'INR'
        | 'IQD'
        | 'IRR'
        | 'ISK'
        | 'JMD'
        | 'JOD'
        | 'JPY'
        | 'KES'
        | 'KGS'
        | 'KHR'
        | 'KMF'
        | 'KPW'
        | 'KRW'
        | 'KWD'
        | 'KYD'
        | 'KZT'
        | 'LAK'
        | 'LBP'
        | 'LKR'
        | 'LRD'
        | 'LSL'
        | 'LTL'
        | 'LVL'
        | 'LYD'
        | 'MAD'
        | 'MDL'
        | 'MGA'
        | 'MKD'
        | 'MMK'
        | 'MNT'
        | 'MOP'
        | 'MRO'
        | 'MRU'
        | 'MUR'
        | 'MVR'
        | 'MWK'
        | 'MXN'
        | 'MXV'
        | 'MYR'
        | 'MZN'
        | 'NAD'
        | 'NGN'
        | 'NIO'
        | 'NOK'
        | 'NPR'
        | 'NZD'
        | 'OMR'
        | 'PAB'
        | 'PEN'
        | 'PGK'
        | 'PHP'
        | 'PKR'
        | 'PLN'
        | 'PYG'
        | 'QAR'
        | 'RON'
        | 'RSD'
        | 'RUB'
        | 'RWF'
        | 'SAR'
        | 'SBD'
        | 'SCR'
        | 'SDG'
        | 'SEK'
        | 'SGD'
        | 'SHP'
        | 'SLL'
        | 'SOS'
        | 'SRD'
        | 'STD'
        | 'STN'
        | 'SVC'
        | 'SYP'
        | 'SZL'
        | 'THB'
        | 'TJS'
        | 'TMT'
        | 'TND'
        | 'TOP'
        | 'TRY'
        | 'TTD'
        | 'TWD'
        | 'TZS'
        | 'UAH'
        | 'UGX'
        | 'USD'
        | 'USN'
        | 'UYI'
        | 'UYU'
        | 'UYW'
        | 'UZS'
        | 'VED'
        | 'VEF'
        | 'VES'
        | 'VND'
        | 'VUV'
        | 'WST'
        | 'XAG'
        | 'XAU'
        | 'XAF'
        | 'XBA'
        | 'XBB'
        | 'XBC'
        | 'XBD'
        | 'XCD'
        | 'XDR'
        | 'XOF'
        | 'XPD'
        | 'XPF'
        | 'XPT'
        | 'XSU'
        | 'XTS'
        | 'XUA'
        | 'XXX'
        | 'YER'
        | 'ZAR'
        | 'ZMK'
        | 'ZWL'
        | 'ZMW'
        | 'SSP'
        | 'NON_FIAT'
}
