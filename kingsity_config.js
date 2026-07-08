// Kingsity - конфигурация (зоны, настройки ивента, партиклы, звуки)
// GitHub: https://github.com/Killmey/Events_helper
// File: kingsity_config.js
//
// Вынесено из основного kingsity.js, чтобы не раздувать главный файл.
// Подключается через load() в самом начале kingsity.js - выполняется один
// раз при загрузке скрипта, задержек в рантайме это не даёт.

var CONFIG = {
    admins: ["Killmey", "Killmey99", "Hickoora", "Volomin", "Lodish", "Verno", "Griffinov"],
    worldId: 0,
    zones: {
        "zone1": {
            // Команда синих
            blueTeam: {
                spawnPoint: {x: -29, y: 6, z: -95},
                revivePoint: {x: -27, y: 6, z: -95},
                zone: {x1: -31, y1: 8, z1: -97, x2: -25, y2: 3, z2: -91},
                throneBlock: {x: -28, y: 4, z: -93},
                region: "event-kingsity-blue"
            },
            // Команда красных
            redTeam: {
                spawnPoint: {x: -21, y: 6, z: -95},
                revivePoint: {x: -19, y: 6, z: -95},
                zone: {x1: -23, y1: 8, z1: -97, x2: -17, y2: 3, z2: -91},
                throneBlock: {x: -20, y: 4, z: -93},
                region: "event-kingsity-red"
            },
            // Нейтральная (серая) зона
            neutralZone: {x1: -15, y1: 8, z1: -97, x2: -9, y2: 3, z2: -91},
            neutralRegion: "event-kingsity-neutral",
            // Зона для участия в ивенте (игроки в этой зоне становятся участниками после !ejoin)
            joinZone: {x1: 1, y1: 8, z1: -97, x2: 7, y2: 3, z2: -91},
            // Временная точка для возрождения
            reviveTempPoint: {x: -4, y: 6, z: -94},
            // Лобби
            lobbyPoint: {x: -31, y: 6, z: -88},
            deadPoint: {x: -29, y: 6, z: -88},
            // PvP флаги
            pvpInRegion: {
                on: "rg f event-kingsity-neutral pvp -w events allow",
                off: "rg f event-kingsity-neutral pvp -w events deny"
            },
            // Флаг входа (entry) в серую (нейтральную) зону.
            // Раньше запрещался ВЫХОД (exit) из синей/красной зоны - заменено
            // на запрет ВХОДА (entry) в серую зону, пока не началась фаза осады.
            entryRestriction: {
                on: "rg f event-kingsity-neutral entry -w events allow",
                off: "rg f event-kingsity-neutral entry -w events deny"
            }
        }
    },
    // Настройки ивента
    eventConfig: {
        buildingPhaseDuration: 30, // секунд
        throneBlockLives: 5,
        throneCooldown: 3, // секунд
        playerLives: 3,
        reviveTime: 5, // секунд
        throneBlock: "minecraft:gold_block",
        throneCooldownBlock: "minecraft:bedrock",
        teamHelmet: "minecraft:stained_glass", // Стекло с цветом команды
        // Стартовые ресурсы (массив для выбора)
        startResources: [
            {id: "minecraft:stone", count: 64},
            {id: "minecraft:wood", count: 64},
            {id: "minecraft:cobblestone", count: 64}
        ],
        // Предметы стартового кита
        // enchantments формат: "enchantId:level,enchantId:level" (например: "sharpness:5,unbreaking:3")
        startKit: [
            {id: "minecraft:stone_sword", count: 1, lore: "Командный меч", enchantments: "sharpness:3,unbreaking:2"},
            {id: "minecraft:stone_pickaxe", count: 1, lore: "Командная кирка", enchantments: "efficiency:2,unbreaking:2", unbreakable: true},
            {id: "minecraft:bow", count: 1, lore: "Командный лук", enchantments: "power:2,unbreaking:2"},
            {id: "minecraft:arrow", count: 32, lore: "Командные стрелы", enchantments: ""}
        ],
        // Дополнительные предметы ТОЛЬКО для команды синих (выдаются вместе со startKit)
        blueKit: [
            {id: "minecraft:snowball", count: 16, lore: "Снежки синих", enchantments: ""}
        ],
        // Дополнительные предметы ТОЛЬКО для команды красных (выдаются вместе со startKit)
        redKit: [
            {id: "minecraft:fire_charge", count: 2, lore: "Огненный заряд красных", enchantments: ""}
        ],
        // Веса для формулы рейтинга игрока при распределении по группам
        // наград (см. rewardPlayers() -> scoreOf()):
        //   score = kills * rewardWeights.kills
        //         + finalKills * rewardWeights.finalKills
        //         + throneBreaks * rewardWeights.throneBreaks
        // kills       - любое убийство врага (даже если он потом возродился)
        // finalKills  - убийство, после которого враг НЕ возродился (выбыл)
        // throneBreaks - любой успешный удар по вражескому трону
        rewardWeights: {
            kills: 1,
            finalKills: 2,
            throneBreaks: 3
        }
    },
    particles: {
        // ВАЖНО: red-канал не должен быть ровно 0 - движок "reddust" в этом
        // случае откатывается на дефолтный красный цвет, из-за чего синий
        // (0,0,1) визуально становится фиолетовым. Используем близкое к 0
        // значение (0.001) вместо точного нуля.
        BLUE: {r: 0.001, g: 0, b: 1},  // Синий цвет для партиклов
        RED: {r: 1, g: 0, b: 0},   // Красный цвет для партиклов
        GREY: {r: 0.5, g: 0.5, b: 0.5} // Серый цвет для кулдауна
    },
    // Звуки ивента. См. отдельный файл kingsity_sound_test.js для проверки
    // каждого звука по отдельности перед подключением сюда.
    // scope: "all" - слышат все игроки на сервере
    //        "team" - слышит только указанная команда (team берётся из места вызова)
    //        "positional" - звук слышат все игроки в зоне ивента, но громкость
    //                       падает с расстоянием от источника (имитация дальности)
    sounds: {
        countdownTick:  {name: "random.click",        scope: "all",        volume: 10.0, pitch: 1.0},
        gameStart:      {name: "random.orb",          scope: "all",        volume: 10.0, pitch: 1.0},
        buildingEnd:    {name: "note.pling",          scope: "all",        volume: 10.0, pitch: 1.0},
        siegeStart:     {name: "mob.wither.spawn",    scope: "all",        volume: 10.0, pitch: 1.0},
        throneHit:      {name: "random.anvil_land",   scope: "positional", volume: 10.0, pitch: 1.2, radius: 40},
        throneDestroyed:{name: "mob.wither.death",    scope: "positional", volume: 10.0, pitch: 0.8, radius: 60},
        throneRestored: {name: "random.levelup",      scope: "team",       volume: 10.0, pitch: 1.0},
        playerDeath:    {name: "mob.zombie.death",    scope: "positional", volume: 15.0, pitch: 1.0, radius: 25},
        playerRevived:  {name: "random.anvil_use",    scope: "team",       volume: 10.0, pitch: 1.0},
        victory:        {name: "mob.enderdragon.growl", scope: "all",      volume: 10.0, pitch: 1.0}
    }
};
