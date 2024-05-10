class Ship {
  length: number
  direction: string
  damage: number

  constructor(length: number) {
    this.length = length
    this.direction = "horizontal"
    this.damage = 0
  }

  getLength() {
    return this.length
  }

  getDir() {
    return this.direction
  }

  changeDir() {
    this.direction = this.direction === "horizontal" ? "vertical" : "horizontal"
  }

  getDamage() {
    return this.damage
  }

  incrementDamage() {
    if (this.damage < this.length) this.damage++
  }

  isSunk() {
    return this.damage === this.length
  }
}

class Carrier extends Ship {
  constructor() {
    super(5)
  }
}

class Battleship extends Ship {
  constructor() {
    super(4)
  }
}

class Destroyer extends Ship {
  constructor() {
    super(3)
  }
}

class Submarine extends Ship {
  constructor() {
    super(3)
  }
}

class PatrolShip extends Ship {
  constructor() {
    super(2)
  }
}

export { Carrier, Battleship, Destroyer, Submarine, PatrolShip }
