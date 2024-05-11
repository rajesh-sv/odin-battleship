import { describe, test, expect } from "vitest"
import { Cell } from "../Cell"
import { Ship } from "../Ship"

describe("game board cell test suite", () => {
  const cell = new Cell()

  test("cell does not have any ship", () => {
    expect(cell.getShip()).toBe(null)
  })

  test("cell has a carrier", () => {
    const ship = new Ship(1)
    cell.setShip(ship)
    expect(cell.getShip()).toBe(ship)
  })
})
