import { Ship } from "./Ship"

class Cell {
  private ship: Ship | null
  private played: boolean

  constructor() {
    this.ship = null
    this.played = false
  }

  getShip() {
    return this.ship
  }

  setShip(ship: Ship) {
    this.ship = ship
  }

  isPlayed() {
    return this.played
  }

  playCell() {
    this.played = true
  }
}

export { Cell }
