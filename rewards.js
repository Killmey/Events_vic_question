// Rewards Configuration v1.0.0
// This file controls rewards for all events
// Each event has its own configuration with groups of rewards

var REWARDS_CONFIG = {
    // Potato Event Rewards
    potato: {
        groups: [
            { place: 1, skulls: 10, bonusSkulls: 0 },
            { place: 2, skulls: 8, bonusSkulls: 0 },
            { place: 3, skulls: 6, bonusSkulls: 0 },
            { place: 4, skulls: 4, bonusSkulls: 0 },
            { place: 5, skulls: 2, bonusSkulls: 0 }
        ]
    },

    // Battle Royale Event Rewards
    battle: {
        groups: [
            { place: 1, skulls: 10, bonusSkulls: 0 },
            { place: 2, skulls: 8, bonusSkulls: 0 },
            { place: 3, skulls: 6, bonusSkulls: 0 },
            { place: 4, skulls: 4, bonusSkulls: 0 },
            { place: 5, skulls: 2, bonusSkulls: 0 }
        ],
        killReward: {
            skulls: 4
        }
    },

    // TNT-Run Event Rewards
    tntrun: {
        groups: [
            { place: 1, skulls: 10, bonusSkulls: 0 },
            { place: 2, skulls: 8, bonusSkulls: 0 },
            { place: 3, skulls: 6, bonusSkulls: 0 },
            { place: 4, skulls: 4, bonusSkulls: 0 },
            { place: 5, skulls: 2, bonusSkulls: 0 }
        ]
    },

    // Spleef Event Rewards
    spleef: {
        groups: [
            { place: 1, skulls: 10, bonusSkulls: 0 },
            { place: 2, skulls: 8, bonusSkulls: 0 },
            { place: 3, skulls: 6, bonusSkulls: 0 },
            { place: 4, skulls: 4, bonusSkulls: 0 },
            { place: 5, skulls: 2, bonusSkulls: 0 }
        ]
    },

    // Quiz Event Rewards
    quiz: {
        groups: [
            { place: 1, skulls: 10, bonusSkulls: 0 },
            { place: 2, skulls: 8, bonusSkulls: 0 },
            { place: 3, skulls: 6, bonusSkulls: 0 }
        ]
    },

    // Snowfight Event Rewards
    snowfight: {
        groups: [
            { place: 1, skulls: 10, bonusSkulls: 0 },
            { place: 2, skulls: 8, bonusSkulls: 0 },
            { place: 3, skulls: 6, bonusSkulls: 0 },
            { place: 4, skulls: 4, bonusSkulls: 0 },
            { place: 5, skulls: 2, bonusSkulls: 0 }
        ],
        bestRewards: {
            defender: { skulls: 2 },
            attacker: { skulls: 3 }
        }
    }
};
