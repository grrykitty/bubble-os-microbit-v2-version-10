basic.show_string("Running bubble.os")
basic.show_leds("""
    # # # # .
    # . . # .
    # # # # #
    # . . . #
    # # # # #
    """)
basic.show_string("BUBBLE")
basic.show_string("Hello!")

def on_forever():
    if input.light_level() > 70:
        basic.show_leds("""
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            """)
        basic.show_string("Hello! Time to get up!")
        music._play_default_background(music.built_in_playable_melody(Melodies.RINGTONE),
            music.PlaybackMode.UNTIL_DONE)
    if input.light_level() < 85:
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # . .
            . # # # .
            . . . . .
            """)
basic.forever(on_forever)
