import { describe, test, expect } from "vitest"
import { Cell } from "../Cell"
import { Carrier } from "../Ship"

describe("game board cell test suite", () => {
  const cell = new Cell()

  test("cell does not have any ship", () => {
    expect(cell.getShip()).toBe(null)
  })

  test("cell has a carrier", () => {
    const carrier = new Carrier()
    cell.setShip(carrier)
    expect(cell.getShip()).toBe(carrier)
  })
})
