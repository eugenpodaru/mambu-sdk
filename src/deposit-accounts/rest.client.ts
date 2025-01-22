import ky from 'ky'
import type { KyInstance, Options, ResponsePromise } from 'ky'
import type { SafeParseReturnType, ZodError } from 'zod'

import {
    AccountAuthorizationHold,
    ApplyInterestInput,
    BlockFund,
    BulkInterestAccountSettingsAvailabilityInput,
    Card,
    ChangeInterestRateAction,
    ChangeWithholdingTaxAction,
    DepositAccount,
    DepositAccountAction,
    DepositAccountSearchCriteria,
    ErrorResponse,
    GetAllAuthorizationHoldsResponse,
    GetAllBlocksResponse,
    GetAllCardsResponse,
    GetAllResponse,
    GetDepositAccountDocumentResponse,
    GetFundedLoansResponse,
    GetInterestAvailabilitiesListResponse,
    GetWithholdingTaxHistoryResponse,
    InterestAccountSettingsAvailability,
    InterestAccountSettingsAvailabilityResponse,
    InterestAccountSettingsAvailabilityUpdate,
    LoanAccountSchedule,
    PatchBlockFundRequest,
    PatchRequest,
    ReopenDepositAction,
    SearchResponse,
    StartMaturityAction,
    TransferOwnershipAction,
    UndoMaturityAction,
} from './rest.zod.js'

/**
 * deposits
 */
