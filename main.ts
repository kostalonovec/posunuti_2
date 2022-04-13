let bod = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]]
for (let i of bod) {
    led.plot(i[0], i[1])
}
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    for (let y = 0; y < 4; y++) {
        basic.pause(3000)
        basic.clearScreen()
        for (let u of bod) {
            u[0] += 1
            led.plot(u[0], u[1])
        }
    }
})
