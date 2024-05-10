import { describe, expect, test } from "vitest"
import { Carrier, Battleship, Destroyer, Submarine, PatrolShip } from "../Ship"

describe("carrier test suite", () => {
  const carrier = new Carrier()

  test("carrier has 5 length", () => {
    expect(carrier.getLength()).toBe(5)
  })

  test("carrier is horizontal", () => {
    expect(carrier.getDir()).toBe("horizontal")
  })

  test("carrier is vertical after changing it's direction", () => {
    carrier.changeDir()
    expect(carrier.getDir()).toBe("vertical")
  })

  test("carrier has 0 damage", () => {
    expect(carrier.getDamage()).toBe(0)
  })

  test("carrier is not sunk", () => {
    expect(carrier.isSunk()).toBe(false)
  })

  test("carrier's damage increments by 1", () => {
    carrier.incrementDamage()
    expect(carrier.getDamage()).toBe(1)
  })

  test("carrier's damage increments by 2", () => {
    carrier.incrementDamage()
    expect(carrier.getDamage()).toBe(2)
  })

  test("carrier's damage increments by 3", () => {
    carrier.incrementDamage()
    expect(carrier.getDamage()).toBe(3)
  })

  test("carrier's damage increments by 4", () => {
    carrier.incrementDamage()
    expect(carrier.getDamage()).toBe(4)
  })

  test("carrier's damage increments by 5", () => {
    carrier.incrementDamage()
    expect(carrier.getDamage()).toBe(5)
  })

  test("carrier is sunk", () => {
    expect(carrier.isSunk()).toBe(true)
  })

  test("carrier's damage does not increment anymore", () => {
    carrier.incrementDamage()
    expect(carrier.getDamage()).toBe(5)
  })
})

describe("battleship test suite", () => {
  const battleship = new Battleship()

  test("battleship has 4 length", () => {
    expect(battleship.getLength()).toBe(4)
  })

  test("battleship is horizontal", () => {
    expect(battleship.getDir()).toBe("horizontal")
  })

  test("battleship is vertical after changing it's direction", () => {
    battleship.changeDir()
    expect(battleship.getDir()).toBe("vertical")
  })

  test("battleship has 0 damage", () => {
    expect(battleship.getDamage()).toBe(0)
  })

  test("battleship is not sunk", () => {
    expect(battleship.isSunk()).toBe(false)
  })

  test("battleship's damage increments by 1", () => {
    battleship.incrementDamage()
    expect(battleship.getDamage()).toBe(1)
  })

  test("battleship's damage increments by 2", () => {
    battleship.incrementDamage()
    expect(battleship.getDamage()).toBe(2)
  })

  test("battleship's damage increments by 3", () => {
    battleship.incrementDamage()
    expect(battleship.getDamage()).toBe(3)
  })

  test("battleship's damage increments by 4", () => {
    battleship.incrementDamage()
    expect(battleship.getDamage()).toBe(4)
  })

  test("battleship is sunk", () => {
    expect(battleship.isSunk()).toBe(true)
  })

  test("battleship's damage does not increment anymore", () => {
    battleship.incrementDamage()
    expect(battleship.getDamage()).toBe(4)
  })
})

describe("destroyer test suite", () => {
  const destroyer = new Destroyer()

  test("destroyer has 3 length", () => {
    expect(destroyer.getLength()).toBe(3)
  })

  test("destroyer is horizontal", () => {
    expect(destroyer.getDir()).toBe("horizontal")
  })

  test("destroyer is vertical after changing it's direction", () => {
    destroyer.changeDir()
    expect(destroyer.getDir()).toBe("vertical")
  })

  test("destroyer has 0 damage", () => {
    expect(destroyer.getDamage()).toBe(0)
  })

  test("destroyer is not sunk", () => {
    expect(destroyer.isSunk()).toBe(false)
  })

  test("destroyer's damage increments by 1", () => {
    destroyer.incrementDamage()
    expect(destroyer.getDamage()).toBe(1)
  })

  test("destroyer's damage increments by 2", () => {
    destroyer.incrementDamage()
    expect(destroyer.getDamage()).toBe(2)
  })

  test("destroyer's damage increments by 3", () => {
    destroyer.incrementDamage()
    expect(destroyer.getDamage()).toBe(3)
  })

  test("destroyer is sunk", () => {
    expect(destroyer.isSunk()).toBe(true)
  })

  test("destroyer's damage does not increment anymore", () => {
    destroyer.incrementDamage()
    expect(destroyer.getDamage()).toBe(3)
  })
})

describe("submarine test suite", () => {
  const submarine = new Submarine()

  test("submarine has 3 length", () => {
    expect(submarine.getLength()).toBe(3)
  })

  test("submarine is horizontal", () => {
    expect(submarine.getDir()).toBe("horizontal")
  })

  test("submarine is vertical after changing it's direction", () => {
    submarine.changeDir()
    expect(submarine.getDir()).toBe("vertical")
  })

  test("submarine has 0 damage", () => {
    expect(submarine.getDamage()).toBe(0)
  })

  test("submarine is not sunk", () => {
    expect(submarine.isSunk()).toBe(false)
  })

  test("submarine's damage increments by 1", () => {
    submarine.incrementDamage()
    expect(submarine.getDamage()).toBe(1)
  })

  test("submarine's damage increments by 2", () => {
    submarine.incrementDamage()
    expect(submarine.getDamage()).toBe(2)
  })

  test("submarine's damage increments by 3", () => {
    submarine.incrementDamage()
    expect(submarine.getDamage()).toBe(3)
  })

  test("submarine is sunk", () => {
    expect(submarine.isSunk()).toBe(true)
  })

  test("submarine's damage does not increment anymore", () => {
    submarine.incrementDamage()
    expect(submarine.getDamage()).toBe(3)
  })
})

describe("patrol ship test suite", () => {
  const patrolShip = new PatrolShip()

  test("patrol ship has 2 length", () => {
    expect(patrolShip.getLength()).toBe(2)
  })

  test("patrol ship is horizontal", () => {
    expect(patrolShip.getDir()).toBe("horizontal")
  })

  test("patrol ship is vertical after changing it's direction", () => {
    patrolShip.changeDir()
    expect(patrolShip.getDir()).toBe("vertical")
  })

  test("patrol ship has 0 damage", () => {
    expect(patrolShip.getDamage()).toBe(0)
  })

  test("patrol ship is not sunk", () => {
    expect(patrolShip.isSunk()).toBe(false)
  })

  test("patrol ship's damage increments by 1", () => {
    patrolShip.incrementDamage()
    expect(patrolShip.getDamage()).toBe(1)
  })

  test("patrol ship's damage increments by 2", () => {
    patrolShip.incrementDamage()
    expect(patrolShip.getDamage()).toBe(2)
  })

  test("patrol ship is sunk", () => {
    expect(patrolShip.isSunk()).toBe(true)
  })

  test("patrol ship's damage does not increment anymore", () => {
    patrolShip.incrementDamage()
    expect(patrolShip.getDamage()).toBe(2)
  })
})
