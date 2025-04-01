input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, 50)
    Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, 50)
    basic.pause(200)
    if (Kitronik_Move_Motor.measure() <= 2) {
    	
    } else {
    	
    }
})
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
basic.pause(1000)
basic.showString("23")
basic.forever(function () {
    moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(2)
    moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Violet))
})
