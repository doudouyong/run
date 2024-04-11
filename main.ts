player.onChat("run", function () {
    mobs.spawn(CHICKEN, pos(10, 10, mobs.monster(CREEPER)))
    player.teleport(pos(0, 0, 0))
})