export class MambuDepositAccounts {
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
     * POST /deposits/{depositAccountId}:applyInterest
     *
     * Represents information to apply accrued interest.
     */
    public applyInterest({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: ApplyInterestInput
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'429', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409' | '429'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(ApplyInterestInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}:applyInterest`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
                429: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['applyInterest']>
    }

    /**
     * POST /deposits/{depositAccountId}:changeInterestRate
     *
     * Change deposit account interest rate
     */
    public changeInterestRate({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: ChangeInterestRateAction
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(ChangeInterestRateAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}:changeInterestRate`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['changeInterestRate']>
    }

    /**
     * POST /deposits/{depositAccountId}:changeState
     *
     * Represents the information to post an action, such as approving a deposit account.
     */
    public changeState({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: DepositAccountAction
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', DepositAccount>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(DepositAccountAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}:changeState`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['changeState']>
    }

    /**
     * POST /deposits/{depositAccountId}:changeWithholdingTax
     *
     * Change deposit account withholding tax rate
     */
    public changeWithholdingTax({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: ChangeWithholdingTaxAction
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'204', unknown>
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
        const _body = this.validateRequestBody(ChangeWithholdingTaxAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}:changeWithholdingTax`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['changeWithholdingTax']>
    }

    /**
     * POST /deposits
     *
     * Create deposit account
     */
    public create({
        body,
        headers,
        auth = [['apiKey'], ['basic']],
    }: { body: DepositAccount; headers?: { 'Idempotency-Key'?: string }; auth?: string[][] | string[] }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', DepositAccount>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(DepositAccount, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('deposits', {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['create']>
    }

    /**
     * POST /deposits/{depositAccountId}/authorizationholds
     *
     * Create an authorization hold corresponding to a given account
     */
    public createAuthorizationHold({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: AccountAuthorizationHold
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', AccountAuthorizationHold>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(AccountAuthorizationHold, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}/authorizationholds`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: AccountAuthorizationHold,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createAuthorizationHold']>
    }

    /**
     * POST /deposits/{depositAccountId}/blocks
     *
     * Create a block fund for the account
     */
    public createBlockFund({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: BlockFund
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', BlockFund>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(BlockFund, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}/blocks`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: BlockFund,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createBlockFund']>
    }

    /**
     * POST /deposits/{depositAccountId}/cards
     *
     * Represents the information needed to create and associate a new card to an account.
     */
    public createCard({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: Card
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(Card, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}/cards`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['createCard']>
    }

    /**
     * POST /deposits/{depositAccountId}/interest-availabilities
     *
     * Create Interest Availability
     */
    public createInterestAvailability({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: InterestAccountSettingsAvailability
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'201', InterestAccountSettingsAvailabilityResponse>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(InterestAccountSettingsAvailability, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}/interest-availabilities`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                201: InterestAccountSettingsAvailabilityResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['createInterestAvailability']>
    }

    /**
     * DELETE /deposits/{depositAccountId}
     *
     * Delete inactive deposit account
     */
    public delete({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { depositAccountId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        return this.awaitResponse(
            this.buildClient(auth).delete(`deposits/${path.depositAccountId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['delete']>
    }

    /**
     * DELETE /deposits/{depositAccountId}/cards/{cardReferenceToken}
     *
     * Represents the information needed to delete a card associated to an account using its reference token.
     */
    public deleteCard({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { depositAccountId: string; cardReferenceToken: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'204', unknown>
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
            this.buildClient(auth).delete(`deposits/${path.depositAccountId}/cards/${path.cardReferenceToken}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['deleteCard']>
    }

    /**
     * DELETE /deposits/{depositAccountId}/interest-availabilities/{interestAvailabilityKey}
     *
     * Delete Interest Availability
     */
    public deleteInterestAvailability({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { depositAccountId: string; interestAvailabilityKey: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        return this.awaitResponse(
            this.buildClient(auth).delete(
                `deposits/${path.depositAccountId}/interest-availabilities/${path.interestAvailabilityKey}`,
                {},
            ),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['deleteInterestAvailability']>
    }

    /**
     * GET /deposits
     *
     * Get deposit accounts
     */
    public getAll({
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        query?: {
            offset?: string
            limit?: string
            paginationDetails?: string
            detailsLevel?: string
            creditOfficerUsername?: string
            branchId?: string
            centreId?: string
            accountState?: string
            accountHolderType?: string
            accountHolderId?: string
        }
        auth?: string[][] | string[]
    } = {}): Promise<
        | SuccessResponse<'200', GetAllResponse>
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
            this.buildClient(auth).get('deposits', {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAllResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAll']>
    }

    /**
     * GET /deposits/{depositAccountId}/authorizationholds
     *
     * Get authorization holds related to a deposit account, ordered from newest to oldest by creation date
     */
    public getAllAuthorizationHolds({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; status?: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', GetAllAuthorizationHoldsResponse>
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
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/authorizationholds`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAllAuthorizationHoldsResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAllAuthorizationHolds']>
    }

    /**
     * GET /deposits/{depositAccountId}/blocks
     *
     * Get all block funds for a deposit account
     */
    public getAllBlocks({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; state?: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', GetAllBlocksResponse>
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
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/blocks`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAllBlocksResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAllBlocks']>
    }

    /**
     * GET /deposits/{depositAccountId}/cards
     *
     * Get cards associated with an account
     */
    public getAllCards({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { depositAccountId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', GetAllCardsResponse>
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
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/cards`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetAllCardsResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAllCards']>
    }

    /**
     * GET /deposits/{depositAccountId}/authorizationholds/{authorizationHoldExternalReferenceId}
     *
     * Get account authorization hold
     */
    public getAuthorizationHoldById({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string; authorizationHoldExternalReferenceId: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', AccountAuthorizationHold>
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
            this.buildClient(auth).get(
                `deposits/${path.depositAccountId}/authorizationholds/${path.authorizationHoldExternalReferenceId}`,
                {
                    headers: { Accept: 'application/vnd.mambu.v2+json' },
                },
            ),
            {
                200: AccountAuthorizationHold,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getAuthorizationHoldById']>
    }

    /**
     * GET /deposits/{depositAccountId}
     *
     * Get deposit account
     */
    public getById({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: { path: { depositAccountId: string }; query?: { detailsLevel?: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', DepositAccount>
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
            this.buildClient(auth).get(`deposits/${path.depositAccountId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getById']>
    }

    /**
     * GET /deposits/{depositAccountId}/templates/{templateId}
     *
     * Get deposit account document
     */
    public getDepositAccountDocument({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string; templateId: string }
        query?: { startDate?: string; endDate?: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', GetDepositAccountDocumentResponse>
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
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/templates/${path.templateId}`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetDepositAccountDocumentResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getDepositAccountDocument']>
    }

    /**
     * GET /deposits/{depositAccountId}/funding
     *
     * Get all loan accounts funded by the deposit account with the given ID or encoded key
     */
    public getFundedLoans({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { depositAccountId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', GetFundedLoansResponse>
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
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/funding`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetFundedLoansResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getFundedLoans']>
    }

    /**
     * GET /deposits/{depositAccountId}/interest-availabilities
     *
     * Get Interest Availabilities
     */
    public getInterestAvailabilitiesList({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string }
        query?: { offset?: string; limit?: string; paginationDetails?: string; type?: string; from?: string; to?: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', GetInterestAvailabilitiesListResponse>
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
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/interest-availabilities`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetInterestAvailabilitiesListResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getInterestAvailabilitiesList']>
    }

    /**
     * GET /deposits/{depositAccountId}/interest-availabilities/{interestAvailabilityKey}
     *
     * Get Interest Availability
     */
    public getInterestAvailabilityById({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { depositAccountId: string; interestAvailabilityKey: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', InterestAccountSettingsAvailabilityResponse>
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
            this.buildClient(auth).get(
                `deposits/${path.depositAccountId}/interest-availabilities/${path.interestAvailabilityKey}`,
                {
                    headers: { Accept: 'application/vnd.mambu.v2+json' },
                },
            ),
            {
                200: InterestAccountSettingsAvailabilityResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getInterestAvailabilityById']>
    }

    /**
     * GET /deposits/{depositAccountId}/templates/{templateId}/pdf
     *
     * Download deposit account document PDF
     */
    public getPdfDocument({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string; templateId: string }
        query?: { startDate?: string; endDate?: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', unknown>
        | FailureResponse<'400', unknown, 'response:statuscode'>
        | FailureResponse<'401', unknown, 'response:statuscode'>
        | FailureResponse<'403', unknown, 'response:statuscode'>
        | FailureResponse<'404', unknown, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        return this.awaitResponse(
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/templates/${path.templateId}/pdf`, {
                searchParams: query ?? {},
            }),
            {
                200: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                401: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                403: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                404: { safeParse: (x: unknown) => ({ success: true, data: x }) },
            },
            'text',
        ) as ReturnType<this['getPdfDocument']>
    }

    /**
     * GET /deposits/{depositAccountId}/funding/{loanAccountId}/schedule
     *
     * Allows retrieval of the loan account schedule for a loan account with the given id or encodedKey and funded by the deposit account with the given id or encodedKey.
     */
    public getScheduleForFundedAccount({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { depositAccountId: string; loanAccountId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', LoanAccountSchedule>
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
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/funding/${path.loanAccountId}/schedule`, {
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: LoanAccountSchedule,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getScheduleForFundedAccount']>
    }

    /**
     * GET /deposits/{depositAccountId}/withholdingtaxes
     *
     * Get deposit account withholding tax history
     */
    public getWithholdingTaxHistory({
        path,
        query,
        auth = [['apiKey'], ['basic']],
    }: { path: { depositAccountId: string }; query?: { from?: string; to?: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', GetWithholdingTaxHistoryResponse>
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
            this.buildClient(auth).get(`deposits/${path.depositAccountId}/withholdingtaxes`, {
                searchParams: query ?? {},
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: GetWithholdingTaxHistoryResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['getWithholdingTaxHistory']>
    }

    /**
     * POST /deposits/interest-availabilities:bulk
     *
     * Create Interest Availabilities for a group of accounts
     */
    public makeBulkInterestAccountSettingsAvailabilities({
        body,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: BulkInterestAccountSettingsAvailabilityInput
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'202', unknown>
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
        const _body = this.validateRequestBody(BulkInterestAccountSettingsAvailabilityInput, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('deposits/interest-availabilities:bulk', {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                202: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['makeBulkInterestAccountSettingsAvailabilities']>
    }

    /**
     * PATCH /deposits/{depositAccountId}
     *
     * Partially update deposit account
     */
    public patch({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: { body: PatchRequest; path: { depositAccountId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(PatchRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).patch(`deposits/${path.depositAccountId}`, {
                json: _body.right,
            }),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['patch']>
    }

    /**
     * PATCH /deposits/{depositAccountId}/blocks/{externalReferenceId}
     *
     * Updates the amount of an existing blocked fund on a deposit account. If the new amount equals the seized amount the block fund will transition to a seized state.
     */
    public patchBlockFund({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        body: PatchBlockFundRequest
        path: { depositAccountId: string; externalReferenceId: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(PatchBlockFundRequest, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).patch(`deposits/${path.depositAccountId}/blocks/${path.externalReferenceId}`, {
                json: _body.right,
            }),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['patchBlockFund']>
    }

    /**
     * POST /deposits/{depositAccountId}:reopen
     *
     * Reopen a deposit account
     */
    public reopen({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: ReopenDepositAction
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', DepositAccount>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(ReopenDepositAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}:reopen`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['reopen']>
    }

    /**
     * DELETE /deposits/{depositAccountId}/authorizationholds/{authorizationHoldExternalReferenceId}
     *
     * Reverse account authorization hold
     */
    public reverseAuthorizationHold({
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        path: { depositAccountId: string; authorizationHoldExternalReferenceId: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        return this.awaitResponse(
            this.buildClient(auth).delete(
                `deposits/${path.depositAccountId}/authorizationholds/${path.authorizationHoldExternalReferenceId}`,
                {},
            ),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['reverseAuthorizationHold']>
    }

    /**
     * POST /deposits:search
     *
     * Search deposit accounts
     */
    public search({
        body,
        query,
        auth = [['apiKey'], ['basic']],
    }: {
        body: DepositAccountSearchCriteria
        query?: { offset?: string; limit?: string; paginationDetails?: string; cursor?: string; detailsLevel?: string }
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
        const _body = this.validateRequestBody(DepositAccountSearchCriteria, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post('deposits:search', {
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
     * POST /deposits/{depositAccountId}:startMaturity
     *
     * Represents information to start the maturity period for the specified deposit account.
     */
    public startMaturity({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: StartMaturityAction
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'200', DepositAccount>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(StartMaturityAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}:startMaturity`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json', ...headers },
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                200: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['startMaturity']>
    }

    /**
     * POST /deposits/{depositAccountId}:transferOwnership
     *
     * Transfer the account ownership from current account holder to a new one (client/group).
     */
    public transferOwnership({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: TransferOwnershipAction
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(TransferOwnershipAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}:transferOwnership`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['transferOwnership']>
    }

    /**
     * DELETE /deposits/{depositAccountId}/blocks/{externalReferenceId}
     *
     * Unblock a previously blocked fund for a deposit account
     */
    public unblockFund({
        path,
        auth = [['apiKey'], ['basic']],
    }: { path: { depositAccountId: string; externalReferenceId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        return this.awaitResponse(
            this.buildClient(auth).delete(`deposits/${path.depositAccountId}/blocks/${path.externalReferenceId}`, {}),
            {
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['unblockFund']>
    }

    /**
     * POST /deposits/{depositAccountId}:undoMaturity
     *
     * Represents the action to undo the maturity period for the specified deposit account.
     */
    public undoMaturity({
        body,
        path,
        headers,
        auth = [['apiKey'], ['basic']],
    }: {
        body: UndoMaturityAction
        path: { depositAccountId: string }
        headers?: { 'Idempotency-Key'?: string }
        auth?: string[][] | string[]
    }): Promise<
        | FailureResponse<'102', unknown, 'response:statuscode'>
        | SuccessResponse<'204', unknown>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '102' | '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(UndoMaturityAction, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).post(`deposits/${path.depositAccountId}:undoMaturity`, {
                json: _body.right,
                headers: headers ?? {},
            }),
            {
                102: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                204: { safeParse: (x: unknown) => ({ success: true, data: x }) },
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'text',
        ) as ReturnType<this['undoMaturity']>
    }

    /**
     * PUT /deposits/{depositAccountId}
     *
     * Update deposit account
     */
    public update({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: { body: DepositAccount; path: { depositAccountId: string }; auth?: string[][] | string[] }): Promise<
        | SuccessResponse<'200', DepositAccount>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(DepositAccount, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).put(`deposits/${path.depositAccountId}`, {
                json: _body.right,
                headers: { Accept: 'application/vnd.mambu.v2+json' },
            }),
            {
                200: DepositAccount,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['update']>
    }

    /**
     * PUT /deposits/{depositAccountId}/interest-availabilities/{interestAvailabilityKey}
     *
     * Update Interest Availability
     */
    public updateInterestAvailability({
        body,
        path,
        auth = [['apiKey'], ['basic']],
    }: {
        body: InterestAccountSettingsAvailabilityUpdate
        path: { depositAccountId: string; interestAvailabilityKey: string }
        auth?: string[][] | string[]
    }): Promise<
        | SuccessResponse<'200', InterestAccountSettingsAvailabilityResponse>
        | FailureResponse<'400', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'401', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'403', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'404', ErrorResponse, 'response:statuscode'>
        | FailureResponse<'409', ErrorResponse, 'response:statuscode'>
        | FailureResponse<undefined, unknown, 'request:body', undefined>
        | FailureResponse<StatusCode<2>, string, 'response:body', Headers>
        | FailureResponse<
              Exclude<StatusCode<1 | 3 | 4 | 5>, '400' | '401' | '403' | '404' | '409'>,
              unknown,
              'response:statuscode',
              Headers
          >
    > {
        const _body = this.validateRequestBody(InterestAccountSettingsAvailabilityUpdate, body)
        if ('left' in _body) {
            return Promise.resolve(_body)
        }

        return this.awaitResponse(
            this.buildClient(auth).put(
                `deposits/${path.depositAccountId}/interest-availabilities/${path.interestAvailabilityKey}`,
                {
                    json: _body.right,
                    headers: { Accept: 'application/vnd.mambu.v2+json' },
                },
            ),
            {
                200: InterestAccountSettingsAvailabilityResponse,
                400: ErrorResponse,
                401: ErrorResponse,
                403: ErrorResponse,
                404: ErrorResponse,
                409: ErrorResponse,
            },
            'json',
        ) as ReturnType<this['updateInterestAvailability']>
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
