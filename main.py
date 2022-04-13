bod = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]]
for i in bod:
    led.plot(i[0],i[1])

def on_button_pressed_a():
    for y in range(4):
        basic.pause(3000)
        basic.clear_screen()
        for u in bod:
            u[0] += 1
            led.plot(u[0], u[1])
input.on_button_pressed(Button.A, on_button_pressed_a)