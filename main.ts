input.onButtonPressed(Button.A, function () {
    activate = 1
})
let activate = 0
basic.pause(1000)
basic.showString("23")
basic.forever(function () {
    if (activate == 1) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 26)
        if (Kitronik_Move_Motor.measure() < 6) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 26)
            basic.pause(1000)
            Kitronik_Move_Motor.stop()
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, 10)
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, 26)
            basic.pause(500)
        }
    }
})
