input.buttonA1.onEvent(ButtonEvent.Click, function () {
    music.playMelody("G B A G C5 B A B ", 120)
    zumo.rotateMotor(75, ZumoMotorRotation.Forward)
})
input.buttonD12.onEvent(ButtonEvent.Click, function () {
    zumo.clear()
    zumo.writeStringNewLine(zumo.readString(zumo.readLine()))
})
zumo.createI2C(pins.SCL, pins.SDA)
zumo.init(128, 64)
zumo.Initialization(Lightype.DIGITAL)
zumo.writeStringNewLine("ready!")
