game.splash("welcome to ")

game.splash("")

let permaSpeed=50

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (herald2, enemy2) {
    info.changeLifeBy(-1)
    enemy2.destroy(effects.disintegrate, 200)
    scene.cameraShake(4, 500)
    spawnEnemy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (herald2, enemy2) {
    info.changeLifeBy(1)
    if (permaSpeed<=100) {
        permaSpeed=permaSpeed+10
    }
    enemy2.destroy(effects.disintegrate, 200)
    scene.cameraShake(4, 500)
    spawnBuff()
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    recent = "right"
})

function spawnBuff () {
    buff = sprites.create(buffImgs[randint(0, 1)], SpriteKind.Food)
    buff.setPosition(randint(-160, 160), 0)
    buff.setVelocity(randint(-50, 50), 0)
    buff.ay = 25
}

function spawnEnemy () {
    enemy = sprites.create(enemyImgs[randint(0, 2)], SpriteKind.Enemy)
    enemy.setPosition(randint(-160, 160), 0)
    enemy.setVelocity(50, 0)
    enemy.ay = 70
    enemy.setBounceOnWall(true)
}
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    recent = "left"
})
let animationCounter = 0
let enemy: Sprite = null
let recent = ""
let buff: Sprite = null

let herald = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c c . . . 
    . . . . . . c 5 5 5 5 5 c c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . . c b b b b 1 b b c c . . 
    . . . . c 1 1 b b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 b b c c 
    . . c c d 1 1 1 b 1 b 1 5 5 5 c 
    . . c c d 1 c 1 1 1 b 1 b b 5 c 
    . c c d d 1 1 1 1 1 b 1 f b 5 c 
    f d d d 1 1 1 1 1 b b b f . c c 
    f f f f f 1 1 1 b b 5 5 5 f . . 
    . . . . . f f f 5 5 5 5 5 f . . 
    . . . . . . . . f f f f f f . . 
    `, SpriteKind.Player)
let heraldRight = [
img`
    . . . . . . . . . . . . . . . . 
    . . . c c c c c c . . . . . . . 
    . . c c 5 5 5 5 5 c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c . . . . . 
    . c 5 5 5 b b b b b b c . . . . 
    . . c c b b 1 b b b b c . . . . 
    . . . c 1 1 1 b b 1 1 c . . . . 
    . . . c 1 1 1 b 1 1 1 1 c . . . 
    c c b b 1 1 1 b 1 1 1 1 c . . . 
    c 5 5 5 1 b 1 b 1 1 1 d c c . . 
    c 5 b b 1 b 1 1 1 c 1 d c c . . 
    c 5 b f 1 b 1 1 1 1 1 d d c c . 
    c c . f b b b 1 1 1 1 1 d d d f 
    . . f 5 5 5 b b 1 1 1 f f f f f 
    . . f 5 5 5 5 5 f f f . . . . . 
    . . f f f f f f . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . .
    . . . c c c c c . . . . . . . .
    . . c 5 5 5 5 5 c c . . . . . .
    . c 5 5 5 5 5 5 5 5 c . . . . .
    . c 5 5 5 b b b b b b c . . . .
    . . c c b b 1 b b 1 1 c . . . .
    . . . c 1 1 1 b b 1 1 1 c . . .
    c c . c 1 1 1 b 1 1 1 1 c . . .
    c 5 b b 1 1 1 b 1 1 1 d c . . .
    c 5 5 5 1 b 1 b 1 c 1 d c c . .
    c 5 b b 1 b 1 1 1 1 1 d d c c .
    c c . f 1 b b 1 1 1 1 1 d d d f
    . . . f b b b 1 1 1 1 1 1 f f f
    . . f 5 5 b b b 1 1 1 f f . . .
    . . f 5 5 5 5 5 f f f . . . . .
    . . f f f f f f . . . . . . . .
