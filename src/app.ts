require('./css/main.css')
require('file-loader?name=[name].[ext]!./index.html')
import GameBoard from './components/GameBoard'
import colors from './helpers/colors'

const board: GameBoard = new GameBoard('board')

board.spawnNewBalls()
board.render()
