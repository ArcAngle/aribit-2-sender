let Throttle = 0
let ARM = 0
let Pitch = 0
let Roll = 0
input.onButtonPressed(Button.A, function () {
    if (Throttle <= 40) {
        Throttle += -5
    } else {
        Throttle += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (ARM) {
        ARM = 0
    } else {
        ARM = 1
    }
    Throttle = 0
})
input.onButtonPressed(Button.B, function () {
    if (Throttle <= 40) {
        Throttle += 5
    } else {
        Throttle += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    ARM = 0
    Throttle = 0
})
basic.forever(function () {
    Pitch = input.rotation(Rotation.Pitch)
    Roll = input.rotation(Rotation.Roll)
    basic.clearScreen()
    if (ARM) {
        led.plot(0, 0)
    }
    led.plot(0, Math.map(Throttle, 0, 100, 4, 0))
    led.plot(Math.map(Roll, -45, 45, 0, 4), Math.map(Pitch, -45, 45, 0, 4))
})
