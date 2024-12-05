let currentLength = 0
let currentResistance = 0
let voltageCurrent = 0
let avgInitLength = 0
let initLength = 0
let initResistance = 0
let voltageInit = 0
basic.pause(2000)
for (let index = 0; index <= 9; index++) {
    voltageInit = pins.analogReadPin(AnalogPin.P0)
    initResistance = 10000 * voltageInit / (1023 - voltageInit)
    initLength = initResistance / 150
}
basic.pause(500)
serial.writeValue("Inital Length", initLength)
let thresholdVal = avgInitLength * 1.25
basic.forever(function () {
    voltageCurrent = pins.analogReadPin(AnalogPin.P0)
    currentResistance = 10000 * voltageCurrent / (1023 - voltageCurrent)
    currentLength = currentResistance / 150
    serial.writeValue("current Length", currentLength)
    if (currentLength >= thresholdVal) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(100)
})
