import ky from 'ky'
import type { KyInstance, Options, ResponsePromise } from 'ky'
import type { SafeParseReturnType, ZodError } from 'zod'

import {
    CommunicationMessage,
    CommunicationMessageAction,
    CommunicationMessageEnqueueAction,
    CommunicationMessagesSearchSortCriteria,
    ErrorResponse,
    Search1Response,
    SearchRequest,
    SearchResponse,
} from './rest.zod.js'

/**
 * communications/messages
 */
export class MambuCommunications {
    public client: KyInstance

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
        client = ky,
    }: {
        prefixUrl: string | 'http://localhost:8889/api' | 'https://localhost:8889/api'
        options?: Options
        auth: {
            basic?: [username: string, password: string] | (() => Promise<[username: string, password: string]>)
            apiKey?: string | (() => Promise<string>)
        }
        defaultAuth?: string[][] | string[]
        client?: KyInstance
    }) {
        this.client = client.extend({ prefixUrl, throwHttpErrors: false, ...options })
        this.auth = auth
        this.availableAuth = new Set(Object.keys(auth))
        this.defaultAuth = defaultAuth
    }

    /**
     * POST /communications/messages:resendAsyncByDate
     *
     * Resend failed communication message(s) asynchronously by date
     */
    public enqueueByDate({
        body,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: CommunicationMessageEnqueueAction
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(CommunicationMessageEnqueueAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('communications/messages:resendAsyncByDate', {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['enqueueByDate']>
    }

    /**
     * POST /communications/messages:resendAsyncByKeys
     *
     * Resend failed communication message(s) asynchronously using keys
     */
    public enqueueByKeys({
        body,
        headers,
        auth = [['apiKey'], ['basic']],
    }: { body: CommunicationMessageAction; headers?: { 'Idempotency-Key'?: string }; auth?: string[][] | string[] }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(CommunicationMessageAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('communications/messages:resendAsyncByKeys', {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['enqueueByKeys']>
    }

    /**
     * GET /communications/messages/{encodedKey}
     *
     * Get communication message
     */
    public getByEncodedKey({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: { path: { encodedKey: string }; query?: { detailsLevel?: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', CommunicationMessage>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        return this.awaitResponse(
            this.buildClient(auth).get(`communications/messages/${path.encodedKey}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: CommunicationMessage,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getByEncodedKey']>
    }

    /**
     * POST /communications/messages:resend
     *
     * Resend failed communication message(s)
     */
    public resend({
        body,
        headers,
        auth = [['apiKey'], ['basic']],
    }: { body: CommunicationMessageAction; headers?: { 'Idempotency-Key'?: string }; auth?: string[][] | string[] }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'202', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(CommunicationMessageAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('communications/messages:resend', {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                202: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['resend']>
    }

    /**
     * POST /communications/messages:search
     *
     * Searching communication messages
     */
    public search({
        body,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        body: SearchRequest
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', SearchResponse>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(SearchRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('communications/messages:search', {
                json: _body.right,
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: SearchResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['search']>
    }

    /**
     * POST /communications/messages:searchSorted
     *
     * Searching sorted communication messages
     */
    public search1({
        body,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        body: CommunicationMessagesSearchSortCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string; detailsLevel?: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', Search1Response>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403'>, unknown, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(CommunicationMessagesSearchSortCriteria, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('communications/messages:searchSorted', {
                json: _body.right,
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: Search1Response,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['search1']>
    }

    /**
     * POST /communications/messages
     *
     * Send communication message
     */
    public send({
        body,
        headers,
        auth = [['apiKey'], ['basic']],
    }: { body: CommunicationMessage; headers?: { 'Idempotency-Key'?: string }; auth?: string[][] | string[] }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', CommunicationMessage>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(CommunicationMessage, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('communications/messages', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: CommunicationMessage,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['send']>
    }

    public validateRequestBody<Body>(
        parser: { safeParse: (o: unknown) => SafeParseReturnType<unknown, Body> },
        body: unknown,
    ): { right: Body } | FailureResponse<undefined, unknown, 'request:body', undefined> {
        const _body = parser.safeParse(body)
        if (!_body.success) {
            return {
                success: false as const,
                statusCode: undefined,
                status: undefined,
                headers: undefined,
                left: body,
                error: _body.error,
                where: 'request:body',
            } satisfies FailureResponse<undefined, unknown, 'request:body', undefined>
        }
        return { right: _body.data }
    }

    public async awaitResponse<I, S extends Record<PropertyKey, { safeParse: (o: unknown) => SafeParseReturnType<unknown, I> }>>(
        response: ResponsePromise<I>,
        schemas: S,
        responseType?: 'json' | 'text',
    ) {
        const _body = (await (responseType !== undefined ? response[responseType]() : response.text())) as I
        const result = await response
        const status =
            result.status < 200
                ? 'informational'
                : result.status < 300
                  ? 'success'
                  : result.status < 400
                    ? 'redirection'
                    : result.status < 500
                      ? 'client-error'
                      : 'server-error'
        const validator = schemas[result.status] ?? schemas.default
        const body = validator?.safeParse?.(_body)
        if (result.status < 200 || result.status >= 300) {
            return {
                success: false as const,
                statusCode: result.status.toString(),
                status,
                headers: result.headers,
                left: body?.success ? body.data : _body,
                error: body !== undefined && !body.success ? body.error : undefined,
                where: 'response:statuscode',
            }
        }
        if (body === undefined || !body.success) {
            return {
                success: body === undefined,
                statusCode: result.status.toString(),
                status,
                headers: result.headers,
                left: _body,
                error: body?.error,
                where: 'response:body',
            }
        }
        return { success: true as const, statusCode: result.status.toString(), status, headers: result.headers, right: body.data }
    }

    protected buildBasicClient(client: KyInstance) {
        return client.extend({
            hooks: {
                beforeRequest: [
                    async (options) => {
                        const basic = this.auth.basic
                        if (basic !== undefined) {
                            const [username, password] = typeof basic === 'function' ? await basic() : basic
                            options.headers.set('Authorization', `Basic ${btoa(`${username}:${password}`)}`)
                        }
                    },
                ],
            },
        })
    }

    protected buildApiKeyClient(client: KyInstance) {
        return client.extend({
            hooks: {
                beforeRequest: [
                    async (options) => {
                        const apiKey = this.auth.apiKey
                        const key = typeof apiKey === 'function' ? await apiKey() : apiKey
                        options.headers.set('apiKey', `${key}`)
                    },
                ],
            },
        })
    }

    protected buildClient(auths: string[][] | string[] | undefined = this.defaultAuth, client?: KyInstance): KyInstance {
        const auth = (auths ?? [...this.availableAuth])
            .map((auth) => (Array.isArray(auth) ? auth : [auth]))
            .filter((auth) => auth.every((a) => this.availableAuth.has(a)))
        let chosenClient = client ?? this.client
        for (const chosen of auth[0] ?? []) {
            if (chosen === 'basic') {
                chosenClient = this.buildBasicClient(chosenClient)
            } else if (chosen === 'apiKey') {
                chosenClient = this.buildApiKeyClient(chosenClient)
            }
        }
        return chosenClient
    }
}

export type Status<Major> = Major extends string
    ? Major extends `1${number}`
        ? 'informational'
        : Major extends `2${number}`
          ? 'success'
          : Major extends `3${number}`
            ? 'redirection'
            : Major extends `4${number}`
              ? 'client-error'
              : 'server-error'
    : undefined
export interface SuccessResponse<StatusCode extends string, T> {
    success: true
    statusCode: StatusCode
    status: Status<StatusCode>
    headers: Headers
    right: T
}
export interface FailureResponse<StatusCode = string, T = unknown, Where = never, HeaderResponse = Headers> {
    success: false
    statusCode: StatusCode
    status: Status<StatusCode>
    headers: HeaderResponse
    error: ZodError<T> | undefined
    left: T
    where: Where
}
export type StatusCode<Major extends number = 1 | 2 | 3 | 4 | 5> = `${Major}${number}`
