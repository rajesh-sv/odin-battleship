import { describe, expect, test } from "vitest"
import { GameBoard } from "../GameBoard"
import { Ship } from "../Ship"

describe("game board test suite", () => {
  const board = new GameBoard(10)

  test("board is of size 10", () => {
    expect(board.getSize()).toBe(10)
  })

  test("cannot place a horizontal ship of length 3 at column 8", () => {
    const ship = new Ship(3)
    expect(board.placeShip(ship, 0, 8)).toBe(false)
  })

  test("cannot place a vertical ship of length 5 at row 6", () => {
    const ship = new Ship(5)
    expect(board.placeShip(ship, 6, 0)).toBe(false)
  })

  test("place a horizontal ship of length 5 at (0, 5)", () => {
    const ship = new Ship(5)
    expect(board.placeShip(ship, 0, 5)).toBe(true)
  })

  test("cannot place any ship from column 5 onwards on row 0", () => {
    const ship = new Ship(3)
    for (let j = 5; j < board.getSize(); j++)
      expect(board.placeShip(ship, 0, j)).toBe(false)
  })

  test("place a vertical ship of length 3 at (6, 3)", () => {
    const ship = new Ship(3)
    ship.changeDir()
    expect(board.placeShip(ship, 6, 3)).toBe(true)
  })

  test("cannot place any ship from row 6 to 8 on column 3", () => {
    const ship = new Ship(3)
    for (let i = 6; i < 6 + ship.getLength(); i++)
      expect(board.placeShip(ship, i, 3)).toBe(false)
  })

  test("cannot play cell (0, 10)", () => {
    expect(board.playCell(0, 10)).toBe(false)
  })

  test("cannot play cell (4, -1)", () => {
    expect(board.playCell(4, -1)).toBe(false)
  })

  test("play cell (0, 0)", () => {
    expect(board.playCell(0, 0)).toBe(true)
  })

  test("cannot play cell (0, 0) again", () => {
    expect(board.playCell(0, 0)).toBe(false)
  })

  test("playing cells where a horizontal ship of length 5 is placed at (0, 5)", () => {
    for (let j = 5; j < 5 + 5; j++) expect(board.playCell(0, j)).toBe(true)
  })

  test("playing cells where a vertical ship of length 3 is placed at (6, 3)", () => {
    for (let i = 6; i < 6 + 3; i++) expect(board.playCell(i, 3)).toBe(true)
  })

  test("all ships are sunk - Game Over!", () => {
    expect(board.gameOver()).toBe(true)
  })
})
