let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
let v = 100
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, v)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, v)
        basic.pause(500)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, v)
    }
})
