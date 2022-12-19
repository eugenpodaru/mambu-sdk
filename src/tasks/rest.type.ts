/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

/**
 * Represents a human task that can be assigned by a user to another. When a Task is created, it's set to status OPEN
 */
export interface Task {
    /**
     * The last date at which the task was modified
     */
    lastModifiedDate?: string
    /**
     * The key of the user that created this task. The value is not editable and it is populated at task creation with the current user key
     */
    createdByUserKey?: string
    /**
     * The due date of the task, at which the task has to be completed
     */
    dueDate: string
    /**
     * Description of the task
     */
    description?: string
    /**
     * The date at which the task was created
     */
    creationDate?: string
    /**
     * Title of the task
     */
    title?: string
    /**
     * Who is the link of this task. If null, means nobody is linked to this task
     */
    taskLinkKey?: string
    /**
     * Name of the user who created the task
     */
    createdByFullName?: string
    /**
     * The encoded key of the task, auto generated, unique
     */
    encodedKey?: string
    /**
     * The id of the task, uniquely generated for the task
     */
    id?: number
    /**
     * Key of the user this task is assigned to
     */
    assignedUserKey?: string
    /**
     * The type of the owner represented by the task link key
     */
    taskLinkType?:
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
     * The status of this task, a new task is always OPEN
     */
    status?: 'OPEN' | 'COMPLETED'
    /**
     * What template key was used to create the task
     */
    templateKey?: string
}

export const Task = {
    validate: require('./schemas/task.schema.js') as ValidateFunction<Task>,
    get schema() {
        return Task.validate.schema
    },
    get errors() {
        return Task.validate.errors ?? undefined
    },
    is: (o: unknown): o is Task => Task.validate(o) === true,
    assert: (o: unknown) => {
        if (!Task.validate(o)) {
            throw new AjvValidator.ValidationError(Task.errors ?? [])
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

export type PatchRequest = PatchOperation[]

export const PatchRequest = {
    validate: require('./schemas/patch-request.schema.js') as ValidateFunction<PatchRequest>,
    get schema() {
        return PatchRequest.validate.schema
    },
    get errors() {
        return PatchRequest.validate.errors ?? undefined
    },
    is: (o: unknown): o is PatchRequest => PatchRequest.validate(o) === true,
    assert: (o: unknown) => {
        if (!PatchRequest.validate(o)) {
            throw new AjvValidator.ValidationError(PatchRequest.errors ?? [])
        }
    },
} as const

export type GetAllResponse = Task[]

export const GetAllResponse = {
    validate: require('./schemas/get-all-response.schema.js') as ValidateFunction<GetAllResponse>,
    get schema() {
        return GetAllResponse.validate.schema
    },
    get errors() {
        return GetAllResponse.validate.errors ?? undefined
    },
    is: (o: unknown): o is GetAllResponse => GetAllResponse.validate(o) === true,
} as const

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
    value?: {
        [k: string]: unknown | undefined
    }
}
