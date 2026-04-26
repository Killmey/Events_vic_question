// Rewards Configuration for all events
// GitHub: https://github.com/Killmey/Events_vic_question
// Файл: rewards_config.js
// 
// Управление наградами для всех ивентов через один конфиг.
// Изменения на GitHub подтягиваются автоматически при старте ивента.
//
// Структура каждого ивента:
//   groups             - количество групп награждения
//   skulls             - массив черепов для каждой группы (индекс 0 = 1-я группа)
//   maxPlayersInLastGroup - макс игроков в последней группе (остальные без награды)
//   bonusSkulls        - бонусные черепа (дополнительно к группе, для всех награждённых)
//   specialRewards     - спецнаграды (лучший киллер, лучший стрелок и тд)

var REWARDS_CONFIG = {

    // Battle Royale
    battle: {
        groups: 3,
        skulls: [7, 5, 3,],
        maxPlayersInLastGroup: 5,
        bonusSkulls: 0,
        specialRewards: {
            topKiller: 10
        }
    },

    // Горячая Картошка
    potato: {
        groups: 3,
        skulls: [10, 8, 6,],
        maxPlayersInLastGroup: 5,
        bonusSkulls: 0,
        specialRewards: {}
    },

    // Spleef
    spleef: {
        groups: 3,
        skulls: [7, 5, 3],
        maxPlayersInLastGroup: 5,
        bonusSkulls: 0,
        specialRewards: {}
    },

    // TNT Run
    tntrun: {
        groups: 3,
        skulls: [7, 5, 3],
        maxPlayersInLastGroup: 5,
        bonusSkulls: 0,
        specialRewards: {}
    },

    // Снежная Битва
    snowfight: {
        groups: 4,
        skulls: [7, 5, 3, 1],
        maxPlayersInLastGroup: 999,
        bonusSkulls: 0,
        specialRewards: {
            bestDefender: 2,
            bestAttacker: 3
        }
    },

    // Викторина
    quiz: {
        groups: 5,
        skulls: [12, 10, 8, 5, 3],
        maxPlayersInLastGroup: 5,
        bonusSkulls: 0,
        specialRewards: {}
    }
};
