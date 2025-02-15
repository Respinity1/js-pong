const engine = require('raylib')

// Screen data
const screen = {
    width: 800,
    height: 450
}

const player1 = {
    width: 10,
    height: 50,
    color: engine.BLUE,
    x: 0, 
    y: screen.height / 2 - 25,
    speed: 5,
    upKey: 0x57, // i
    downKey: 0x53 // k
}

const player2 = {
    width: 10,
    height: 50,
    color: engine.RED,
    x: screen.width - 10,
    y: screen.height / 2 - 25,
    speed: 5,
    upKey: 0x49, // w
    downKey: 0x4B // s
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

    // Draw all objects
    engine.DrawRectangle(player1.x, player1.y, player1.width, player1.height, player1.color)
    engine.DrawRectangle(player2.x, player2.y,  player2.width, player2.height, player2.color)

    // Player 1 movement
    if (engine.IsKeyDown(player1.upKey) && player1.y > 0) {
        player1.y -= player1.speed
    }
    if (engine.IsKeyDown(player1.downKey) && player1.y < screen.height) {
        player1.y += player1.speed
    }

    // Player 2 movement
    if (engine.IsKeyDown(player2.upKey) && player2.y > 0) {
        player2.y -= player2.speed
    }
    if (engine.IsKeyDown(player2.downKey) && player1.y < screen.height) {
        player2.y += player2.speed
    }

    engine.EndDrawing()
}
engine.CloseWindow()
