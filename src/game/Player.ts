import { GameBoard } from "./GameBoard"

class Player {
  private name: string
  private board: GameBoard

  constructor(name: string, board: GameBoard) {
    this.name = name
    this.board = board
  }

  getName() {
    return this.name
  }

  getBoard() {
    return this.board
  }
}

export { Player }
