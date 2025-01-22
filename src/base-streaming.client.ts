import ky from 'ky'
import type { KyInstance, Options, ResponsePromise } from 'ky'
import type { SafeParseReturnType, ZodError } from 'zod'

import {
    CommitSubscriptionCursorsRequest,
    CommitSubscriptionCursorsResponse200,
    DeleteSubscriptionBySubscriptionIdResponse404,
    GetSubscriptionStatsResponse,
    Problem,
    Subscription,
    SubscriptionEventStreamBatch,
} from './base-streaming.zod.js'

/**
 * Mambu Streaming API
 */
export class BaseMambuStreaming {
    public client: KyInstance

    public auth: {
        apiKeyAuth?: string | (() => Promise<string>)
    }

    public availableAuth: Set<string>
    public defaultAuth: string[][] | string[] | undefined

    public constructor({
        prefixUrl = 'http://MYTENANT.mambu.com/api/v1',
        options,
        auth = {},
        defaultAuth,
        client = ky,
    }: {
        prefixUrl?: string | 'http://MYTENANT.mambu.com/api/v1'
        options?: Options
        auth: {
            apiKeyAuth?: string | (() => Promise<string>)
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
     * POST /subscriptions/{subscription_id}/cursors
     *
     * Commit Cursors
     *
     * This endpoint commits offsets of the subscription.
     *
     * - If there is uncommited data, and no commits happen for 60 seconds, Mambu will consider the client to be gone, and will close the connection. As long as no events are sent, the client does not need to commit.
     *
     * - If the connection is closed, the client has 60 seconds to commit the events it received, from the moment they were sent. After that, the connection will be considered closed, and it will not be possible to do commit with that `X-Mambu-StreamId` anymore.
     *
     * - When a batch is committed, that also automatically commits all previous batches that were sent in a stream for this partition.
     */
    public commitSubscriptionCursors({
        body,
        path,
        headers,
    }: {
        body: CommitSubscriptionCursorsRequest
        path: { subscriptionId: string }
        headers: { 'X-Mambu-StreamId': string; apikey?: string }
    }): Promise<
        | SuccessResponse<'200', CommitSubscriptionCursorsResponse200>
        | SuccessResponse<'204', unknown>
        | FailureResponse<'403', Problem, 'response:statuscode'>
        | FailureResponse<'404', Problem, 'response:statuscode'>
        | FailureResponse<'422', Problem, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '403' | '404' | '422'>, unknown, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(CommitSubscriptionCursorsRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient().post(`subscriptions/${path.subscriptionId}/cursors`, {
                json: _body.right,
                headers: headers,
            }),
            {
                200: CommitSubscriptionCursorsResponse200,
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: Problem,
                404: Problem,
                422: Problem,
            },
            'json',
        ) as ReturnType<this['commitSubscriptionCursors']>
    }

    /**
     * POST /subscriptions
     *
     * Create a Subscription
     *
     * This endpoint creates a subscription for `event_types`. Event types must first be specified using the Mambu UI following the instructions in our [Event Streaming API](https://support.mambu.com/docs/streaming-api) article.
     *
     * - The subscription is needed to be able to consume events from `event_types` in a high level way when Mambu stores the offsets and manages the rebalancing of consuming clients.
     *
     * - The subscription is identified by its key parameters (`owning_application`, `event_types`, `consumer_group`).
     *
     * - If this endpoint is invoked several times with the same key subscription properties in body (order of even_types is not important) - the subscription will be created only once and for all other calls it will just return the subscription that was already created.
     */
    public createSubscription({
        body,
        headers,
    }: { body: Subscription; headers?: { apikey?: string } }): Promise<
        | SuccessResponse<'200', Subscription>
        | SuccessResponse<'201', Subscription>
        | FailureResponse<'400', Problem, 'response:statuscode'>
        | FailureResponse<'422', Problem, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '422'>, unknown, 'response:statuscode', Headers>
    > {
        const _body = this.validateRequestBody(Subscription, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient().post('subscriptions', {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                200: Subscription,
                201: Subscription,
                400: Problem,
                422: Problem,
            },
            'json',
        ) as ReturnType<this['createSubscription']>
    }

    /**
     * DELETE /subscriptions/{subscription_id}
     *
     * Delete a Subscription
     *
     * This endpoint deletes an existing subscription for event types.
     * > <strong>Example Request</strong>
     * ```http
     * DELETE https://TENNT_NAME.MAMBU.COM/api/v1/subscriptions/0691160a-b519-4595-b85c-a400fc73e96 HTTP/1.1
     *
     * apikey: string
     * ```
     *
     * - In case the subscription is not needed anymore, it can be manually deleted by providing its unique subscription id.
     */
    public deleteSubscriptionBySubscriptionId({
        path,
        headers,
    }: { path: { subscriptionId: string }; headers?: { apikey?: string } }): Promise<
        | SuccessResponse<'204', unknown>
        | FailureResponse<'404', DeleteSubscriptionBySubscriptionIdResponse404, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '404'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.buildClient().delete(`subscriptions/${path.subscriptionId}`, {
                headers: headers ?? {},
            }),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: DeleteSubscriptionBySubscriptionIdResponse404,
            },
            'text',
        ) as ReturnType<this['deleteSubscriptionBySubscriptionId']>
    }

