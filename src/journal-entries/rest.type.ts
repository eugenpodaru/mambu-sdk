/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

export type GetAllResponse = GLJournalEntry[]

export const GetAllResponse = {
    validate: (await import('./schemas/get-all-response.schema.js')).validate10 as unknown as ValidateFunction<GetAllResponse>,
    get schema() {
        return GetAllResponse.validate.schema
    },
    get errors() {
        return GetAllResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is GetAllResponse => GetAllResponse.validate(o) === true,
} as const

export interface ErrorResponse {
    errors?: RestError[]
}

export const ErrorResponse = {
    validate: (await import('./schemas/error-response.schema.js')).validate10 as unknown as ValidateFunction<ErrorResponse>,
    get schema() {
        return ErrorResponse.validate.schema
    },
    get errors() {
        return ErrorResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is ErrorResponse => ErrorResponse.validate(o) === true,
    assert: (o: unknown) => {
        if (!ErrorResponse.validate(o)) {
            throw new AjvValidator.ValidationError(ErrorResponse.errors ?? [])
        }
    },
} as const

/**
 * The representation of a payload for creating GL Journal Entries
 */
export interface PostGLJournalEntriesDTO {
    /**
     * Date/time stamp when the entries were recorded (Booking Date)
     */
    date: string
    /**
     * The id of the assigned branch for the journal entries
     */
    branchId?: string
    /**
     * Optional notes entered by the user when they performed the journal entry log
     */
    notes?: string
    /**
     * The list of GL Accounts to be credited with the corresponding amounts
     */
    credits?: GLAccountAmount[]
    /**
     * The list of GL Accounts to be debited with the corresponding amounts
     */
    debits?: GLAccountAmount[]
    /**
     * An id for the transaction. Not unique. Will be auto generated if not provided.
     */
    transactionId?: string
}

export const PostGLJournalEntriesDTO = {
    validate: (await import('./schemas/post-gl-journal-entries-dto.schema.js'))
        .validate10 as unknown as ValidateFunction<PostGLJournalEntriesDTO>,
    get schema() {
        return PostGLJournalEntriesDTO.validate.schema
    },
    get errors() {
        return PostGLJournalEntriesDTO.validate.errors ?? undefined
    },
    is: (o: unknown): o is PostGLJournalEntriesDTO => PostGLJournalEntriesDTO.validate(o) === true,
    assert: (o: unknown) => {
        if (!PostGLJournalEntriesDTO.validate(o)) {
            throw new AjvValidator.ValidationError(PostGLJournalEntriesDTO.errors ?? [])
        }
    },
} as const

export type CreateResponse = GLJournalEntry[]

export const CreateResponse = {
    validate: (await import('./schemas/create-response.schema.js')).validate10 as unknown as ValidateFunction<CreateResponse>,
    get schema() {
        return CreateResponse.validate.schema
    },
    get errors() {
        return CreateResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is CreateResponse => CreateResponse.validate(o) === true,
} as const

/**
 * Wrapper that holds a list of filtering criteria and a sorting criteria for GL Journal Entries
 */
export interface GLJournalEntrySearchCriteria {
    sortingCriteria?: GLJournalEntrySortingCriteria
    /**
     * The list of filtering criteria
     */
    filterCriteria?: GLJournalEntryFilterCriteria[]
}

export const GLJournalEntrySearchCriteria = {
    validate: (await import('./schemas/gl-journal-entry-search-criteria.schema.js'))
        .validate10 as unknown as ValidateFunction<GLJournalEntrySearchCriteria>,
    get schema() {
        return GLJournalEntrySearchCriteria.validate.schema
    },
    get errors() {
        return GLJournalEntrySearchCriteria.validate.errors ?? undefined
    },
    is: (o: unknown): o is GLJournalEntrySearchCriteria => GLJournalEntrySearchCriteria.validate(o) === true,
    assert: (o: unknown) => {
        if (!GLJournalEntrySearchCriteria.validate(o)) {
            throw new AjvValidator.ValidationError(GLJournalEntrySearchCriteria.errors ?? [])
        }
    },
} as const

export type SearchResponse = GLJournalEntry[]

export const SearchResponse = {
    validate: (await import('./schemas/search-response.schema.js')).validate10 as unknown as ValidateFunction<SearchResponse>,
    get schema() {
        return SearchResponse.validate.schema
    },
    get errors() {
        return SearchResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is SearchResponse => SearchResponse.validate(o) === true,
} as const

/**
 * The response representation of a GLJournalEntry.
 */
export interface GLJournalEntry {
    /**
     * The amount which was debited or credited in organisation currency
     */
    amount?: number
    /**
     * Optional notes entered by the user when they performed the journal entry
     */
    notes?: string
    /**
     * The date this GL Journal Entry was created
     */
    creationDate?: string
    /**
     * The Product associated with this journal action. Maybe null if just a general journal entry
     */
    productKey?: string
    /**
     * The type of GL Journal Entry: debit or credit
     */
    type?: 'DEBIT' | 'CREDIT'
    /**
     * The key of the assigned branch for this GL Journal Entry
     */
    assignedBranchKey?: string
    /**
     * An id for the transaction. Not unique.
     */
    transactionId?: string
    /**
     * The user encode key who performed the transaction
     */
    userKey?: string
    /**
     * The ID of the GL Journal Entry
     */
    entryID?: number
    /**
     * Account associated with this journal action. Maybe null if just a general journal entry
     */
    accountKey?: string
    foreignAmount?: GLJournalEntryForeignAmount
    /**
     * Whether this GL Journal Entry was reversed or not
     */
    reversalEntryKey?: string
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string
    /**
     * Date/time stamp when the GL Journal Entry was recorded
     */
    bookingDate?: string
    glAccount?: GLAccount
    /**
     * Product type (eg: loan or savings) that is referred by the account key. May be null if just a general journal entry
     */
    productType?: 'LOAN' | 'SAVINGS'
}

/**
 * Representation of details of GL Journal Entries posted in foreign currency.
 */
export interface GLJournalEntryForeignAmount {
    accountingRate?: AccountingRate
    /**
     * Amount in foreign currency
     */
    amount?: number
    currency?: Currency
}

/**
 * Represents the conversion rate used in accounting to convert amounts from one currency to organisation currency
 */
export interface AccountingRate {
    /**
     * Value of rate to be used for accounting conversions
     */
    rate?: number
    /**
     * Rate validity end date
     */
    endDate?: string
    /**
     * Foreign currency code
     */
    toCurrencyCode?: string
    /**
     * The encoded key of the accounting rate, auto generated, unique
     */
    encodedKey?: string
    /**
     * Organisation currency code
     */
    fromCurrencyCode?: string
    /**
     * Rate validity start date
     */
    startDate?: string
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

/**
 * The response representation of a GLAccount.
 */
export interface GLAccount {
    /**
     * The data migration event key if this GL Account was created as a part of a data migration event.
     */
    migrationEventKey?: string
    /**
     * Indicates when the last modification occurred. Stored as UTC.
     */
    lastModifiedDate?: string
    /**
     * General ledger code used to identify different account types. Also used for grouping and categorizing accounts. For instance an account code of '3201' is considered a subtype of account of '3200'.
     */
    glCode?: string
    /**
     * Categorization of GL Account by their usage (detail - where transactions are logged, or headers, for reporting and organization purposes).
     */
    usage?: 'DETAIL' | 'HEADER'
    /**
     * Description of the GL Account.
     */
    description?: string
    /**
     * Indicates the creation date for this account. Stored as UTC.
     */
    creationDate?: string
    /**
     * Type of the GL Account
     */
    type?: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'INCOME' | 'EXPENSE'
    /**
     * Indicates whether manual Journal Entries are allowed or not
     */
    allowManualJournalEntries?: boolean
    /**
     * Indicates the balance of the GL Account. This field is populated only for GET /glaccounts endpoint.
     */
    balance?: number
    /**
     * Name of the GL Account
     */
    name?: string
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string
    currency?: Currency
    /**
     * Indicates whether to strip trailing zeros.
     */
    stripTrailingZeros?: boolean
    /**
     * Whether the Account is activated and may be used.
     */
    activated?: boolean
}

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}

/**
 * The unit that represents the GL Account and Amount used in a GL Journal Entry record.
 */
export interface GLAccountAmount {
    /**
     * The amount which was debited or credited
     */
    amount?: number
    /**
     * GL Account Code for the the GL Account that was debited or credited
     */
    glAccount?: string
}

/**
 * The sorting criteria used for GL Journal Entries
 */
export interface GLJournalEntrySortingCriteria {
    /**
     * Contains the field that can be used as sorting selection. Can be native (one from the provided list) or otherwise can specify a custom field using the format [customFieldSetId].[customFieldId].
     */
    field:
        | 'encodedKey'
        | 'entryId'
        | 'bookingDate'
        | 'creationDate'
        | 'transactionId'
        | 'glAccountName'
        | 'glAccountId'
        | 'glAccountType'
        | 'debit'
        | 'credit'
        | 'foreignDebit'
        | 'foreignCredit'
        | 'loanAccountId'
        | 'userName'
        | 'user'
        | 'branchName'
        | 'foreignCurrency'
    /**
     * The sorting order: ASC or DESC. The default order is DESC.
     */
    order?: 'ASC' | 'DESC'
}

/**
 * The unit that composes the list used for GL Journal Entry searching
 */
export interface GLJournalEntryFilterCriteria {
    /**
     * Contains the actual searching fields that can be native (one from the provided list) or otherwise can specify a custom field using the format [customFieldSetId].[customFieldId].
     */
    field:
        | 'productType'
        | 'glAccountKey'
        | 'userKey'
        | 'encodedKey'
        | 'entryId'
        | 'bookingDate'
        | 'creationDate'
        | 'transactionId'
        | 'glAccountId'
        | 'glAccountType'
        | 'source'
        | 'debit'
        | 'credit'
        | 'foreignDebit'
        | 'foreignCredit'
        | 'loanAccountId'
        | 'foreignCurrencyCode'
        | 'assignedBranchKey'
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
