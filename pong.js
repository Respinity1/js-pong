const engine = require('raylib')
const screen = {
    width: 800,
    height: 450
}
engine.InitWindow(screen.width, screen.height, "pong")
engine.SetTargetFPS(60)


while (!engine.WindowShouldClose()) {
    engine.BeginDrawing();
    engine.ClearBackground(engine.RAYWHITE)
    engine.DrawText("Congrats! You created your first node-raylib window!", 120, 200, 20, engine.LIGHTGRAY)
    engine.EndDrawing()
}
engine.CloseWindow()
