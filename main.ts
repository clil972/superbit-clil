input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        86,
        SuperBit.enMotors.M4,
        41
        )
        basic.pause(2000)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -86,
        SuperBit.enMotors.M4,
        -86
        )
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    SuperBit.MotorStopAll()
    basic.showIcon(IconNames.Heart)
})