`,
img`
    . . c c c c c . . . . . . . . . 
    . c c 5 5 5 5 c c c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c c . . . . 
    . c 5 5 5 b b b b b b c . . . . 
    . . c c b b 1 b b 1 1 1 c . . . 
    c c . c 1 1 1 b 1 1 1 1 c . . . 
    c 5 b c 1 1 1 b 1 1 1 d c . . . 
    c 5 b b 1 1 1 b 1 c 1 d c c . . 
    c 5 5 5 1 b 1 b 1 1 1 d d c c c 
    c c b b 1 b 1 1 1 1 1 1 d d d f 
    . . . f 1 b b 1 1 1 1 1 1 f f . 
    . . . f b b b 1 1 1 1 1 f . . . 
    . . . f 5 5 b b 1 1 f f . . . . 
    . . . f 5 5 5 5 5 f . . . . . . 
    . . . f f f f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . c c c c c . . . . . . . . 
    . . c 5 5 5 5 5 c c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c . . . . . 
    . c 5 5 5 b b b b b b c . . . . 
    . . c c b b 1 b b 1 1 c . . . . 
    . . . c 1 1 1 b b 1 1 1 c . . . 
    c c . c 1 1 1 b 1 1 1 1 c . . . 
    c 5 b b 1 1 1 b 1 1 1 d c . . . 
    c 5 5 5 1 b 1 b 1 c 1 d c c . . 
    c 5 b b 1 b 1 1 1 1 1 d d c c . 
    c c . f 1 b b 1 1 1 1 1 d d d f 
    . . . f b b b 1 1 1 1 1 1 f f f 
    . . f 5 5 b b b 1 1 1 f f . . . 
    . . f 5 5 5 5 5 f f f . . . . . 
    . . f f f f f f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
]
let heraldLeft = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c c . . . 
    . . . . . . c 5 5 5 5 5 c c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . . c b b b b 1 b b c c . . 
    . . . . c 1 1 b b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 b b c c 
    . . c c d 1 1 1 b 1 b 1 5 5 5 c 
    . . c c d 1 c 1 1 1 b 1 b b 5 c 
    . c c d d 1 1 1 1 1 b 1 f b 5 c 
    f d d d 1 1 1 1 1 b b b f . c c 
    f f f f f 1 1 1 b b 5 5 5 f . . 
    . . . . . f f f 5 5 5 5 5 f . . 
    . . . . . . . . f f f f f f . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c c . . . 
    . . . . . . c c 5 5 5 5 5 c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . . c 1 1 b b 1 b b c c . . 
    . . . c 1 1 1 b b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 c . c c 
    . . . c d 1 1 1 b 1 1 1 b b 5 c 
    . . c c d 1 c 1 b 1 b 1 5 5 5 c 
    . c c d d 1 1 1 1 1 b 1 b b 5 c 
    f d d d 1 1 1 1 1 b b 1 f . c c 
    f f f 1 1 1 1 1 1 b b b f . . . 
    . . . f f 1 1 1 b b b 5 5 f . . 
    . . . . . f f f 5 5 5 5 5 f . . 
    . . . . . . . . f f f f f f . . 
    `,
img`
    . . . . . . . . . c c c c c . . 
    . . . . . . c c c 5 5 5 5 c c . 
    . . . . c c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . c 1 1 1 b b 1 b b c c . . 
    . . . c 1 1 1 1 b 1 1 1 c . c c 
    . . . c d 1 1 1 b 1 1 1 c b 5 c 
    . . c c d 1 c 1 b 1 1 1 b b 5 c 
    c c c d d 1 1 1 b 1 b 1 5 5 5 c 
    f d d d 1 1 1 1 1 1 b 1 b b c c 
    . f f 1 1 1 1 1 1 b b 1 f . . . 
    . . . f 1 1 1 1 1 b b b f . . . 
    . . . . f f 1 1 b b 5 5 f . . . 
    . . . . . . f 5 5 5 5 5 f . . . 
    . . . . . . . f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . c c c c c . . . 
    . . . . . . c c 5 5 5 5 5 c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . . c 1 1 b b 1 b b c c . . 
    . . . c 1 1 1 b b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 c . c c 
    . . . c d 1 1 1 b 1 1 1 b b 5 c 
    . . c c d 1 c 1 b 1 b 1 5 5 5 c 
    . c c d d 1 1 1 1 1 b 1 b b 5 c 
    f d d d 1 1 1 1 1 b b 1 f . c c 
    f f f 1 1 1 1 1 1 b b b f . . . 
    . . . f f 1 1 1 b b b 5 5 f . . 
    . . . . . f f f 5 5 5 5 5 f . . 
    . . . . . . . . f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    `
]
controller.moveSprite(herald, permaSpeed, 0)
scene.setBackgroundImage(img`
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333d111d33333333333333333333333333333333333d111d33333333333333333333333333333333333d111d33333333333333333333333333333333333d111d3333333333333333333333333
    33333333d1111111d3333333333333333333333333333333d1111111d3333333333333333333333333333333d1111111d3333333333333333333333333333333d1111111d33333333333333333333333
    3333333d111111111d33333333333333333333333333333d111111111d33333333333333333333333333333d111111111d33333333333333333333333333333d111111111d3333333333333333333333
    3333333111111111113d111d33333333333333333333333111111111113d111d33333333333333333333333111111111113d111d33333333333333333333333111111111113d111d3333333333333333
    333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333
    33333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d3333
    33d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d33
    3111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d3
    11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d
    1111111111111111111a5a1111111119111111111111111111111111111a5a1111111119111111111111111111111111111a5a1111111119111111111111111111111111111a5a111111111911111111
    111111111111111133a353a33111119991111111111111111111111133a353a33111119991111111111111111111111133a353a33111119991111111111111111111111133a353a33111119991111111
    3111111111111111a3555553a11111191111113a3111111111111111a3555553a11111191111113a3111111111111111a3555553a11111191111113a3111111111111111a3555553a11111191111113a
    a1111111911111111a55555a11111111111111a5a1111111911111111a55555a11111111111111a5a1111111911111111a55555a11111111111111a5a1111111911111111a55555a11111111111111a5
    3a3111199911111111a555a11111111111113a353a3111199911111111a555a11111111111113a353a3111199911111111a555a11111111111113a353a3111199911111111a555a11111111111113a35
    55a111119111111111a535a1111111111111a55555a111119111111111a535a1111111111111a55555a111119111111111a535a1111111111111a55555a111119111111111a535a1111111111111a555
    5a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a55
    5a11111111111111111111111111111111111a535a11111111111111111111111111111111111a535a11111111111111111111111111111111111a535a11111111111111111111111111111111111a53
    a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3
    1111111111aa11111111111a355aa111111111111111111111aa11111111111a355aa111111111111111111111aa11111111111a355aa111111111111111111111aa11111111111a355aa11111111111
    111111111a35a1111191111a5555aa11aaaaa111111111111a35a1111191111a5555aa11aaaaa111111111111a35a1111191111a5555aa11aaaaa111111111111a35a1111191111a5555aa11aaaaa111
    11111111a555a1111999111a55555aaa35555a1111111111a555a1111999111a55555aaa35555a1111111111a555a1111999111a55555aaa35555a1111111111a555a1111999111a55555aaa35555a11
    111aaaaaa555a1111191111a5555533555555a11111aaaaaa555a1111191111a5555533555555a11111aaaaaa555a1111191111a5555533555555a11111aaaaaa555a3111191111a5555533555555a11
    11a555533955a1111111111a3555555995555a1111a555533955a1111111111a3555555995555a1111a555533955a1111111111a3555555995555a1111a555533955a3111111111a3555555995555a11
    11a5555555553a111111111aa55555599555aa1111a5555555553a311111111aa55555599555aa1111a5555555553a311111111aa55555599555aa1111a5555555553a311111111aa55555599555aa11
    11aa5555555553a11111111aa55555555553a31111aa5555555553a11111111aa55555555553a11111aa5555555553a31111111aa55555555553a11111aa5555555553a11111111aa55555555553a111
    111aa5555555555a111111aa355555555553aa11113aa5555555555a111111aa355555555553aa11111aa5555555555a111111aa355555555553aa11111aa5555555555a111111aa355555555553aa11
    111aa55555555555a1111aa55555555555553aa1113aa55555555555a1111aa55555555555553aa1111aa55555555555a1111aa55555555555553aa1111aa55555555555a1111aa55555555555553aa1
    11aa55555555555aaa11a35555555555555555a313aa55555555555aaa11a35555555555555555a111aa55555555555aaa11a35555555555555555a111aa55555555555aaa11a35555555555555555a1
    11a555555555553a39aa3555555555555555553399a555555555553a39aa3555555555555555553399a555555555553a39aa3555555555555555553311a555555555553a39aa35555555555555555533
    31a5555555553aaa993a5555555555555555539939a5555555553aaa993a5555555555555555539939a5555555553aaa993a5555555555555555539939a5555555553aaa993a55555555555555555399
    3333555335553339999a355555555555555533993333555335553339999a355555555555555533993333555335553339999a355555555555555533993333555335553339999a35555555555555553399
    9333aaaa35553335599a333aaa355555555539999333aaaa35553335599a333aaa355555555539999333aaaa35553335599a333aaa355555555539999333aaaa35553335599a333aaa35555555553999
    9333399aa55999955993aaaaaaa55555333339999333399aa55999955993aaaaaaa55555333339999333399aa55999955993aaaaaaa55555333339999333399aa55999955993aaaaaaa5555533333999
    99999399aa5999999999999a9aa55555a999999999999399aa5999999999999a9aa55555a999999999999399aa5999999999999a9aa55555a999999999999399aa5999999999999a9aa55555a9999999
    999933999aa399999999999393a55553a3999999999933999aa399999999999393a55553a3999999999933999aa399999999999393a55553a3999999999933999aa399999999999393a55553a3999999
    9993339999933999999999939335555a333999999993339999933999999999939335555a333999999993339999933999999999939335555a333999999993339999933999999999939335555a33399999
    9933399999933999999993339333553399339999993339999993399999999333933355339933999999333999999339999999933393335533993399999933399999933999999993339333553399339999
    9933999999939999999993399933333999339999993399999993999999999339993333399933999999339999999399999999933999333339993399999933999999939999999993399933333999339999
    9993999999939993399993999999339999399933999399999993999339999399999933999939993399939999999399933999939999993399993999339993999999939993399993999999339999399933
    3993999999939933339993999999999999399333399399999993993333999399999999999939933339939999999399333399939999999999993993333993999999939933339993999999999999399333
    3333999999933333333993999999999999333399333399999993333333399399999999999933339933339999999333333339939999999999993333993333999999933333333993999999999999333399
    3333999999933399933333999999999999333999333399999993339993333399999999999933399933339999999333999333339999999999993339993333999999933399933333999999999999333999
    9999999999999999993339999999999999999999999999999999999999333999999999999999999999999999999999999933399999999999999999999999999999999999993339999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999991119999999999999999999999999999999999999111999999999999999999999999999999999999911199999999999999999999999999999999999991119999999999
    9999999999999999999999999111111199999999999999999999999999999999911111119999999999999999999999999999999991111111999999999999999999999999999999999111111199999999
    9999999999999999999999991111111119999999999999999999999999999999111111111999999999999999999999999999999911111111199999999999999999999999999999991111111119999999
    9999999999999999999999911111111111991119999999999999999999999991111111111199111999999999999999999999999111111111119911199999999999999999999999911111111111991119
    1999999999999999999999911111111111911111199999999999999999999991111111111191111119999999999999999999999111111111119111111999999999999999999999911111111111911111
    1999911111199999999999911111111111111111199991111119999999999991111111111111111119999111111999999999999111111111111111111999911111199999999999911111111111111111
    1991111111111999999119991111111111111111199111111111199999911999111111111111111119911111111119999991199911111111111111111991111111111999999119991111111111111111
    1911111111111199911111191111111111111111191111111111119991111119111111111111111119111111111111999111111911111111111111111911111111111199911111191111111111111111
    1111111111111119111111119111111111111111111111111111111911111111911111111111111111111111111111191111111191111111111111111111111111111119111111119111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
