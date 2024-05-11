import { Ship } from "./Ship"

class Cell {
  private ship: Ship | null
  constructor() {
    this.ship = null
  }

  getShip() {
    return this.ship
  }

  setShip(ship: Ship) {
    this.ship = ship
  }
}

export { Cell }
