import { describe, expect, it } from "vitest"
import sum from "./sum"

describe("sum", () => {
    it("should return the sum of numbers", () => {
        expect(sum(1, 2, 3)).toBe(6)
    })

    it("return same number with one number", () => {
        expect(sum(1)).toBe(1)
    })

    it("return 0 with no number", () => {
        expect(sum()).toBe(0)
    })
})