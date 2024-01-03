/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import got from 'got'
import type { CancelableRequest, Got, Options, OptionsInit, Response } from 'got'
import type { ValidateFunction, ErrorObject } from 'ajv'
import type { IncomingHttpHeaders } from 'http'
import {
    AccountBalances,
    AuthorizationHold,
    AuthorizationHoldAmountAdjustmentRequest,
    CardTransactionInput,
    CardTransactionOutput,
    CardTransactionReversal,
    ErrorResponse,
    GetAuthorizationHold,
    GetCardTransaction,
    PatchAuthorizationHoldRequest,
} from './rest.type.js'

/**
 * cards
 */
export class MambuCards {
    public client: Got

    public auth: {
        basic?: [username: string, password: string] | (() => Promise<[username: string, password: string]>)
        apiKey?: string | (() => Promise<string>)
    }

    public availableAuth: Set<string>
    public defaultAuth: string[][] | string[] | undefined

    public constructor({
        prefixUrl,
        options,
        auth = {},
        defaultAuth,
    }: {
        prefixUrl: string | 'http://localhost:8889/api' | 'https://localhost:8889/api'
        options?: Options | OptionsInit
        auth: {
            basic?: [username: string, password: string] | (() => Promise<[username: string, password: string]>)
            apiKey?: string | (() => Promise<string>)
        }
        defaultAuth?: string[][] | string[]
    }) {
        this.client = got.extend(...[{ prefixUrl, throwHttpErrors: false }, options].filter((o): o is Options => o !== undefined))
        this.auth = auth
        this.availableAuth = new Set(Object.keys(auth))
        this.defaultAuth = defaultAuth
    }

