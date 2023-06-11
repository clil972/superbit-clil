input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        50,
        SuperBit.enMotors.M4,
        50
        )
        basic.pause(2000)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -37,
        SuperBit.enMotors.M1,
        -37
        )
        basic.pause(500)
    }
    SuperBit.MotorStopAll()
    basic.showIcon(IconNames.Heart)
})
