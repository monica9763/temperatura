let temperatura = 0
input.onGesture(Gesture.Shake, function () {
    temperatura = input.temperature()
    basic.showNumber(temperatura)
    basic.pause(5000)
    basic.clearScreen()
    basic.showString("agitare")
    basic.showIcon(IconNames.Diamond)
})
basic.forever(function () {
	
})
