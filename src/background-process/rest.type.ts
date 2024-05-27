/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import type { DefinedError, ValidateFunction } from 'ajv'

import { validate as BackgroundProcessValidator } from './schemas/background-process.schema.js'
import { validate as ErrorResponseValidator } from './schemas/error-response.schema.js'

/**
 * Represents details of the Background Process
 */
export interface BackgroundProcess {
    /**
     * When this process was created. Stored as Organization Time
     */
    creationDate?: string | undefined
    /**
     * The encoded key of the entity, generated, globally unique
     */
    encodedKey?: string | undefined
    /**
     * When this process was ended. Stored as Organization Time
     */
    endDate?: string | undefined
    /**
     * When this process was started. Stored as Organization Time
     */
    startDate?: string | undefined
    /**
     * The current status of this process
     */
    state?:
        | 'QUEUED'
        | 'IN_PROGRESS'
        | 'COMPLETE'
        | 'NOT_FOUND'
        | 'CANCEL'
        | 'TO_BE_CANCELED'
        | 'TIMED_OUT'
        | 'ERROR'
        | 'TRANSIENT_ERROR'
        | 'OVERRIDDEN'
        | 'RECOVERABLE_ERROR'
        | undefined
    /**
     * The type of the background process
     */
    type?: 'CRON_JOBS' | 'MANUAL_CRON_JOBS_TRIGGER' | undefined
}

export const BackgroundProcess = {
    validate: BackgroundProcessValidator as ValidateFunction<BackgroundProcess>,
    get schema() {
        return BackgroundProcess.validate.schema
    },
    get errors() {
        return BackgroundProcess.validate.errors ?? undefined
    },
    is: (o: unknown): o is BackgroundProcess => BackgroundProcess.validate(o) === true,
    parse: (o: unknown): { right: BackgroundProcess } | { left: DefinedError[] } => {
        if (BackgroundProcess.is(o)) {
            return { right: o }
        }
        return { left: (BackgroundProcess.errors ?? []) as DefinedError[] }
    },
} as const

export interface ErrorResponse {
    errors?: RestError[] | undefined
}

export const ErrorResponse = {
    validate: ErrorResponseValidator as ValidateFunction<ErrorResponse>,
    get schema() {
        return ErrorResponse.validate.schema
    },
    get errors() {
        return ErrorResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is ErrorResponse => ErrorResponse.validate(o) === true,
    parse: (o: unknown): { right: ErrorResponse } | { left: DefinedError[] } => {
        if (ErrorResponse.is(o)) {
            return { right: o }
        }
        return { left: (ErrorResponse.errors ?? []) as DefinedError[] }
    },
} as const

export interface RestError {
    errorCode?: number | undefined
    errorReason?: string | undefined
    errorSource?: string | undefined
}
