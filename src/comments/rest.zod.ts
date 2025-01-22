/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */

import { z } from 'zod'

export const RestError = z.object({
    errorCode: z.number().int().optional(),
    errorReason: z.string().optional(),
    errorSource: z.string().optional(),
})

export const Comment = z
    .object({
        creationDate: z.string().datetime({ offset: true }).describe('The creation date of the comment.').optional(),
        encodedKey: z.string().describe(`The comments's encoded key, which is auto-generated and unique.`).optional(),
        lastModifiedDate: z
            .string()
            .datetime({ offset: true })
            .describe('The last date when this comment was modified.')
            .optional(),
        ownerKey: z.string().describe('The encoded key of the entity that owns this comment.').optional(),
        ownerType: z
            .enum([
                'CLIENT',
                'GROUP',
                'LOAN_PRODUCT',
                'SAVINGS_PRODUCT',
                'CENTRE',
                'BRANCH',
                'USER',
                'LOAN_ACCOUNT',
                'DEPOSIT_ACCOUNT',
                'ID_DOCUMENT',
                'LINE_OF_CREDIT',
                'GL_JOURNAL_ENTRY',
            ])
            .describe('The type of the entity that owns this comment.')
            .optional(),
        text: z.string().describe('The message in the comment.').optional(),
        userKey: z.string().describe(`The user's key.`).optional(),
    })
    .describe('Represents information about the comment data transfer object.')

export type Comment = z.infer<typeof Comment>

export const ErrorResponse = z.object({
    errors: RestError.array().optional(),
})

export type ErrorResponse = z.infer<typeof ErrorResponse>

export const GetCommentsResponse = Comment.array()

export type GetCommentsResponse = z.infer<typeof GetCommentsResponse>
