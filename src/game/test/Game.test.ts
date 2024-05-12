import { describe, expect, test } from "vitest"
import {
  Battleship,
  Carrier,
  Destroyer,
  PatrolShip,
  Ship,
  Submarine,
} from "../Ship"
import { Game } from "../Game"

describe("game test suite", () => {
  const player1 = "player 1",
    player2 = "player 2"

  const carrier1 = new Carrier(),
    carrier2 = new Carrier()
  const battleship1 = new Battleship(),
    battleship2 = new Battleship()
  const destroyer1 = new Destroyer(),
    destroyer2 = new Destroyer()
  const submarine1 = new Submarine(),
    submarine2 = new Submarine()
  const patrolShip1 = new PatrolShip(),
    patrolShip2 = new PatrolShip()

  battleship1.changeDir()
  destroyer1.changeDir()
  patrolShip1.changeDir()

  carrier2.changeDir()
  destroyer2.changeDir()
  submarine2.changeDir()

  const player1ShipLocations: Array<[Ship, number, number]> = [
      [carrier1, 0, 0],
      [battleship1, 4, 0],
      [destroyer1, 1, 2],
      [submarine1, 9, 7],
      [patrolShip1, 7, 6],
    ],
    player2ShipLocations: Array<[Ship, number, number]> = [
      [carrier2, 4, 2],
      [battleship2, 2, 4],
      [destroyer2, 5, 6],
      [submarine2, 0, 8],
      [patrolShip2, 0, 0],
    ]
  const game = new Game(
    player1,
    player2,
    player1ShipLocations,
    player2ShipLocations,
  )

  test("game starts with player 1's turn", () => {
    expect(game.getCurrentPlayer()).toBe(player1)
  })

  test("player 1 plays cell (0, 0)", () => {
    expect(game.playCell(0, 0)).toBe(true)
  })

  test("cell status of cell (0, 0) in player 2's board is ship hit", () => {
    expect(game.getCellStatusOfPlayer2Board(0, 0)).toBe("ship hit")
  })

  test("it is player 2's turn", () => {
    expect(game.getCurrentPlayer()).toBe(player2)
  })

  test("player 2 plays cell (0, 0)", () => {
    expect(game.playCell(0, 0)).toBe(true)
  })

  test("cell status of cell (0, 0) in player 1's board is ship hit", () => {
    expect(game.getCellStatusOfPlayer1Board(0, 0)).toBe("ship hit")
  })

  test("player 1 cannot play cell (0, 0) again", () => {
    expect(game.playCell(0, 0)).toBe(false)
  })

  test("player 1 plays cell (0, 1)", () => {
    expect(game.playCell(0, 1)).toBe(true)
  })

  test("cell status of cell (0, 0) in player 2's board is ship sunk", () => {
    expect(game.getCellStatusOfPlayer2Board(0, 0)).toBe("ship sunk")
  })

  test("cell status of cell (0, 1) in player 2's board is ship sunk", () => {
    expect(game.getCellStatusOfPlayer2Board(0, 1)).toBe("ship sunk")
  })

  test("player 2 cannot play cell (0, 0) again", () => {
    expect(game.playCell(0, 0)).toBe(false)
  })

  test("player 2 plays cell (1, 0)", () => {
    expect(game.playCell(1, 0)).toBe(true)
  })

  test("cell status of cell (1, 0) in player 1's board is played", () => {
    expect(game.getCellStatusOfPlayer1Board(1, 0)).toBe("played")
  })

  test("player 1 plays cell (0, 8)", () => {
    expect(game.playCell(0, 8)).toBe(true)
  })

  test("player 2 plays cell (0, 1)", () => {
    expect(game.playCell(0, 1)).toBe(true)
  })

  test("player 1 plays cell (1, 8)", () => {
    expect(game.playCell(1, 8)).toBe(true)
  })

  test("player 2 plays cell (0, 2)", () => {
    expect(game.playCell(0, 2)).toBe(true)
  })

  test("player 1 plays cell (2, 8)", () => {
    expect(game.playCell(2, 8)).toBe(true)
  })

  test("player 2 plays cell (0, 3)", () => {
    expect(game.playCell(0, 3)).toBe(true)
  })

  test("player 1 plays cell (5, 6)", () => {
    expect(game.playCell(5, 6)).toBe(true)
  })

  test("player 2 plays cell (0, 4)", () => {
    expect(game.playCell(0, 4)).toBe(true)
  })

  test("player 1 plays cell (6, 6)", () => {
    expect(game.playCell(6, 6)).toBe(true)
  })

  test("player 2 plays cell (1, 2)", () => {
    expect(game.playCell(1, 2)).toBe(true)
  })

  test("player 1 plays cell (7, 6)", () => {
    expect(game.playCell(7, 6)).toBe(true)
  })

  test("player 2 plays cell (2, 2)", () => {
    expect(game.playCell(2, 2)).toBe(true)
  })

  test("player 1 plays cell (4, 2)", () => {
    expect(game.playCell(4, 2)).toBe(true)
  })

  test("player 2 plays cell (3, 2)", () => {
    expect(game.playCell(3, 2)).toBe(true)
  })

  test("player 1 plays cell (5, 2)", () => {
    expect(game.playCell(5, 2)).toBe(true)
  })

  test("player 2 plays cell (4, 0)", () => {
    expect(game.playCell(4, 0)).toBe(true)
  })

  test("player 1 plays cell (6, 2)", () => {
    expect(game.playCell(6, 2)).toBe(true)
  })

  test("player 2 plays cell (5, 0)", () => {
    expect(game.playCell(5, 0)).toBe(true)
  })

  test("player 1 plays cell (7, 2)", () => {
    expect(game.playCell(7, 2)).toBe(true)
  })

  test("player 2 plays cell (6, 0)", () => {
    expect(game.playCell(6, 0)).toBe(true)
  })

  test("player 1 plays cell (8, 2)", () => {
    expect(game.playCell(8, 2)).toBe(true)
  })

  test("player 2 plays cell (7, 0)", () => {
    expect(game.playCell(7, 0)).toBe(true)
  })

  test("player 1 plays cell (2, 4)", () => {
    expect(game.playCell(2, 4)).toBe(true)
  })

  test("player 2 plays cell (7, 6)", () => {
    expect(game.playCell(7, 6)).toBe(true)
  })

  test("player 1 plays cell (2, 5)", () => {
    expect(game.playCell(2, 5)).toBe(true)
  })

  test("player 2 plays cell (8, 6)", () => {
    expect(game.playCell(8, 6)).toBe(true)
  })

  test("player 1 plays cell (2, 6)", () => {
    expect(game.playCell(2, 6)).toBe(true)
  })

  test("player 2 plays cell (9, 7)", () => {
    expect(game.playCell(9, 7)).toBe(true)
  })

  test("player 1 plays cell (2, 7)", () => {
    expect(game.playCell(2, 7)).toBe(true)
  })

  test("game over", () => {
    expect(game.isGameOver()).toBe(true)
  })

  test("player 1 wins the game", () => {
    expect(game.getCurrentPlayer()).toBe(player1)
  })

  test("cannot place any cell anymore", () => {
    expect(game.playCell(1, 1)).toBe(false)
  })
})