    /**
     * Create an authorization hold corresponding to a given card.
     */
    public async createAuthorizationHold({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: AuthorizationHold
        path: { cardReferenceToken: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(AuthorizationHold, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`cards/${path.cardReferenceToken}/authorizationholds`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (_x: unknown): _x is unknown => true },
                201: AuthorizationHold,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Create a financial transaction corresponding to a given card
     */
    public async createCardTransaction({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: CardTransactionInput
        path: { cardReferenceToken: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(CardTransactionInput, body)

        return this.awaitResponse(
            this.buildClient(auth).post(`cards/${path.cardReferenceToken}/financialtransactions`, {
                json: body,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                responseType: 'json',
            }),
            {
                102: { is: (_x: unknown): _x is unknown => true },
                201: CardTransactionOutput,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Decreases the amount of an authorization hold. If the amount is greater or equal to the authorization hold amount, then the authorization hold is reversed.
     */
    public async decreaseAuthorizationHold({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: AuthorizationHoldAmountAdjustmentRequest
        path: { cardReferenceToken: string; authorizationHoldExternalReferenceId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(AuthorizationHoldAmountAdjustmentRequest, body)

        return this.awaitResponse(
            this.buildClient(auth).post(
                `cards/${path.cardReferenceToken}/authorizationholds/${path.authorizationHoldExternalReferenceId}:decrease`,
                {
                    json: body,
                    headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                    responseType: 'json',
                }
            ),
            {
                102: { is: (_x: unknown): _x is unknown => true },
                204: { is: (_x: unknown): _x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Get account balances using card tokens
     */
    public async getAccountBalances({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { cardReferenceToken: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(`cards/${path.cardReferenceToken}/balanceInquiry`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
                responseType: 'json',
            }),
            {
                200: AccountBalances,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Get card authorization hold
     */
    public async getAuthorizationHoldById({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { cardReferenceToken: string; authorizationHoldExternalReferenceId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(
                `cards/${path.cardReferenceToken}/authorizationholds/${path.authorizationHoldExternalReferenceId}`,
                {
                    headers: { Accept: 'application/vnd.mambu.v2+json' },
                    responseType: 'json',
                }
            ),
            {
                200: GetAuthorizationHold,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Get card transaction
     */
    public async getCardTransaction({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { cardReferenceToken: string; cardTransactionExternalReferenceId: string }
        query?: { detailsLevel?: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).get(
                `cards/${path.cardReferenceToken}/financialtransactions/${path.cardTransactionExternalReferenceId}`,
                {
                    searchParams: query ?? {},
                    headers: { Accept: 'application/vnd.mambu.v2+json' },
                    responseType: 'json',
                }
            ),
            {
                200: GetCardTransaction,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Increase authorization hold amount
     */
    public async increaseAuthorizationHold({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: AuthorizationHoldAmountAdjustmentRequest
        path: { cardReferenceToken: string; authorizationHoldExternalReferenceId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(AuthorizationHoldAmountAdjustmentRequest, body)

        return this.awaitResponse(
            this.buildClient(auth).post(
                `cards/${path.cardReferenceToken}/authorizationholds/${path.authorizationHoldExternalReferenceId}:increase`,
                {
                    json: body,
                    headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                    responseType: 'json',
                }
            ),
            {
                102: { is: (_x: unknown): _x is unknown => true },
                204: { is: (_x: unknown): _x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Partially update an authorization hold
     */
    public async patchAuthorizationHold({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: PatchAuthorizationHoldRequest
        path: { cardReferenceToken: string; authorizationHoldExternalReferenceId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(PatchAuthorizationHoldRequest, body)

        return this.awaitResponse(
            this.buildClient(auth).patch(
                `cards/${path.cardReferenceToken}/authorizationholds/${path.authorizationHoldExternalReferenceId}`,
                {
                    json: body,
                    headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                    responseType: 'json',
                }
            ),
            {
                102: { is: (_x: unknown): _x is unknown => true },
                204: { is: (_x: unknown): _x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            }
        )
    }

    /**
     * Reverse a card authorization hold.
     */
    public async reverseAuthorizationHold({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { cardReferenceToken: string; authorizationHoldExternalReferenceId: string }
        auth?: string[][] | string[]
    }) {
        return this.awaitResponse(
            this.buildClient(auth).delete(
                `cards/${path.cardReferenceToken}/authorizationholds/${path.authorizationHoldExternalReferenceId}`,
                {
                    headers: { Accept: 'application/vnd.mambu.v2+json' },
                    responseType: 'json',
                }
            ),
            {
                204: { is: (_x: unknown): _x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    /**
     * Reverse card transaction
     */
    public async reverseCardTransaction({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: CardTransactionReversal
        path: { cardReferenceToken: string; cardTransactionExternalReferenceId: string }
        headers?: { ['Idempotency-Key']?: string }
        auth?: string[][] | string[]
    }) {
        this.validateRequestBody(CardTransactionReversal, body)

        return this.awaitResponse(
            this.buildClient(auth).post(
                `cards/${path.cardReferenceToken}/financialtransactions/${path.cardTransactionExternalReferenceId}:decrease`,
                {
                    json: body,
                    headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
                    responseType: 'json',
                }
            ),
            {
                102: { is: (_x: unknown): _x is unknown => true },
                204: { is: (_x: unknown): _x is unknown => true },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            }
        )
    }

    public validateRequestBody<T>(schema: { is: (o: unknown) => o is T; assert: (o: unknown) => void }, body: T) {
        schema.assert(body)
        return body
    }

    public async awaitResponse<
        T,
        S extends Record<PropertyKey, undefined | { is: (o: unknown) => o is T; validate?: ValidateFunction<T> }>,
    >(response: CancelableRequest<Response<unknown>>, schemas: S) {
        type FilterStartingWith<S extends PropertyKey, T extends string> = S extends number | string
            ? `${S}` extends `${T}${infer _X}`
                ? S
                : never
            : never
        type InferSchemaType<T> = T extends { is: (o: unknown) => o is infer S } ? S : never
        const result = await response
        const validator = schemas[result.statusCode] ?? schemas.default
        if (validator?.is(result.body) === false || result.statusCode < 200 || result.statusCode >= 300) {
            return {
                statusCode: result.statusCode,
                headers: result.headers,
                left: result.body,
                validationErrors: validator?.validate?.errors ?? undefined,
            } as {
                statusCode: number
                headers: IncomingHttpHeaders
                left: InferSchemaType<S[keyof S]>
                validationErrors?: ErrorObject[]
            }
        }
        return { statusCode: result.statusCode, headers: result.headers, right: result.body } as {
            statusCode: number
            headers: IncomingHttpHeaders
            right: InferSchemaType<S[keyof Pick<S, FilterStartingWith<keyof S, '2' | 'default'>>]>
        }
    }

    protected buildBasicClient(client: Got) {
        return client.extend({
            hooks: {
                beforeRequest: [
                    async (options) => {
                        const basic = this.auth.basic
                        if (basic !== undefined) {
                            const [username, password] = typeof basic === 'function' ? await basic() : basic
                            options.username = username
                            options.password = password
                        }
                    },
                ],
            },
        })
    }

    protected buildApiKeyClient(client: Got) {
        return client.extend({
            hooks: {
                beforeRequest: [
                    async (options) => {
                        const apiKey = this.auth.apiKey
                        const key = typeof apiKey === 'function' ? await apiKey() : apiKey
                        options.headers['apiKey'] = key
                    },
                ],
            },
        })
    }

    protected buildClient(auths: string[][] | string[] | undefined = this.defaultAuth, client: Got = this.client): Got {
        const auth = (auths ?? [...this.availableAuth])
            .map((auth) => (Array.isArray(auth) ? auth : [auth]))
            .filter((auth) => auth.every((a) => this.availableAuth.has(a)))
        for (const chosen of auth[0] ?? []) {
            if (chosen === 'basic') {
                client = this.buildBasicClient(client)
            } else if (chosen === 'apiKey') {
                client = this.buildApiKeyClient(client)
            }
        }
        return client
    }
}
