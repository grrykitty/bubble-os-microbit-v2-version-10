input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    WiFiBit.connectToWiFiNetwork("Garretts", "Draco4ever!")
})
//This module is for connecting to WiFi
IR.IR_callbackUser(function () {
    aicococam.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
    basic.showString("Welcome")
})
//This module is for detecting faces(make sure you have a Aicococam)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    # # # # .
    # . . # .
    # # # # #
    # . . . #
    # # # # #
    `)
basic.showString("BUBBLE")
basic.showString("Hello!")
//This module is the hello command block.
music.play(music.stringPlayable("E A B G E D D G ", 120), music.PlaybackMode.UntilDone)
//This command makes a sound when the code is active.
basic.forever(function () {
    if (input.lightLevel() > 70) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.showString("Hello! Time to get up!")
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.UntilDone)
    }
    //This music command plays when it detects light.
    if (input.lightLevel() < 70) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # . .
            . # # # .
            . . . . .
            `)
    }
})
//This module is for the alarm.
