<a href="https://discord.gg/WhZmm46APN"><img alt="Discord" src="https://img.shields.io/discord/852538978946383893?style=for-the-badge&logo=discord&label=Discord&labelColor=%231940ED&color=%233FCB9B"></a>
<a href="https://www.npmjs.com/package/xray-graph-output-stats-client"><img alt="NPM" src="https://img.shields.io/npm/v/xray-graph-output-stats-client/latest?style=for-the-badge&logo=npm&labelColor=%231940ED&color=%233FCB9B"></a>

# TypeScript Client for XRAY/Graph Stats

Automatically generated Openapi-fetch (Axios) client for XRAY/Graph Stats.

## Installation

To install the client with Yarn, run:

```TypeScript
yarn add xray-graph-output-stats-client
```

To install the client with NPM, run:

```TypeScript
npm i xray-graph-output-stats-client
```

## Usage

```TypeScript
import StatsClient from "xray-graph-output-stats-client"

const client = StatsClient("https://graph.xray.app/output/stats")

const app = async () => {
  const tip = await client.GET("/total-supply")

  if (tip.data) {
    console.log(tip.data)
  }
  if (tip.error) {
    console.error(tip.error)
  }
}

app()
```

## Advanced Usage

<details>
<summary>Headers</summary>
  
``` TypeScript
import StatsClient from "xray-graph-output-stats-client"

const baseUrl = "https://graph.xray.app/output/stats"
const headers = {} // rest headers
const client = StatsClient(baseUrl, headers)

const app = async () => {
  const health = await client.GET("/total-supply", {
    headers: { "Content-Type": "application/json" }, // one shot headers
  })

  console.log(health.data)
}

app()
```

</details>

<details>
<summary>Request Cancellation (AbortSignal)</summary>

```TypeScript
import StatsClient from "xray-graph-output-stats-client"

const client = StatsClient("https://graph.xray.app/output/stats")

const app = async () => {
  const abortController = new AbortController()

  setTimeout(() => {
    abortController.abort() // cancel request
    console.log('Aborted!')
  }, 200)

  const tip = await client.GET("/total-supply", {
    signal: abortController.signal,
  })
}

app()
```

</details>

<details>
<summary>Updating Schema</summary>

Run schema update:
```console
yarn schema
```

</details>

## Playground

* XRAY/Graph Stats — https://graph.xray.app/output/stats


## API URLs

Managed by XRAY/Network (XRAY/Graph, Cloudflare WAF & Load Balancer)

```
https://graph.xray.app/output/stats
```

