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
        hitRewards: {
            levels: [
                { hits: 1, skulls: 1 },
                { hits: 5, skulls: 2 },
                { hits: 10, skulls: 3 },
                { hits: 15, skulls: 4 },
                { hits: 20, skulls: 5 },
                { hits: 25, skulls: 6 },
                { hits: 30, skulls: 7 },
                { hits: 35, skulls: 8 },
                { hits: 40, skulls: 9 },
                { hits: 45, skulls: 10 },
                { hits: 50, skulls: 11 },
                { hits: 55, skulls: 12 },
                { hits: 60, skulls: 13 },
                { hits: 65, skulls: 14 },
                { hits: 70, skulls: 15 },
                { hits: 75, skulls: 16 },
                { hits: 80, skulls: 17 },
                { hits: 85, skulls: 18 },
                { hits: 90, skulls: 19 },
                { hits: 95, skulls: 20 },
                { hits: 100, skulls: 21 }
            ]
        },
        bestRewards: {
            defender: { skulls: 2 },
            attacker: { skulls: 3 }
        }
    }
};
