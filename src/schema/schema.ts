export type paths = {
    "/cardano": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Cardano Stats
         * @description Fetches Cardano network, epoch, and tip stats.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            network: {
                                epoch_no?: number;
                                circulation?: string;
                                treasury?: string;
                                reward?: string;
                                supply?: string;
                                reserves?: string;
                                fees?: string;
                                deposits_stake?: string;
                                deposits_drep?: string;
                                deposits_proposal?: string;
                            };
                            epoch: {
                                epoch_no?: number;
                                out_sum?: string;
                                fees?: string;
                                tx_count?: number;
                                blk_count?: number;
                                start_time?: number;
                                end_time?: number;
                                first_block_time?: number;
                                last_block_time?: number;
                                active_stake?: string | null;
                                total_rewards?: string | null;
                                avg_blk_reward?: string | null;
                            };
                            tip: {
                                hash?: string;
                                epoch_no?: number;
                                abs_slot?: number;
                                epoch_slot?: number;
                                block_no?: number;
                                block_time?: number;
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/circulating-supply": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Circulating Supply
         * @description Fetches the current circulating supply of the XRAY token.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dev-fund": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Dev Fund Transactions
         * @description Fetches the latest transactions from the XRAY Dev Fund.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: number;
                            tx_hash: string;
                            timestamp: string;
                            amount: number;
                            description: string;
                        }[];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/fiat-prices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fiat Prices
         * @description XRAY, ADA, BTC, ETH prices in fiat currencies.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            updated_at: number;
                            data: {
                                bitcoin: {
                                    usd: number;
                                    eur: number;
                                    gbp: number;
                                    jpy: number;
                                    cny: number;
                                };
                                cardano: {
                                    usd: number;
                                    eur: number;
                                    gbp: number;
                                    jpy: number;
                                    cny: number;
                                };
                                ethereum: {
                                    usd: number;
                                    eur: number;
                                    gbp: number;
                                    jpy: number;
                                    cny: number;
                                };
                                "ray-network": {
                                    usd: number;
                                    eur: number;
                                    gbp: number;
                                    jpy: number;
                                    cny: number;
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/funding": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Funding Transactions
         * @description Fetches the latest funding statistics for XRAY/Foundation.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: number;
                            date: string;
                            description: string;
                            amount: string;
                            link?: string;
                        }[];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/git-commits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Git Repository Stats
         * @description Fetches the latest statistics from the XRAY/Network Git repositories.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            updated_at: number;
                            data: {
                                author: string;
                                author_avatar: string;
                                author_url: string;
                                branch_name: string;
                                branch_url: string;
                                date: string;
                                message: string;
                                repo_name: string;
                                repo_private: boolean;
                                repo_stars: number;
                                repo_watchers: number;
                                sha: string;
                                url: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services-counter": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Services Counter Stats
         * @description Fetches the current count of XRAY/Graph calls.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            total: number;
                            counters: {
                                name: string;
                                network: string;
                                value: number;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services-health-cached": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Services Health Check
         * @description Checks the health status of all XRAY/Graph Output servers (/output/services/). 1 minute caching.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Health status of all servers */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            updated_at: number;
                            data: {
                                host: string;
                                service: string;
                                network: string;
                                healthy: boolean;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services-health-live": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Services Live Health Check
         * @description Checks the live health status of all XRAY/Graph Output servers (/output/services/). Authorization is required.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Health status of all servers */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            host: string;
                            service: string;
                            network: string;
                            healthy: boolean;
                        }[];
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/stage1": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Stage 1 Distribution
         * @description Fetches the statistics for Stage 1 of the XRAY token distribution.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            participants: number;
                            max_tvl: number;
                            max_rate: number;
                            xdiamond: number;
                            xray: number;
                            ispo_history_json_url: string;
                            xray_staking_history_json_url: string;
                            participants_json_url: string;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/stage2": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Stage 2 Distribution
         * @description Fetches the statistics for Stage 2 of the XRAY token distribution.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: number;
                            tx_hash: string;
                            amount: number;
                            timestamp: number;
                            description: string;
                        }[];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/total-supply": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Total Supply
         * @description Fetches the total supply statistics for XRAY tokens.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/xray-tokenomics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Tokenomics
         * @description Fetches the tokenomics statistics for XRAY, including fingerprint, policy ID, asset name, supply, and token statistics.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            updated_at: number;
                            data: {
                                fingerprint: string;
                                policy_id: string;
                                asset_name: string;
                                asset_name_ascii: string;
                                decimals: number;
                                minting_tx_hash: string;
                                total_supply: number;
                                incentive_supply: number;
                                circulating_supply: number;
                                circulating_supply_pct: number;
                                creation_time: number;
                                total_transactions: number;
                                wallets_staked: number;
                                wallets_unstaked: number;
                                wallets_addresses: number;
                                dev_address: string;
                                incentive_address: string;
                                tokenomics: {
                                    stage1: number;
                                    stage1_withdrawn_by_users: number;
                                    stage1_dropped: number;
                                    stage1_distributed: number;
                                    stage1_distributed_pct: number;
                                    stage1_left: number;
                                    stage1_left_pct: number;
                                    stage2: number;
                                    stage2_distributed: number;
                                    stage2_distributed_pct: number;
                                    stage2_left: number;
                                    stage2_left_pct: number;
                                    dev_fund: number;
                                    dev_fund_distributed: number;
                                    dev_fund_distributed_pct: number;
                                    dev_fund_left: number;
                                    dev_fund_left_pct: number;
                                    founders_fund: number;
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/xray-pools": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pools Statistics
         * @description Fetches the statistics for XRAY pools, including pool IDs, asset names, live stake, and active stake.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            live_stake: string;
                            active_stake: string;
                            blocks_count: number;
                            nodes_count: number;
                            pools: {
                                pool_id_bech32?: string | null;
                                pool_id_hex?: string | null;
                                active_epoch_no?: number | null;
                                vrf_key_hash?: string | null;
                                margin?: number | null;
                                fixed_cost?: string | null;
                                pledge?: string | null;
                                deposit?: string | null;
                                reward_addr?: string | null;
                                reward_addr_delegated_drep?: string | null;
                                owners?: string[] | null;
                                relays?: {
                                    dns?: string | null;
                                    srv?: string | null;
                                    ipv4?: string | null;
                                    ipv6?: string | null;
                                    port?: number | null;
                                }[] | null;
                                meta_url?: string | null;
                                meta_hash?: string | null;
                                meta_json?: {
                                    name?: string | null;
                                    ticker?: string | null;
                                    homepage?: string | null;
                                    description?: string | null;
                                } | null;
                                pool_status?: "registered" | "retiring" | "retired" | unknown;
                                retiring_epoch?: number | null;
                                op_cert?: string | null;
                                op_cert_counter?: number | null;
                                active_stake?: string | null;
                                sigma?: number | null;
                                block_count?: number | null;
                                live_pledge?: string | null;
                                live_stake?: string | null;
                                live_delegators?: number | null;
                                live_saturation?: number | null;
                                voting_power?: string | null;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/xray-pools-ids": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pools IDs
         * @description Fetches the IDs of XRAY pools.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": string[];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
};
export type webhooks = Record<string, never>;
export type components = {
    schemas: never;
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
