const engine = require('raylib')

// Screen data
const screen = {
    width: 800,
    height: 450
}

// Players
// TODO: Incorporate x and y coords into player1, player2 and ball
// Player1 needs to be at the bottom
// Player2 needs to be at the top
// Ball must start in the middle
const player1 = {
    width: 10,
    height: 50,
    color: engine.BLUE,
    x: 0, 
    y: screen.height / 2 - 25
}

const player2 = {
    width: 10,
    height: 50,
    color: engine.RED,
    x: screen.width - 10,
    y: screen.height / 2 - 25
}

const ball = {
    width: 5,
    height: 5,
    color: engine.WHITE,
}


engine.InitWindow(screen.width, screen.height, "pong")
engine.SetTargetFPS(60)

while (!engine.WindowShouldClose()) {
    engine.BeginDrawing();
    engine.ClearBackground(engine.BLACK)
    engine.DrawRectangle(player1.x, player1.y, player1.width, player1.height, player1.color)
    engine.DrawRectangle(player2.x, player2.y,  player2.width, player2.height, player2.color)
    engine.EndDrawing()
}
engine.CloseWindow()
