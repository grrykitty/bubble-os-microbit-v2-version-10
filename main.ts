input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    WiFiBit.connectToWiFiNetwork("Garretts", "Draco4ever!")
})
IR.IR_callbackUser(function () {
    aicococam.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
    basic.showString("Welcome")
})
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
music.play(music.stringPlayable("E A B G E D D G ", 120), music.PlaybackMode.UntilDone)
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
