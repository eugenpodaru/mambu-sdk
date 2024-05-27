/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import type { ValidateFunction } from 'ajv'
import { ValidationError } from 'ajv'

/**
 * Adjustable interest rates settings for loan account
 */
export interface AccountInterestRateSettings {
    /**
     * The encoded key of the interest rate settings, auto generated, unique
     */
    encodedKey?: string
    /**
     * Index rate source key.
     */
    indexSourceKey?: string
    /**
     * Interest rate value.
     */
    interestRate?: number
    /**
     * Maximum value allowed for index based interest rate. Valid only for index interest rate.
     */
    interestRateCeilingValue?: number
    /**
     * Minimum value allowed for index based interest rate. Valid only for index interest rate.
     */
    interestRateFloorValue?: number
    /**
     * Interest rate review frequency unit count. Valid only for index interest rate.
     */
    interestRateReviewCount?: number
    /**
     * Interest rate review frequency measurement unit. Valid only for index interest rate.
     */
    interestRateReviewUnit?: 'DAYS' | 'WEEKS' | 'MONTHS'
    /**
     * Interest calculation method: fixed or indexed(interest spread + active organization index interest rate)
     */
    interestRateSource: 'FIXED_INTEREST_RATE' | 'INDEX_INTEREST_RATE'
    /**
     * Interest spread value.
     */
    interestSpread?: number
    /**
     * Date since an interest rate is valid
     */
    validFrom: string
}

/**
 * Represents a simple installment amount structure.
 */
export interface Amount {
    /**
     * The due amount.
     */
    due?: number
    /**
     * The expected amount, which is sum of paid and due amounts.
     */
    expected?: number
    /**
     * The paid amount.
     */
    paid?: number
}

/**
 * Represents a simple installment amount structure.
 */
export interface AmountWithReduced {
    /**
     * The due amount.
     */
    due?: number
    /**
     * The expected amount, which is sum of paid and due amounts.
     */
    expected?: number
    /**
     * The paid amount.
     */
    paid?: number
    /**
     * The reduced amount.
     */
    reduced?: number
}

/**
 * Represents a currency eg. USD, EUR.
 */
export interface Currency {
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
    /**
     * Currency code for NON_FIAT currency.
     */
    currencyCode?: string
}

/**
 * The custom predefined fees, they may be used as the expected predefined fees that will be applied on the disbursement.
 */
export interface CustomPredefinedFee {
    /**
     * The amount of the custom fee.
     */
    amount?: number
    /**
     * The encoded key of the custom predefined fee, auto generated, unique.
     */
    encodedKey?: string
    /**
     * The percentage of the custom fee.
     */
    percentage?: number
    /**
     * The encoded key of the predefined fee
     */
    predefinedFeeEncodedKey?: string
}

/**
 * The the disbursement details it holds the information related to the disbursement details as disbursement date, first repayment date, disbursement fees.
 */
export interface DisbursementDetailsForSchedulePreview {
    /**
     * The date of the expected disbursement.Stored as Organization Time.
     */
    expectedDisbursementDate?: string
    /**
     * List of fees that should be applied at the disbursement time.
     */
    fees?: CustomPredefinedFee[]
    /**
     * The date of the expected first repayment. Stored as Organization Time.
     */
    firstRepaymentDate?: string
}

export type EditScheduleRequest = Installment[]

export const EditScheduleRequest = {
    validate: (await import('./schemas/edit-schedule-request.schema.js')).validate as ValidateFunction<EditScheduleRequest>,
    get schema() {
        return EditScheduleRequest.validate.schema
    },
    get errors() {
        return EditScheduleRequest.validate.errors ?? undefined
    },
    is: (o: unknown): o is EditScheduleRequest => EditScheduleRequest.validate(o) === true,
    assert: (o: unknown) => {
        if (!EditScheduleRequest.validate(o)) {
            throw new ValidationError(EditScheduleRequest.errors ?? [])
        }
    },
} as const

export interface ErrorResponse {
    errors?: RestError[]
}

