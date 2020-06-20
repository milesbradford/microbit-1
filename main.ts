input.onButtonPressed(Button.A, function () {
    music.playMelody("- G C B F - E - ", 120)
    led.plot(4, 1)
    led.plot(1, 1)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    led.plot(4, 4)
    led.plot(1, 3)
    led.plot(4, 3)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("F D G D F D G D ", 120)
})
