import { GameBoard } from "./GameBoard"
import { Player } from "./Player"
import { Ship } from "./Ship"

class Game {
  private player1: Player
  private player2: Player
  private currentPlayer: Player
  private gameOver: boolean

  constructor(
    player1Name: string,
    player2Name: string,
    player1ShipLocations: Array<[Ship, number, number]>,
    player2ShipLocations: Array<[Ship, number, number]>,
  ) {
    this.player1 = new Player(player1Name, new GameBoard(10))
    for (const [ship, x, y] of player1ShipLocations)
      this.player1.getBoard().placeShip(ship, x, y)
    this.player2 = new Player(player2Name, new GameBoard(10))
    for (const [ship, x, y] of player2ShipLocations)
      this.player2.getBoard().placeShip(ship, x, y)

    this.currentPlayer = this.player1

    this.gameOver = false
  }

  isGameOver() {
    return this.gameOver
  }

  getCurrentPlayer() {
    return this.currentPlayer.getName()
  }

  private changeCurrentPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1
  }

  private getOppositePlayerBoard() {
    return this.currentPlayer === this.player1
      ? this.player2.getBoard()
      : this.player1.getBoard()
  }

  playCell(x: number, y: number) {
    if (this.gameOver) return false

    const board = this.getOppositePlayerBoard()

    if (!board.playCell(x, y)) return false

    if (!board.gameOver()) this.changeCurrentPlayer()
    else this.gameOver = true

    return true
  }

  getCellStatusOfPlayer1Board(x: number, y: number) {
    return this.player1.getBoard().getCellStatus(x, y)
  }

  getCellStatusOfPlayer2Board(x: number, y: number) {
    return this.player2.getBoard().getCellStatus(x, y)
  }
}

export { Game }
