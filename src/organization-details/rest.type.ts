/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import type { ValidateFunction } from 'ajv'
import { ValidationError } from 'ajv'

/**
 * Response representation of the organization setup details
 */
export interface OrganizationSetup {
    /**
     * The email address of the organization
     */
    emailAddress?: string
    /**
     * The phone number of the organization
     */
    phoneNumber?: string
    address?: Address
    /**
     * The format used to represent the time and date
     */
    dateTimeFormat: string
    /**
     * Symbol used to mark the border between the integral and the fractional parts of a decimal numeral
     */
    decimalSeparator: 'COMMA' | 'POINT'
    /**
     * The last modified date of the organization
     */
    lastModifiedDate?: string
    /**
     * The format used to represent the date
     */
    dateFormat: string
    /**
     * The timezone id, must be the same as the existing one
     */
    timeZoneID?: string
    /**
     * The name of the organization
     */
    institutionName: string
    /**
     * The currency of the organization, must be the same as the existing one
     */
    currency?: string
    /**
     * The creation date of the organization
     */
    creationDate?: string
}

export const OrganizationSetup = {
    validate: (await import('./schemas/organization-setup.schema.js')).validate as ValidateFunction<OrganizationSetup>,
    get schema() {
        return OrganizationSetup.validate.schema
    },
    get errors() {
        return OrganizationSetup.validate.errors ?? undefined
    },
    is: (o: unknown): o is OrganizationSetup => OrganizationSetup.validate(o) === true,
    assert: (o: unknown) => {
        if (!OrganizationSetup.validate(o)) {
            throw new ValidationError(OrganizationSetup.errors ?? [])
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
 * Represents an address.
 */
export interface Address {
    /**
     * The country.
     */
    country?: string
    /**
     * The address parent key indicating the object owning this address. For example: client, centre, or branch.
     */
    parentKey?: string
    /**
     * The city for the address.
     */
    city?: string
    /**
     * The GPS latitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -90 to +90.
     */
    latitude?: number
    /**
     * The post code.
     */
    postcode?: string
    /**
     * The index of this address in the list of addresses.
     */
    indexInList?: number
    /**
     * The address encoded key, which is unique and generated.
     */
    encodedKey?: string
    /**
     * The region for the address.
     */
    region?: string
    /**
     * The second line of the address.
     */
    line2?: string
    /**
     * The first line of the address.
     */
    line1?: string
    /**
     * The GPS longitude of this address in signed degrees format (DDD.dddd) with 6 decimal positions, ranging from -180 to +180.
     */
    longitude?: number
}

export interface RestError {
    errorCode?: number
    errorSource?: string
    errorReason?: string
}
