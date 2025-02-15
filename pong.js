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
    radius: 5,
    color: engine.WHITE,
    x: 5 / 2,
    y: 5 / 2,
    Vx: -1,
    Vy: 1
}

engine.InitWindow(screen.width, screen.height, "pong")
engine.SetTargetFPS(60)

while (!engine.WindowShouldClose()) {
    engine.BeginDrawing();
    engine.ClearBackground(engine.BLACK)

    // Draw all objects
    engine.DrawRectangle(player1.x, player1.y, player1.width, player1.height, player1.color)
    engine.DrawRectangle(player2.x, player2.y,  player2.width, player2.height, player2.color)
    engine.DrawCircle(ball.x, ball.y, ball.radius, ball.color)

    // Player 1 movement
    if (engine.IsKeyDown(player1.upKey) && player1.y > 0) {
        player1.y -= player1.speed
    }
    if (engine.IsKeyDown(player1.downKey) && player1.y + player1.height < screen.height) {
        player1.y += player1.speed
    }

    // Player 2 movement
    if (engine.IsKeyDown(player2.upKey) && player2.y > 0) {
        player2.y -= player2.speed
    }
    if (engine.IsKeyDown(player2.downKey) && player2.y + player2.height < screen.height) {
        player2.y += player2.speed
    }

    //ball velocity
    if (engine.CheckCollisionCircleRec({x: ball.x, y: ball.y}, ball.radius, {x: player1.x, y: player1.y, width: player1.width, height: player1.height})) {
        ball.vx *= -1
        ball.vy *= -1
    }

    if (engine.CheckCollisionCircleRec({x: ball.x, y: ball.y}, ball.radius, {x: player2.x, y: player2.y, width: player2.width, height: player2.height})) {
        ball.vx *= -1
        ball.vy *= -1
    }

    ball.x = ball.x + (ball.vx * ball.speed)
    ball.y = ball.y + (ball.vy * ball.speed)

    engine.EndDrawing()
}
engine.CloseWindow()
