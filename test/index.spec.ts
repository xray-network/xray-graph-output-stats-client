import { expect, test, vi } from "vitest"
import StatsClient from "../src"

const baseUrl = "https://graph.xray.app/output/stats"
const headers = {}
const client = StatsClient(baseUrl, headers)

test("/total-supply", async () => {
  const tip = await client.GET("/total-supply")
  expect(tip.data).eq("324922240000000")
})

