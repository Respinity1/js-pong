const engine = require('raylib')

// Screen data
const screen = {
    width: 800,
    height: 450
}

const player1 = {
    width: 10,
    height: 80,
    color: engine.BLUE,
    x: 0, 
    y: screen.height / 2 - 40,
    speed: 5,
    upKey: 0x57, // i
    downKey: 0x53 // k
}

const player2 = {
    width: 10,
    height: 80,
    color: engine.RED,
    x: screen.width - 10,
    y: screen.height / 2 - 40,
    speed: 5,
    upKey: 0x49, // w
    downKey: 0x4B // s
}

const ball = {
    radius: 10,
    color: engine.WHITE,
    x: screen.width / 2,
    y: screen.height / 2,
    vx: (Math.random() > 0.5 ? 1 : -1), // random x direction
    vy: (Math.random() * 2 - 1), // random y direction
    speed: 5
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
    engine.DrawCircle(300, 200, 30, engine.GREEN)

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

    ball.x = ball.x + (ball.vx * ball.speed)
    ball.y = ball.y + (ball.vy * ball.speed)

    if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= screen.height) {
        ball.vy *= -1
    }

    if (
        ball.x - ball.radius <= player1.x + player1.width &&
        ball.y >= player1.y &&
        ball.y <= player1.y + player1.height
    ) {
        ball.vx *= -1 // Reverse X direction
        let impact = (ball.y - (player1.y + player1.height / 2)) / (player1.height / 2)
        ball.vy = impact * 2 // Adjust angle based on where it hits
        ball.speed += 0.2 // Slightly increase speed
    }

    if (
        ball.x + ball.radius >= player2.x &&
        ball.y >= player2.y &&
        ball.y <= player2.y + player2.height
    ) {
        ball.vx *= -1 // Reverse X direction
        let impact = (ball.y - (player2.y + player2.height / 2)) / (player2.height / 2)
        ball.vy = impact * 2 // Adjust angle based on where it hits
        ball.speed += 0.2 // Slightly increase speed
    }

    // Reset Ball on Score
    if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= screen.width) {
        ball.x = screen.width / 2
        ball.y = screen.height / 2
        ball.speed = 4
        ball.vx = (Math.random() > 0.5 ? 1 : -1)
        ball.vy = (Math.random() * 2 - 1)
    }

    engine.EndDrawing()
}
engine.CloseWindow()
