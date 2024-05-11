import { Cell } from "./Cell"
import { Ship } from "./Ship"

class GameBoard {
  private size: number
  private board: Cell[][]
  private cellsPlayed: Set<number>
  private shipCount: number

  constructor(size: number) {
    this.size = size

    // Add cells to board
    this.board = []
    for (let i = 0; i < size; i++) {
      const row: Cell[] = []
      for (let j = 0; j < size; j++) row.push(new Cell())
      this.board.push(row)
    }

    this.cellsPlayed = new Set()

    this.shipCount = 0
  }

  getSize() {
    return this.size
  }

  private canPlaceShip(ship: Ship, x: number, y: number) {
    if (
      x < 0 ||
      x + ship.getLength() > this.size ||
      y < 0 ||
      y + ship.getLength() > this.size
    )
      return false

    if (ship.getDir() === "horizontal") {
      for (let j = y; j < y + ship.getLength(); j++)
        if (this.board[x][j].getShip()) return false
    } else {
      for (let i = x; i < x + ship.getLength(); i++)
        if (this.board[i][y].getShip()) return false
    }

    return true
  }

  placeShip(ship: Ship, x: number, y: number) {
    if (!this.canPlaceShip(ship, x, y)) return false

    this.shipCount++
    if (ship.getDir() === "horizontal") {
      for (let j = y; j < y + ship.getLength(); j++)
        this.board[x][j].setShip(ship)
    } else {
      for (let i = x; i < x + ship.getLength(); i++)
        this.board[i][y].setShip(ship)
    }

    return true
  }

  private canPlayCell(x: number, y: number) {
    if (x < 0 || x >= this.size || y < 0 || y >= this.size) return false

    const cell = x * this.size + y
    if (this.cellsPlayed.has(cell)) return false

    return true
  }

  playCell(x: number, y: number) {
    if (!this.canPlayCell(x, y)) return false

    const cell = x * this.size + y
    this.cellsPlayed.add(cell)

    const ship = this.board[x][y].getShip()
    if (ship) {
      ship.incrementDamage()
      if (ship.isSunk()) this.shipCount--
    }

    return true
  }

  gameOver() {
    return this.shipCount === 0
  }
}

export { GameBoard }