export const ErrorResponse = {
    validate: (await import('./schemas/error-response.schema.js')).validate as ValidateFunction<ErrorResponse>,
    get schema() {
        return ErrorResponse.validate.schema
    },
    get errors() {
        return ErrorResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is ErrorResponse => ErrorResponse.validate(o) === true,
    assert: (o: unknown) => {
        if (!ErrorResponse.validate(o)) {
            throw new ValidationError(ErrorResponse.errors ?? [])
        }
    },
} as const

/**
 * Represents a fee amount.
 */
export interface FeeAmount {
    /**
     * The due amount.
     */
    due?: number
    /**
     * The expected amount, which is sum of paid and due amounts.
     */
    expected?: number
    /**
     * The expected amount, which is the sum of unapplied fee and planned fee due amounts.
     */
    expectedUnapplied?: number
    /**
     * The paid amount.
     */
    paid?: number
}

/**
 * Represents a single installment details structure.
 */
export interface Installment {
    /**
     * The installment due date.
     */
    dueDate?: string
    /**
     * The encoded key of the installment, which is auto generated, and unique.
     */
    encodedKey?: string
    /**
     * The expected closing balance is the remaining amount per installment only applicable for interest only equal installment products.
     */
    expectedClosingBalance?: number
    fee?: InstallmentFee
    /**
     * The breakdown of the fee amounts that have been applied to the loan account.
     */
    feeDetails?: InstallmentFeeDetails[]
    interest?: InstallmentAllocationElementTaxableAmount
    /**
     * The interest accrued calculated on previous repayment closing balance only applicable interest only equal installment products.
     */
    interestAccrued?: number
    /**
     * `TRUE` if a payment holiday is offered for the installment, `FALSE` otherwise.
     */
    isPaymentHoliday?: boolean
    /**
     * The installment last paid date.
     */
    lastPaidDate?: string
    /**
     * The order number of an installment among all the installments generated for a loan. Loan installments are put in ascending order by due date. The order number only applies to the content of a particular JSON response therefore it is not unique.
     */
    number?: string
    /**
     * The parent account key of the installment.
     */
    parentAccountKey?: string
    penalty?: InstallmentAllocationElementTaxableAmount
    principal?: InstallmentAllocationElementAmount
    /**
     * The installment repaid date.
     */
    repaidDate?: string
    /**
     * The installment state.
     */
    state?: 'PENDING' | 'LATE' | 'PAID' | 'PARTIALLY_PAID' | 'GRACE'
}

/**
 * Represents an installment allocation element amount structure.
 */
export interface InstallmentAllocationElementAmount {
    amount?: Amount
}

/**
 * Represents an installment allocation element taxable amount structure.
 */
export interface InstallmentAllocationElementTaxableAmount {
    amount?: Amount
    tax?: Amount
}

/**
 * Represents an installment fee structure.
 */
export interface InstallmentFee {
    amount?: FeeAmount
    tax?: Amount
}

/**
 * Represents fee details for an installment.
 */
export interface InstallmentFeeDetails {
    amount?: AmountWithReduced
    /**
     * The encoded key of the predefined fee, auto generated, unique
     */
    encodedKey?: string
    /**
     * The id of the fee, provided by the client
     */
    id?: string
    /**
     * The name of the fee
     */
    name?: string
    tax?: AmountWithReduced
}

/**
 * The interest settings, holds all the properties regarding interests for the loan account.
 */
export interface InterestSettingsForSchedulePreview {
    /**
     * The interest settings details for schedule preview.
     */
    accountInterestRateSettings?: AccountInterestRateSettings[]
    /**
     * The interest rate. Represents the interest rate for the loan account. The interest on loans is accrued on a daily basis, which allows charging the clients only for the days they actually used the loan amount.
     */
    interestRate?: number
    /**
     * Interest to be added to active organization index interest rate in order to find out actual interest rate
     */
    interestSpread?: number
}

/**
 * Payload structure to preview the schedules of a loan account when processing PMT transactionally.
 */
export interface LoanAccountPreviewProcessPMTTransactionally {
    /**
     * The error code of the request.
     */
    error?: string
    /**
     * Additional information about the request.
     */
    info?: string
    result?: LoanAccountSchedulesPreviewProcessPMTTransactionally
    /**
     * The status of the request.
     */
    status?: string
}

export const LoanAccountPreviewProcessPMTTransactionally = {
    validate: (await import('./schemas/loan-account-preview-process-pmt-transactionally.schema.js'))
        .validate as ValidateFunction<LoanAccountPreviewProcessPMTTransactionally>,
    get schema() {
        return LoanAccountPreviewProcessPMTTransactionally.validate.schema
    },
    get errors() {
        return LoanAccountPreviewProcessPMTTransactionally.validate.errors ?? undefined
    },
    is: (o: unknown): o is LoanAccountPreviewProcessPMTTransactionally =>
        LoanAccountPreviewProcessPMTTransactionally.validate(o) === true,
} as const

/**
 * Represents a single loan account schedule structure.
 */
export interface LoanAccountSchedule {
    currency?: Currency
    /**
     * The loan account schedule installments list.
     */
    installments?: Installment[]
}

export const LoanAccountSchedule = {
    validate: (await import('./schemas/loan-account-schedule.schema.js')).validate as ValidateFunction<LoanAccountSchedule>,
    get schema() {
        return LoanAccountSchedule.validate.schema
    },
    get errors() {
        return LoanAccountSchedule.validate.errors ?? undefined
    },
    is: (o: unknown): o is LoanAccountSchedule => LoanAccountSchedule.validate(o) === true,
    assert: (o: unknown) => {
        if (!LoanAccountSchedule.validate(o)) {
            throw new ValidationError(LoanAccountSchedule.errors ?? [])
        }
    },
} as const

/**
 * Payload structure to preview the loan account schedule differences when processing PMT transactionally.
 */
export interface LoanAccountSchedulesPreviewProcessPMTTransactionally {
    /**
     * Whether there differences on schedule or not.
     */
    differences?: boolean
    /**
     * The loan account existing schedule installments list.
     */
    existingSchedule?: Installment[]
    /**
     * The loan account new schedule installments list.
     */
    schedule?: Installment[]
}

/**
 * In some cases organizations may approve loans but not disburse the full amount initially. They would like to spread the disbursement (and risk) over time. Likewise for the client, they may not need the full loan amount up front. They may want to have a loan to buy some equipment for their business but will make one purchase today and another purchase in a few months.  In these cases, they don't need the full amount and wouldn't want to pay interest on cash they don't need yet. A solution for this matter is the usage of disbursement in tranches. This class holds the information required for one of this tranche.
 */
export interface LoanTranche {
    /**
     * The amount this tranche has available for disburse
     */
    amount: number
    disbursementDetails?: TrancheDisbursementDetails
    /**
     * The encoded key of the transaction details , auto generated, unique.
     */
    encodedKey?: string
    /**
     * Fees that are associated with this tranche
     */
    fees?: CustomPredefinedFee[]
    /**
     * Index indicating the tranche number
     */
    trancheNumber?: number
}

/**
 * For fixed term loans there is the possibility to define a payment plan. A payment plan consists of multiple periodic payments. This class holds information about a periodic payment for schedule preview.
 */
export interface PeriodicPaymentForSchedulePreview {
    /**
     * The PMT value used in periodic payment
     */
    amount: number
    /**
     * The installment's position up to which the PMT will be used
     */
    toInstallment: number
}

/**
 * The planned fee details holds the information related to the installment key, predefined fee key and amount
 */
export interface PlannedInstallmentFee {
    /**
     * The amount of the planned fee.
     */
    amount?: number
    /**
     * The date when a planned fee should be applied, overriding installment's due date. It should match the interval of the installment. If it belong to first installment, it should be between disbursement date and installment due date.
     */
    applyOnDate?: string
    /**
     * The encoded key of the planned installment fee, auto generated, unique.
     */
    encodedKey?: string
    /**
     * The encoded key of the installment on which the predefined fee is planned.
     */
    installmentKey?: string
    /**
     * The number of the installment on which the predefined fee is planned. It is used only in the case when fees are created at the same time with the loan account creation or during preview schedule, before account creation, otherwise this should be empty and installmentKey will be used to identify an installment.
     */
    installmentNumber?: number
    /**
     * The encoded key of the predefined fee which is planned.
     */
    predefinedFeeKey: string
}

/**
 * Payload structure to preview loan account schedule.
 */
export interface PreviewLoanAccountSchedule {
    disbursementDetails?: DisbursementDetailsForSchedulePreview
    /**
     * The value of the interest booked by the organization from the accounts funded by investors. Null if the funds are not enable
     */
    interestCommission?: number
    interestSettings?: InterestSettingsForSchedulePreview
    /**
     * The loan amount
     */
    loanAmount: number
    /**
     * A list with planned manual fees to be applied on the installments for schedule preview.
     */
    plannedInstallmentFees?: PlannedInstallmentFee[]
    /**
     * The key to the type of product that this account is based on.
     */
    productTypeKey: string
    scheduleSettings?: ScheduleSettingsForSchedulePreview
    /**
     * The top up amount in case of a refinanced account
     */
    topUpAmount?: number
    /**
     * List of tranches to be considered for schedule preview.
     */
    tranches?: LoanTranche[]
}

export const PreviewLoanAccountSchedule = {
    validate: (await import('./schemas/preview-loan-account-schedule.schema.js'))
        .validate as ValidateFunction<PreviewLoanAccountSchedule>,
    get schema() {
        return PreviewLoanAccountSchedule.validate.schema
    },
    get errors() {
        return PreviewLoanAccountSchedule.validate.errors ?? undefined
    },
    is: (o: unknown): o is PreviewLoanAccountSchedule => PreviewLoanAccountSchedule.validate(o) === true,
    assert: (o: unknown) => {
        if (!PreviewLoanAccountSchedule.validate(o)) {
            throw new ValidationError(PreviewLoanAccountSchedule.errors ?? [])
        }
    },
} as const

export type PreviewTranchesOnScheduleRequest = LoanTranche[]

export const PreviewTranchesOnScheduleRequest = {
    validate: (await import('./schemas/preview-tranches-on-schedule-request.schema.js'))
        .validate as ValidateFunction<PreviewTranchesOnScheduleRequest>,
    get schema() {
        return PreviewTranchesOnScheduleRequest.validate.schema
    },
    get errors() {
        return PreviewTranchesOnScheduleRequest.validate.errors ?? undefined
    },
    is: (o: unknown): o is PreviewTranchesOnScheduleRequest => PreviewTranchesOnScheduleRequest.validate(o) === true,
    assert: (o: unknown) => {
        if (!PreviewTranchesOnScheduleRequest.validate(o)) {
            throw new ValidationError(PreviewTranchesOnScheduleRequest.errors ?? [])
        }
    },
} as const

export interface RestError {
    errorCode?: number
    errorReason?: string
    errorSource?: string
}

/**
 * The schedule settings, holds all schedule properties needed for schedule preview request.
 */
export interface ScheduleSettingsForSchedulePreview {
    /**
     * Specifies the days of the month when the repayment due dates should be. Only available if the Repayment Methodology is FIXED_DAYS_OF_MONTH.
     */
    fixedDaysOfMonth?: number[]
    /**
     * The grace period. Represents the grace period for loan repayment - in number of installments.
     */
    gracePeriod?: number
    /**
     * A list of periodic payments for the current loan account.
     */
    paymentPlan?: PeriodicPaymentForSchedulePreview[]
    /**
     * The periodic payment amount for the accounts which have balloon payments or Reduce Number of Installments and Optimized Payments
     */
    periodicPayment?: number
    /**
     * The principal repayment interval. Indicates the interval of repayments that the principal has to be paid.
     */
    principalRepaymentInterval?: number
    /**
     * The repayment installments. Represents how many installments are required to pay back the loan.
     */
    repaymentInstallments?: number
    /**
     * The repayment period count. Represents how often the loan is to be repaid: stored based on the type repayment option.
     */
    repaymentPeriodCount?: number
    /**
     * The repayment period unit. Represents the frequency of loan repayment.
     */
    repaymentPeriodUnit?: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS'
}

/**
 * The disbursement details regarding a loan tranche.
 */
export interface TrancheDisbursementDetails {
    /**
     * The key of the disbursement transaction logged when this tranche was disbursed. This field will be null until the tranche disbursement
     */
    disbursementTransactionKey?: string
    /**
     * The date when this tranche is supposed to be disbursed (as Organization Time)
     */
    expectedDisbursementDate?: string
}
