import { describe, test, expect } from "vitest"
import { Cell } from "../Cell"
import { Ship } from "../Ship"

describe("game board cell test suite", () => {
  const cell = new Cell()

  test("cell is not played", () => {
    expect(cell.isPlayed()).toBe(false)
  })

  test("cell does not have any ship", () => {
    expect(cell.getShip()).toBe(null)
  })

  test("play cell", () => {
    cell.playCell()
    expect(cell.isPlayed()).toBe(true)
  })

  test("cell has a ship", () => {
    const ship = new Ship(1)
    cell.setShip(ship)
    expect(cell.getShip()).toBe(ship)
  })
})
