const isAddress = require("./checker").isAddress;

const normalAddress = "0xc1912fee45d61c87cc5ea59dae31190fffff232d"
const withoutZero = "c1912fee45d61c87cc5ea59dae31190fffff232d"
const uppercase = "0xC1912FEE45D61C87CC5EA59DAE31190FFFFF232D"
const wrongAddress = "0xc1912fee45d61c87cc5ea59dae31190fQfff232d"

test("checks normal address", () => {
    expect(isAddress(normalAddress)).toBe(true)
})

test("checks address without preceding 0x", () => {
    expect(isAddress(withoutZero)).toBe(true)
})

test("checks address in uppercase", () => {
    expect(isAddress(uppercase)).toBe(true)
})

test("checks is wrong address is not valid", () => {
    expect(isAddress(wrongAddress)).toBe(false)
})