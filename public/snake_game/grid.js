const GRID_HEIGHT = 10
const GRID_WIDTH = 35

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_WIDTH) + 1,
    y: Math.floor(Math.random() * GRID_HEIGHT) + 1
  }
}

export function outsideGrid(position) {
  return (
    position.x < 1 || position.x > GRID_WIDTH ||
    position.y < 1 || position.y > GRID_HEIGHT
  )
}