    /**
     * GET /subscriptions/{subscription_id}/events
     *
     * Start Event Stream
     *
     * This endpoint starts a new stream for reading events from this subscription. The data will be automatically rebalanced between streams of one subscription.
     *
     * - The minimal consumption unit is a partition, so it is possible to start as many streams as the total number of partitions in event-types of this subscription.
     * - The rebalance currently only operates with the number of partitions so the amount of data in event-- types/partitions is not considered during autorebalance.
     * - The position of the consumption is managed by Mambu. The client is required to commit the cursors it gets in a stream.
     *
     *
     * > <strong>Example Request</strong>
     * ```http
     * GET https://TENANT_NAME.mambu.com/api/v1/subscriptions/0691160a-b519-4595-b85c-a400fc73e96/events?stream_limit=10&stream_timeout=600 HTTP/1.1
     *
     * Accept: application/json
     * apikey: string
     * X-Flow-Id: string
     * ```
     * ### Client Rebalancing
     *
     * - If you need more than one client for your subscription to distribute load or increase throughput - you can read the subscription with multiple clients and Mambu will automatically balance the load across them.
     * - Currently, the maximum number of supported clients per subscription is equal to the number of event types in the subscription multiplied by `3`.
     * - For example if there are two event types in the subscription, the total number of clients for the subscription is `6`. The total of all the partitions within a subscription cannot be more than `100`. This gives a maximum of `33` event types per subscription.
     * - Recommendation: to improve throughput, maintain the same number of partitions and consumer clients from the start. This ensures a balanced distribution of the workload, minimises delays and simplifies rebalancing.
     * - The API provides a guarantee of at-least-once delivery, this means that there are cases where duplicate events may be sent if there are errors committing events - a useful technique to detect and handle duplicates is to be idempotent and to check the `eid` field of event metadata.
     */
    public getSubscriptionEvents({
        path,
        query,
        headers,
    }: {
        path: { subscriptionId: string }
        query?: {
            max_uncommitted_events?: string
            batch_limit?: string
            stream_limit?: string
            batch_flush_timeout?: string
            stream_timeout?: string
            stream_keep_alive_limit?: string
            commit_timeout?: string
        }
        headers?: { 'X-Flow-Id'?: string; apikey?: string }
    }): Promise<
        | SuccessResponse<'200', SubscriptionEventStreamBatch>
        | FailureResponse<'400', Problem, 'response:statuscode'>
        | FailureResponse<'403', Problem, 'response:statuscode'>
        | FailureResponse<'404', Problem, 'response:statuscode'>
        | FailureResponse<'409', Problem, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        return this.awaitResponse(
            this.buildClient().get(`subscriptions/${path.subscriptionId}/events`, {
                searchParams: query ?? {},
                headers: headers ?? {},
            }),
            {
                200: SubscriptionEventStreamBatch,
                400: Problem,
                403: Problem,
                404: Problem,
                409: Problem,
            },
            'json',
        ) as ReturnType<this['getSubscriptionEvents']>
    }

    /**
     * GET /subscriptions/{subscription_id}/stats
     *
     * Get Statistics
     *
     * This endpoint exposes statistics of a specified subscription. An example use for the statistics provided could be monitoring lag in consumers.
     *
     *
     * > <strong>Example Request</strong>
     * ```http
     * GET https://TENANT_NAME.mambu.com/api/v1/subscriptions/0691160a-b519-4595-b85c-a400fc73e96/stats?show_time_lag=true HTTP/1.1
     *
     * Accept: application/json
     * apikey: string
     * ```
     *
     * The latest offset is compared with committed offset in order to calculate unconsumed events count for specific partition.
     */
    public getSubscriptionStats({
        path,
        query,
        headers,
    }: { path: { subscriptionId: string }; query?: { show_time_lag?: string }; headers?: { apikey?: string } }): Promise<
        | SuccessResponse<'200', GetSubscriptionStatsResponse>
        | FailureResponse<'404', Problem, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<Exclude<StatusCode<1 | 3 | 4 | 5>, '404'>, unknown, 'response:statuscode', Headers>
    > {
        return this.awaitResponse(
            this.buildClient().get(`subscriptions/${path.subscriptionId}/stats`, {
                searchParams: query ?? {},
                headers: headers ?? {},
            }),
            {
                200: GetSubscriptionStatsResponse,
                404: Problem,
            },
            'json',
        ) as ReturnType<this['getSubscriptionStats']>
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

    protected buildApiKeyAuthClient(client: KyInstance) {
        return client.extend({
            hooks: {
                beforeRequest: [
                    async (options) => {
                        const apiKeyAuth = this.auth.apiKeyAuth
                        const key = typeof apiKeyAuth === 'function' ? await apiKeyAuth() : apiKeyAuth
                        options.headers.set('apikey', `${key}`)
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
            if (chosen === 'apiKeyAuth') {
                chosenClient = this.buildApiKeyAuthClient(chosenClient)
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
