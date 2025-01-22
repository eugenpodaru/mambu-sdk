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

export const ApiKey = z
    .object({
        apiKey: z
            .string()
            .describe(
                'A six character cleartext prefix of the API key. The prefix is not guaranteed to be unique. You must base any identification process on the API key ID, not the prefix.',
            )
            .optional(),
        expirationTime: z.number().int().nonnegative().describe('The time to live (TTL) for the API key in seconds.').optional(),
        id: z
            .string()
            .describe(
                'The API key ID. You must base any identification process on the the API key ID as it is guaranteed to be unique.',
            )
            .optional(),
    })
    .describe('Represents an API key of an API consumer.')

export type ApiKey = z.infer<typeof ApiKey>

export const ApiKeyRotationResult = z
    .object({
        apiKey: z.string().describe('The new API key created after rotating an existing API key.').optional(),
        id: z
            .string()
            .describe(
                'The API key ID. You must base any identification process on the the API key ID as it is guaranteed to be unique.',
            )
            .optional(),
        secretKey: z.string().describe('The new secret key created after rotating an existing API key.').optional(),
    })
    .describe('Represents the result of an API key rotation.')

export type ApiKeyRotationResult = z.infer<typeof ApiKeyRotationResult>

export const ErrorResponse = z.object({
    errors: RestError.array().optional(),
})

export type ErrorResponse = z.infer<typeof ErrorResponse>
