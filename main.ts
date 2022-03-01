input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.SmallHeart)
    music.playTone(330, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.SmallHeart)
    music.playTone(392, music.beat(BeatFraction.Whole))
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