let enemyImgs = [img`
    . . d e e e e e e e e e e e e . 
    . . d e e e e e e e e e e e e . 
    . . d e e e e e 1 1 e e e e e . 
    . . d e e e e e 1 1 e e e e e . 
    . . d e e e e e 1 1 e e e e e . 
    . . d e e 1 1 1 1 1 1 1 1 e e . 
    . . d e e 1 1 1 1 1 1 1 1 e e . 
    . . d e e e e e 1 1 e e e e e . 
    . . d e e e e e 1 1 e e e e e . 
    . . d e e e e e 1 1 e e e e e . 
    . . d e e e e e 1 1 e e e e e . 
    . . d e e e e e 1 1 e e e e e . 
    . . d e e e e e 1 1 e e e e e . 
    . . d e e e e e 1 1 e e e e e . 
    . . d e e e e e e e e e e e e . 
    . . d e e e e e e e e e e e e . 
    `, img`
        . . . . . . . f f . . . . . . .
        . . . . . . f d d f . . . . . .
        . . . . . . f 1 1 f . . . . . .
        . . . . . f 1 1 1 1 f . . . . .
        . . . . . f 1 1 1 1 f . . . . .
        . . . . . f 1 1 1 1 f . . . . .
        . . . . f 1 1 2 2 1 1 f . . . .
        . . . . f 1 2 f f 2 1 f . . . .
        . . . . f 1 2 f f 2 1 f . . . .
        . . . . f 1 1 2 2 1 1 f . . . .
        . . . . . f 1 1 1 1 f . . . . .
        . . . . . f 1 1 1 1 f . . . . .
        . . . . . f 1 1 1 1 f . . . . .
        . . . . . . f 1 1 f . . . . . .
        . . . . . . f d d f . . . . . .
        . . . . . . . f f . . . . . . .
    `, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . 1 1 1 1 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 9 9 9 9 9 9 . . . . .
        . . . 1 . 9 9 9 9 9 9 . 1 . . .
        . . . 1 . 9 9 9 9 9 9 . 1 . . .
        . . . 1 . 9 9 9 9 9 9 . 1 . . .
        . . . 1 . 9 9 9 9 9 9 . 1 . . .
        . . . . . 9 9 9 9 9 9 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . 1 1 1 1 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `]

let buffImgs = [img`
    . . f 2 2 2 2 2 2 2 2 2 2 2 2 .
    . . f 2 2 2 2 2 2 2 2 2 2 2 2 .
    . . f 2 2 2 2 2 1 1 2 2 2 2 2 .
    . . f 2 2 2 2 2 1 1 2 2 2 2 2 .
    . . f 2 2 2 2 2 1 1 2 2 2 2 2 .
    . . f 2 2 2 2 2 1 1 2 2 2 2 2 .
    . . f 2 2 2 2 2 1 1 2 2 2 2 2 .
    . . f 2 2 2 2 2 1 1 2 2 2 2 2 .
    . . f 2 2 2 2 2 1 1 2 2 2 2 2 .
    . . f 2 2 2 2 2 1 1 2 2 2 2 2 .
    . . f 2 2 2 1 1 1 1 1 1 2 2 2 .
    . . f 2 2 2 1 1 1 1 1 1 2 2 2 .
    . . f 2 2 2 2 2 1 1 2 2 2 2 2 .
    . . f 2 2 2 2 2 1 1 2 2 2 2 2 .
    . . f 2 2 2 2 2 2 2 2 2 2 2 2 .
    . . f 2 2 2 2 2 2 2 2 2 2 2 2 .
`,
img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . 3 3 3 3 3 3 3 3 . . . .
    . . . . 3 f f f f f f 3 . . . .
    . . . . 3 f 1 1 1 1 f 3 . . . .
    . . . . 3 f 1 2 2 1 f 3 . . . .
    . . . . 3 f 1 2 2 1 f 3 . . . .
    . . . . 3 f 1 1 1 1 f 3 . . . .
    . . . . 3 f f f f f f 3 . . . .
    . . . . 3 3 3 3 3 3 3 3 . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`
]

info.setLife(3)
let interval = 8000
recent = "right"
herald.setPosition(80, 110)
herald.setStayInScreen(true)
game.onUpdate(function () {
    if (info.life() < 1) {
        game.splash("you are a fool.")
        game.splash("you are a buffon.")
        game.splash("you meant nothing in this world.")
        game.splash("you will mean nothing in the next.")
    }
    if (recent == "right") {
        herald.setImage(heraldRight[animationCounter])
    }
    if (recent == "left") {
        herald.setImage(heraldLeft[animationCounter])
    }
})
game.onUpdateInterval(interval, function () {
    spawnEnemy()
    interval += 2000
    info.changeScoreBy(1)
})
game.onUpdateInterval(10000, function() {
    spawnBuff()
})
game.onUpdateInterval(150, function () {
    if (animationCounter == 3) {
        animationCounter = 0
    }
    animationCounter = animationCounter + 1
})
