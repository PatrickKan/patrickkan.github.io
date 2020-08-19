import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, resetGame } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

export function playSnakeGame2() {
  let lastRenderTime = 0
  let gameOver = false
  const gameBoard = document.getElementById('game-board')
  var requestID = 0;

  function main(currentTime) {
    if (gameOver) {
      resetGame();
      gameOver = false;
      window.cancelAnimationFrame(requestID);
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


    lastRenderTime = currentTime

    update()
    draw()
  }

  requestID = window.requestAnimationFrame(main)


  function update() {
    updateSnake()
    updateFood()
    checkDeath()
  }

  function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
  }

  function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
  }
}