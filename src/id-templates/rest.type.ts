/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import type { ValidateFunction } from 'ajv'
import { ValidationError } from 'ajv'

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

export type GetAllResponse = IdentificationDocumentTemplate[]

export const GetAllResponse = {
    validate: (await import('./schemas/get-all-response.schema.js')).validate as ValidateFunction<GetAllResponse>,
    get schema() {
        return GetAllResponse.validate.schema
    },
    get errors() {
        return GetAllResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is GetAllResponse => GetAllResponse.validate(o) === true,
} as const

/**
 * Represents a template for identification documents.
 */
export interface IdentificationDocumentTemplate {
    /**
     * `TRUE` if a template allows files to be attached, `FALSE` otherwise.
     */
    allowAttachments?: boolean
    /**
     * The ID template constraint to define the ID number length and format. Templates consist of the characters `#`, `@`, and `$`, where `#` specifies a number, `@` a letter, and `$` a number or a letter.
     */
    documentIdTemplate?: string
    /**
     * The type of the document. For example, passport.
     */
    documentType?: string
    /**
     * The encoded key of the ID template. It is auto generated and unique.
     */
    encodedKey?: string
    /**
     * The unique identifier for the template.
     */
    id?: string
    /**
     * The authority that issued the document.
     */
    issuingAuthority?: string
    /**
     * `TRUE` if a template is mandatory for all the individual clients, `FALSE` otherwise.
     */
    mandatory?: boolean
}

export interface RestError {
    errorCode?: number
    errorReason?: string
    errorSource?: string
}
