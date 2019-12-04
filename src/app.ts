require('./css/main.css')
import GameBoard from './components/GameBoard'
import colors from './helpers/colors'

const board = new GameBoard('board')

board.spawnNewBalls()
board.render()
