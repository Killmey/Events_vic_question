// Rewards Configuration for all events
// GitHub: https://github.com/Killmey/Events_vic_question
// File: rewards_config.js
//
// Global rewardBonus adds extra skulls to every paid group in every event.
// Local event rewardBonus adds extra skulls only to that event.
// Example: global rewardBonus 5 + battle.rewardBonus 2 = +7 for battle paid groups.
// rewardGroups must have 6 groups:
//   groups 1-5: configurable players count and skulls
//   group 6: everyone else, consolation group with 0 skulls

var REWARDS_CONFIG = {
    rewardBonus: 0,

    battle: {
        rewardBonus: 0,
        rewardGroups: [
            { players: 1, skulls: 3 },
            { players: 2, skulls: 2 },
            { players: 5, skulls: 1 },
            { players: 0, skulls: 0 },
            { players: 0, skulls: 0 },
            { players: 0, skulls: 0 }
        ],
        specialRewards: {
            topKiller: 4
        }
    },

    potato: {
        rewardBonus: 0,
        rewardGroups: [
            { players: 1, skulls: 3 },
            { players: 2, skulls: 2 },
            { players: 5, skulls: 1 },
            { players: 0, skulls: 0 },
            { players: 0, skulls: 0 },
            { players: 0, skulls: 0 }
        ],
        specialRewards: {}
    },

    spleef: {
        rewardBonus: 0,
        rewardGroups: [
            { players: 1, skulls: 3 },
            { players: 2, skulls: 2 },
            { players: 5, skulls: 1 },
            { players: 0, skulls: 0 },
            { players: 0, skulls: 0 },
            { players: 0, skulls: 0 }
        ],
        specialRewards: {}
    },

    tntrun: {
        rewardBonus: 0,
        rewardGroups: [
            { players: 1, skulls: 3 },
            { players: 2, skulls: 2 },
            { players: 5, skulls: 1 },
            { players: 0, skulls: 0 },
            { players: 0, skulls: 0 },
            { players: 0, skulls: 0 }
        ],
        specialRewards: {}
    },

    snowfight: {
        rewardBonus: 0,
        rewardGroups: [
            { players: 1, skulls: 4 },
            { players: 2, skulls: 3 },
            { players: 5, skulls: 2 },
            { players: 0, skulls: 0 },
            { players: 0, skulls: 0 },
            { players: 0, skulls: 0 }
        ],
        specialRewards: {
            bestDefender: 2,
            bestAttacker: 3
        }
    },

    quiz: {
        rewardBonus: 0,
        rewardGroups: [
            { players: 1, skulls: 5 },
            { players: 2, skulls: 4 },
            { players: 5, skulls: 3 },
            { players: 0, skulls: 0 },
            { players: 0, skulls: 0 },
            { players: 0, skulls: 0 }
        ],
        specialRewards: {}
    }
};

function getRewardBonus(rewardConfig) {
    var globalBonus = typeof REWARDS_CONFIG.rewardBonus === "number" ? REWARDS_CONFIG.rewardBonus : 0;
    var localBonus = typeof rewardConfig.rewardBonus === "number" ? rewardConfig.rewardBonus : 0;
    var legacyBonus = typeof rewardConfig.bonusSkulls === "number" ? rewardConfig.bonusSkulls : 0;
    return globalBonus + localBonus + legacyBonus;
}

function getRewardGroupConfig(rewardConfig) {
    if (rewardConfig.rewardGroups && rewardConfig.rewardGroups.length) {
        return rewardConfig.rewardGroups.slice(0, 6);
    }

    var result = [];
    var legacyGroups = Math.min(rewardConfig.groups || 0, 5);
    for (var i = 0; i < legacyGroups; i++) {
        result.push({
            players: i === legacyGroups - 1 ? (rewardConfig.maxPlayersInLastGroup || 999) : 1,
            skulls: rewardConfig.skulls && rewardConfig.skulls[i] ? rewardConfig.skulls[i] : 0
        });
    }
    result.push({ players: 0, skulls: 0 });
    return result;
}

function buildRewardGroups(playersOrRankGroups, rewardConfig) {
    var paidGroups = getRewardGroupConfig(rewardConfig);
    var bonus = getRewardBonus(rewardConfig);
    var groups = [];
    var queue = [];

    for (var i = 0; i < playersOrRankGroups.length; i++) {
        var item = playersOrRankGroups[i];
        if (item instanceof Array) {
            queue.push(item.slice());
        } else {
            queue.push([item]);
        }
    }

    for (var groupIndex = 0; groupIndex < paidGroups.length && groupIndex < 6; groupIndex++) {
        var groupConfig = paidGroups[groupIndex];
        var isConsolationGroup = groupIndex === 5;
        var limit = isConsolationGroup ? 999999 : Math.max(0, groupConfig.players || 0);
        var players = [];

        while (queue.length > 0 && players.length < limit) {
            var rankGroup = queue[0];
            if (players.length > 0 && players.length + rankGroup.length > limit) {
                break;
            }
            players = players.concat(rankGroup);
            queue.shift();
        }

        if (players.length > 0) {
            groups.push({
                number: groupIndex + 1,
                players: players,
                skulls: isConsolationGroup ? 0 : Math.max(0, (groupConfig.skulls || 0) + bonus)
            });
        }
    }

    var consolation = [];
    while (queue.length > 0) {
        consolation = consolation.concat(queue.shift());
    }

    if (consolation.length > 0) {
        groups.push({
            number: 6,
            players: consolation,
            skulls: 0
        });
    }

    return groups;
}
